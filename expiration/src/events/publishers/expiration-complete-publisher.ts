import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@jain449tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
