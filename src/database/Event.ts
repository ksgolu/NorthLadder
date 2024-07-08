import Services from "../services";

import type { Query, Event } from "../../type";

class EventModel {
  private static eventList: Event[] = [];
  event: Event;
  constructor(event: Event) {
    this.event = event;
  }

  public static create(event: Event): Event {
    this.eventList.push(event);
    return event;
  }

  public static list(
    query: Query = {
      skip: 0,
      limit: 30,
      organizer: undefined,
      eventName: undefined,
    }
  ) {
    const event = performQuery(query, this.eventList);
    return event;
  }

  public static getById(id: string): Event {
    const event: any = this.eventList.find((event: Event) => event.id == id);
    return event;
  }

  public static updateById(id: string, updateSet: Event): Event {
    let bool: boolean = false;
    console.log(this.eventList);
    let event: any = this.eventList.find((event: Event) => event.id === id);
    if (!event) return event;

    event = { ...event, ...updateSet };
    return event;
  }

  public static deleteById(id: string): Event[] | null {
    let event: Event[];
    const index = this.eventList.findIndex((event: Event) => event.id == id);
    if (index == -1) return null;
    event = this.eventList.splice(index, 1);
    return event;
  }
  public static count(): number {
    return this.eventList.length;
  }
  public save() {
    const event: Event = EventModel.create(this.event);
    return event;
  }
}

function performQuery(query: Query, event: Event[]): Event[] {
  console.log(query);
  const skip = query.skip;
  let limit = query.limit;
  let events: Event[] = event;
  const eventLength: number = event.length;

  if (eventLength && skip >= eventLength) throw new Error("invalid page value");

  if (limit >= eventLength) limit = eventLength;

  if (skip >= limit) {
    limit = skip + limit;
    if (limit >= eventLength) {
      limit = eventLength;
    }
  }

  if (query.eventName || query.organizer) {
    let filterFunc: any;

    if (query.eventName && query.organizer)
      filterFunc = (event: Event) =>
        event.eventName == query.eventName &&
        event.organizer == query.organizer;
    else if (query.eventName)
      filterFunc = (event: Event) => event.eventName == query.eventName;
    else if (query.organizer)
      filterFunc = (event: Event) => event.organizer == query.organizer;
    events = events.filter(filterFunc);
  }

  const eventData = events.slice(skip, limit);
  return eventData;
}

export default EventModel;

export { Event, Query };
