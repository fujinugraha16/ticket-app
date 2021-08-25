import { Publisher, OrderCreatedEvent, Subjects } from "@fujingrtickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
