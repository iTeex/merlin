import { Calculator } from './Knowledge/Calculator';
import { Encyclopedia } from './Knowledge/Encyclopedia';
import Open from './Open/Open';
import { Puppy } from './Knowledge/Puppy';
import { Time } from './Knowledge/Time';
import { Translator } from './Knowledge/Translator';
import { Weather } from './Knowledge/Weather';

const QuestionParser = {
    'calculate': {
      knowledge: Calculator,
      props: {}
    },
    'how': {
        'do': {
            'you': {
                'say': {
                    knowledge: Translator,
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
                    knowledge: Weather,
                    props: {
                        location: '',
                        value: 'rain'
                    }
                }
            },
            'cold': {
                'in': {
                    knowledge: Weather,
                    props: {
                      location: '',
                      value: 'cold'
                    }
                }
            },
            'hot': {
                'in': {
                    knowledge: Weather,
                    props: {
                      location: '',
                      value: 'hot'
                    }
                }
            }
        }
    },
    'open': {
        component: Open,
        props: true
    },
    'search': {
      knowledge: Encyclopedia,
      props: {}
    },
    'show': {
      'me': {
        'a': {
          'puppy': {
            knowledge: Puppy,
            props: false
          }
        }
      }
    },
    'what': {
        'time': {
            'is': {
                'it': {
                    knowledge: Time,
                    props: false
                }
            }
        },
        'is': {
            knowledge: Encyclopedia,
            props: {}
        }
    },
};
export default QuestionParser;