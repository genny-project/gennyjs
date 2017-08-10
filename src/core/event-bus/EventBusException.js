/* This class represents a event bus exception */
class EventBusException {
  constructor( message ) {
    this.name = 'EventBusException';
    this.message = message;
  }
}

export default EventBusException;
