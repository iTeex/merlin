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
                },
                'it?': {
                    component: Time,
                    props: false
                }
            }
        }
    },
    'is': {
        'it': {
            'raining': {
                component: Weather,
                props: false,
                'in': {
                    component: Weather,
                    props: true
                }
            },
            'raining?': {
                component: Weather,
                props: false
            }
        }
    },
    'open': {
        component: Open,
        props: true
    }
};
export default QuestionParser;