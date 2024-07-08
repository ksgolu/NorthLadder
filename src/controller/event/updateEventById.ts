import { Express, Request, Response } from "express";
import type { Event } from "../../../type";
import EventModel from "../../database/Event";
import Services from "../../services";

export default (req: Request, res: Response) => {
  let code = 500;
  const eventId: string = req.params.eventId;
  const body: Event = req.body;
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
    if (!Services._validateUpdateFiled(allowedUpdateFiled, body))
      throw new Error("invalid value");
    console.log(eventId);
    const event: Event = EventModel.updateById(eventId, body);

    if (!event) {
      code = 200;
      throw new Error("no event found");
    }
    Services._response(res, 200, event);
  } catch (e: any) {
    Services._handleError(req, res, e, code, e.message);
  }
};
