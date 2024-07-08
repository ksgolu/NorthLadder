import express, { Router } from "express";
import controller from "../controller/event";

const router: Router = express.Router();

router.post("/", controller.createEvent);
router.get("/", controller.listEvent);
router.get("/:eventId", controller.getEventById);
router.put("/:eventId", controller.updateEventById);
router.delete("/:eventId", controller.deleteEventById);

export default router;
