const { Order } = require("../models");
const _ = require("lodash");

const prepareOrder = (body) =>
  _.pick(body, [
    "productName",
    "customerId",
    "quantity",
    "shipped",
    "shippedDate"
  ]);

module.exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.findAll({ limit: 10 });

    res.send({ data: orders });
  } catch (error) {
    next(error);
  }
};

module.exports.getOrderById = async (req, res, next) => {
  try {

    const {
      params: { id },
    } = req;

    const foundOrder = await Order.findOne({
      where: {
        id,
      },
    });

    if (!foundOrder) {
      return next(new Error("Order not found"));
    }

    res.status(200).send({ data: foundOrder });
  } catch (error) {
    next(error);
  }
};

module.exports.createOrder = async (req, res, next) => {
  try {

    const prep = prepareOrder(req.body);

    const order = await Order.create(prep);

    res.status(201).send({ data: order });
  } catch (error) {
    next(error);
  }
};



module.exports.updateOrder = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const prep = prepareOrder(body);

    const [rowsCount, [updatedOrder]] = await Order.update(prep, {
      where: {
        id,
      },
      returning: true,
    });

    if (rowsCount === 0) {
      return next(new Error("Order not found"));
    }
    
    res.status(200).send({ data: updatedOrder });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteOrder = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const foundOrder = await Order.findByPk(id);
   
    if (!foundOrder) {
      return next(new Error("Order not found"));
    }

    const verdict = await foundOrder.destroy();

    if (!verdict) {
      throw new Error("Cannot delete order");
    }

    res.status(200).send({ data: foundOrder });
  } catch (error) {
    next(error);
  }
};

