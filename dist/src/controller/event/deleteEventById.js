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
    try {
        // deleting event from db
        const event = Event_1.default.deleteById(eventId);
        // handling, not found
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
