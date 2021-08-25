import {
  Publisher,
  OrderCancelledEvent,
  Subjects,
} from "@fujingrtickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
