import Open from './Open/Open';
import Time from './Time/Time';
import Weather from './Weather/Weather';

const QuestionParser = {
    'what': {
        'time': {
            'is': {
                'it': {
                    component: Time,
                    props: false
                }
            }
        }
    },
    'is': {
        'it': {
            'raining': {
                'in': {
                    component: Weather,
                    props: true
                }
            }
        }
    },
    'open': {
        component: Open,
        props: true
    }
};
export default QuestionParser;