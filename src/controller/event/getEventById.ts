import { Express, Request, Response } from "express";
import type { Event } from "../../../type";
import EventModel from "../../database/Event";
import Services from "../../services";

export default (req: Request, res: Response) => {
  let code = 500;
  const eventId: string = req.params.eventId;
  try {
    const event: Event = EventModel.getById(eventId);
    if (!event) {
      code = 200;
      throw new Error("no event found");
    }
    Services._response(res, 200, event);
  } catch (e: any) {
    Services._handleError(req, res, e, code, e.message);
  }
};
