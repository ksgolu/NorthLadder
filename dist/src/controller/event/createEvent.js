"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(require("../../database/Event"));
const services_1 = __importDefault(require("../../services"));
const rand_token_1 = require("rand-token");
exports.default = (req, res) => {
    const REQUIRED_FIELDS = ["eventName", "organizer", "phone"];
    const requestBody = req.body;
    let code = 500;
    try {
        // validate request
        if (!services_1.default._validateRequiredField(REQUIRED_FIELDS, requestBody))
            throw new Error("invalid request body");
        //add addition field to request body
        const data = addAdditionField(requestBody);
        // save to database
        const event = new Event_1.default(data).save();
        ``;
        services_1.default._response(res, 201, event);
    }
    catch (e) {
        services_1.default._handleError(req, res, e, code, e.message);
    }
};
function addAdditionField(obj) {
    const additionField = {
        id: (0, rand_token_1.uid)(6),
        eventDate: null,
        email: null,
        location: {
            street: null, // Venue street address
            city: null, // Venue city
            state: null, // Venue state
            zip: null, // Venue zip code
        },
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true,
    };
    obj = Object.assign(Object.assign({}, additionField), obj);
    return obj;
}
