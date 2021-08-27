import {
  Publisher,
  PaymentCreatedEvent,
  Subjects,
} from "@fujingrtickets/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
