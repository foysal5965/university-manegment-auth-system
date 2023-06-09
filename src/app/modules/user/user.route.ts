import express from "express";
import { UserController } from "./user.controller";
import validedRequest from "../../middleWares/validationREquest";
import { userValidatioin } from "./userValidation";

const router= express.Router();
router.post('/create-user', validedRequest(userValidatioin.createUserZodSchema),  UserController.createUser)
export const UserRoutes={
    router
}