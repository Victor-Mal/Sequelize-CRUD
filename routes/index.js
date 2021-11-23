const express = require("express");
const router = express.Router();
const usersRouter = require("./users.router");
const ordersRouter = require("./orders.router");

router.use("/users", usersRouter);
router.use("/orders", ordersRouter);

module.exports = router;
