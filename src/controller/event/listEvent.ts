import { Express, Request, Response } from "express";
import type { Event, Query } from "../../../type";
import EventModel from "../../database/Event";
import Services from "../../services";

export default (req: Request, res: Response) => {
  const page: number = Number(req.query.page) || 1;
  let limit: number = Number(req.query.limit);
  let eventName: string | undefined = req.query.eventName?.toString();
  let organizer: string | undefined = req.query.organizer?.toString();

  // handling page and limit
  limit = limit ? limit : 30;
  const skip = page == 1 ? 0 : page * limit - limit;

  const query: Query = {
    skip,
    limit,
    eventName,
    organizer,
  };
  try {
    // db operations
    const totalEvent: number = EventModel.count();
    const events: Event[] = EventModel.list(query);

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
    Services._response(res, 200, data);
  } catch (e: any) {
    let code: number = 500;
    Services._handleError(req, res, e, code, e.message);
  }
};
