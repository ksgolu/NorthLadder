"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const event_1 = __importDefault(require("../controller/event"));
const router = express_1.default.Router();
router.post("/", event_1.default.createEvent);
router.get("/", event_1.default.listEvent);
router.get("/:eventId", event_1.default.getEventById);
router.put("/:eventId", event_1.default.updateEventById);
router.delete("/:eventId", event_1.default.deleteEventById);
exports.default = router;
