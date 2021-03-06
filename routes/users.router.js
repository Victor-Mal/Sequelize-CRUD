const userRouter = require('express').Router();
const userController = require("../controllers/user.controller");

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.getAllUsers);

userRouter.get("/:id", userController.getUserById);
userRouter.patch("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);


module.exports = userRouter;
