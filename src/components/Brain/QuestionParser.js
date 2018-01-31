import Calculator from './Calculator/Calculator';
import Open from './Open/Open';
import Time from './Time/Time';
import Translator from './Translator/Translator';
import Weather from './Weather/Weather';

const QuestionParser = {
    'calculate': {
      component: Calculator,
      props: {}
    },
    'how': {
        'do': {
            'you': {
                'say': {
                    component: Translator,
                    props: {
                        location: '',
                    }
                }
            }
        }
    },
    'is': {
        'it': {
            'raining': {
                'in': {
                    component: Weather,
                    props: {
                        location: '',
                        value: 'Rain'
                    }
                }
            },
            'cold': {
                'in': {
                    component: Weather,
                    props: {
                      location: '',
                      value: 'Cold'
                    }
                }
            },
            'hot': {
                'in': {
                    component: Weather,
                    props: {
                      location: '',
                      value: 'Hot'
                    }
                }
            }
        }
    },
    'open': {
        component: Open,
        props: true
    },
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
};
export default QuestionParser;