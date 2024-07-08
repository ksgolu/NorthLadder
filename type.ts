export interface Event {
  id: string; // Unique identifier for the event
  eventName: string; // Name of the event
  eventDate: Date; // Date of the event
  organizer: string; // Organizer's name
  email: string; // Email of the organizer
  phone: string; // Phone number of the organizer
  location: {
    street: string; // Venue street address
    city: string; // Venue city
    state: string; // Venue state
    zip: string; // Venue zip code
  };
  createdAt: Date; // Timestamp when the event was created
  updatedAt: Date; // Timestamp when the event was last updated
}

export type Query = {
  skip: number;
  limit: number;
  eventName: String | undefined;
  organizer: String | undefined;
};

export interface EventModels {
  eventList: Event[];
  event: Event;

  create(event: Event): Event;
  list(query: Query): Event[];
  getById(id: number): Event;
  updateById(id: string, updateSet: object): Event;
  deleteById(id: number): Event;
  save(): Event;
}
