import { Router } from "express";
import { listUsers, addUser } from "../controllers/users.controller.js";

const router = Router();

router.get("/", listUsers);
router.post("/", addUser);

export default router;
