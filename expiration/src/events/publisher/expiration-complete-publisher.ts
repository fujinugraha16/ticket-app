import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@fujingrtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
