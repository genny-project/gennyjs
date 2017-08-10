/**
 * Define the event types. The first type REQ is a request type event. A request
 * type event doesn't expect any response and doesn't implement any response
 * handler. A REQRES type is an event that expects a response and will implement
 * a response handler
 */
export default {
  REQ: 1,
  REQRES: 2,
};
