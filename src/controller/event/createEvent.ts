import { Express, Request, Response } from "express";
import type { Event } from "../../../type";
import EventModel from "../../database/Event";
import Services from "../../services";
import { uid } from "rand-token";

export default (req: Request, res: Response) => {
  const REQUIRED_FIELDS = ["eventName", "organizer", "phone"];
  const requestBody = req.body;
  let code: number = 500;
  try {
    // validate request
    if (!Services._validateRequiredField(REQUIRED_FIELDS, requestBody))
      throw new Error("invalid request body");

    //add addition field to request body
    const data = addAdditionField(requestBody);

    // save to database
    const event = new EventModel(data).save();
    ``;

    Services._response(res, 201, event);
  } catch (e: any) {
    Services._handleError(req, res, e, code, e.message);
  }
};

function addAdditionField(obj: Event): Event {
  const additionField = {
    id: uid(6),
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

  obj = { ...additionField, ...obj };
  return obj;
}
