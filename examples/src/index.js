import { Event, EventType, EventBus } from '../../dist/';

/* Define the app init event */
EventBus.defineEvent( 'APP_INIT' );

const initEvent = new Event({
  name: 'APP_INIT',
  type: EventType.REQ,
});

/* Trigger the app init event */
initEvent.publish();
