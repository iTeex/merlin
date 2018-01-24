import Time from './Time/Time';
import Weather from './Weather/Weather';

const Library = [
    {
        request: 'what time is it?',
        component: Time
    },
    {
        request: 'is it raining?',
        component: Weather
    }
];
export default Library;