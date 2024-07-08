"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(require("../../database/Event"));
const services_1 = __importDefault(require("../../services"));
exports.default = (req, res) => {
    let code = 500;
    const eventId = req.params.eventId;
    const body = req.body;
    const allowedUpdateFiled = [
        "eventName", // Name of the event
        "eventDate", // Date of the event
        "organizer", // Organizer's name
        "email", // Email of the organizer
        "phone", // Phone number of the organizer
        "location",
    ];
    try {
        // validating update field
        if (!services_1.default._validateUpdateFiled(allowedUpdateFiled, body))
            throw new Error("invalid value");
        console.log(eventId);
        const event = Event_1.default.updateById(eventId, body);
        if (!event) {
            code = 200;
            throw new Error("no event found");
        }
        services_1.default._response(res, 200, event);
    }
    catch (e) {
        services_1.default._handleError(req, res, e, code, e.message);
    }
};
