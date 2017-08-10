/* This class represents an event source exception */
class EventSourceException {
  constructor( message ) {
    this.name = 'EventSourceException';
    this.message = message;
  }
}

export default EventSourceException;
