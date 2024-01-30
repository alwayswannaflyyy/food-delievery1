import { Router } from "express";
import { createFood, getAllFoods } from "../controllers";

const foodRouter = Router();

foodRouter.get("/", getAllFoods).get("/create", createFood);

export default foodRouter;