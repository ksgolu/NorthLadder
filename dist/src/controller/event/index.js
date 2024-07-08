"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const createEvent_1 = __importDefault(require("./createEvent"));
const listEvent_1 = __importDefault(require("./listEvent"));
const getEventById_1 = __importDefault(require("./getEventById"));
const updateEventById_1 = __importDefault(require("./updateEventById"));
const deleteEventById_1 = __importDefault(require("./deleteEventById"));
exports.default = {
    createEvent: createEvent_1.default,
    listEvent: listEvent_1.default,
    getEventById: getEventById_1.default,
    updateEventById: updateEventById_1.default,
    deleteEventById: deleteEventById_1.default,
};
