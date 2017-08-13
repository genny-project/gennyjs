import { EventSourceAdapter, EventBus, Event, EventType } from '../../../core';

class TimerAdapter extends EventSourceAdapter {
  onEvent( name, event ) {
    switch ( name ) {
      case 'TIMER_SCHEDULE':
        return this.onTimerScheduleEvent( event );
      default:
        return null;
    }
  }

  onTimerScheduleEvent( event ) {
    const { delay, repeat } = event.getData();
    if ( delay ) {
      if ( repeat ) {
        setInterval(() => {
          this.onTriggered( event );
        }, delay );
      } else {
        setTimeout(() => {
          this.onTriggered( event );
        }, delay );
      }
    }
  }

  onTriggered( event ) {
    const type = event.getType();
    if ( type === EventType.REQ ) {
      const key = event.getData().key ? event.getData().key : '';
      EventBus.defineEvent( `TIMER_${key}_TRIGGERED` );

      /* Create a response event */
      const e = new Event({
        name: `TIMER_${key}_TRIGGERED`,
        type: EventType.REQ,
      });

      /* Trigger the event */
      e.publish();
    }

    if ( type === EventType.REQRES ) {
      event.respond();
    }
  }
}

export default TimerAdapter;
