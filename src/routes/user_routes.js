import express from "express"
import { user_register } from "../controllers/user_controllers"
const user_routes = express.Router()

//userRegister
user_routes.post("/user/register", user_register)

export default user_routes