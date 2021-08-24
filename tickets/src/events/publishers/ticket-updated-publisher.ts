import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from "@fujingrtickets/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
