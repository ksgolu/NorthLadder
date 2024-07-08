"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventModel {
    constructor(event) {
        this.event = event;
    }
    static create(event) {
        this.eventList.push(event);
        return event;
    }
    static list(query = {
        skip: 0,
        limit: 30,
        organizer: undefined,
        eventName: undefined,
    }) {
        const event = performQuery(query, this.eventList);
        return event;
    }
    static getById(id) {
        const event = this.eventList.find((event) => event.id == id);
        return event;
    }
    static updateById(id, updateSet) {
        let bool = false;
        console.log(this.eventList);
        let event = this.eventList.find((event) => event.id === id);
        if (!event)
            return event;
        event = Object.assign(Object.assign({}, event), updateSet);
        return event;
    }
    static deleteById(id) {
        let event;
        const index = this.eventList.findIndex((event) => event.id == id);
        if (index == -1)
            return null;
        event = this.eventList.splice(index, 1);
        return event;
    }
    static count() {
        return this.eventList.length;
    }
    save() {
        const event = EventModel.create(this.event);
        return event;
    }
}
EventModel.eventList = [];
function performQuery(query, event) {
    console.log(query);
    const skip = query.skip;
    let limit = query.limit;
    let events = event;
    const eventLength = event.length;
    if (eventLength && skip >= eventLength)
        throw new Error("invalid page value");
    if (limit >= eventLength)
        limit = eventLength;
    if (skip >= limit) {
        limit = skip + limit;
        if (limit >= eventLength) {
            limit = eventLength;
        }
    }
    if (query.eventName || query.organizer) {
        let filterFunc;
        if (query.eventName && query.organizer)
            filterFunc = (event) => event.eventName == query.eventName &&
                event.organizer == query.organizer;
        else if (query.eventName)
            filterFunc = (event) => event.eventName == query.eventName;
        else if (query.organizer)
            filterFunc = (event) => event.organizer == query.organizer;
        events = events.filter(filterFunc);
    }
    const eventData = events.slice(skip, limit);
    return eventData;
}
exports.default = EventModel;
