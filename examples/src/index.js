import GennyJS, { EventBus, Logger, LogLevel, Workflow, Store, Reducer, EventSource } from '../../dist/';
import initWorkflow from './init.workflow';
import fetchWeatherWorkflow from './fetchWeather.workflow';
import fetchAllWeatherWorkflow from './fetchAllWeather.workflow';
import logWeather from './logWeather.workflow';
import customEvents from './events';

/* Set log level */
Logger.setLevel( LogLevel.INFO );

/* Create a store and a reducer */
const weatherStore = new Store({ name: 'weather' });
GennyJS.registerStore( weatherStore );

new Reducer({
  store: weatherStore,
  subscribe: [
    { name: 'WEATHER_FETCHED', options: {} },
  ],
  handler: ( event, prev ) => {
    const data = event.getData();
    return {
      ...prev,
      [data.data.name.toLowerCase()]: data.data.main.temp,
    };
  },
});

/* Init */
GennyJS.init();

/* Create a event source to fetch the weather */
new EventSource({
  adapter: 'http',
  subscribe: [
    { name: 'WEATHER_API_FETCH', mapTo: 'HTTP_REQUEST', options: {} },
  ],
  publish: [],
  config: {
    responseEvent: 'WEATHER_FETCHED',
    errorEvent: 'WEATHER_ERROR',
    baseURL: 'http://api.openweathermap.org/',
  },
});

/* Load the custom events */
EventBus.defineEvent( customEvents );

/* Load workflows */
new Workflow( initWorkflow );
new Workflow( fetchAllWeatherWorkflow );
new Workflow( fetchWeatherWorkflow );
new Workflow( logWeather );

GennyJS.start();

window.GennyJS = GennyJS;
