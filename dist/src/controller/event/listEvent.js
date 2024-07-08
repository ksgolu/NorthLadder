"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Event_1 = __importDefault(require("../../database/Event"));
const services_1 = __importDefault(require("../../services"));
exports.default = (req, res) => {
    var _a, _b;
    const page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit);
    let eventName = (_a = req.query.eventName) === null || _a === void 0 ? void 0 : _a.toString();
    let organizer = (_b = req.query.organizer) === null || _b === void 0 ? void 0 : _b.toString();
    // handling page and limit
    limit = limit ? limit : 30;
    const skip = page == 1 ? 0 : page * limit - limit;
    const query = {
        skip,
        limit,
        eventName,
        organizer,
    };
    try {
        // db operations
        const totalEvent = Event_1.default.count();
        const events = Event_1.default.list(query);
        // preparing response data
        const data = {
            events,
            count: {
                total: totalEvent,
                count: events.length,
                page: page,
                skip: skip,
                limit: limit,
            },
        };
        services_1.default._response(res, 200, data);
    }
    catch (e) {
        let code = 500;
        services_1.default._handleError(req, res, e, code, e.message);
    }
};
