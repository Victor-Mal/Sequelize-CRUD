const orderRouter = require("express").Router();

const orderController = require("../controllers/order.controller");

orderRouter.post("/", orderController.createOrder);
orderRouter.get("/", orderController.getAllOrders);


orderRouter.get("/:id", orderController.getOrderById);
orderRouter.patch("/:id", orderController.updateOrder);
orderRouter.delete("/:id", orderController.deleteOrder);


module.exports = orderRouter;
