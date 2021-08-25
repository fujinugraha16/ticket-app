import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@fujingrtickets/common";

export class OrderCreatedPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
