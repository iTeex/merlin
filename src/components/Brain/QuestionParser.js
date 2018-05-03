import { Calculator } from './Knowledge/Calculator';
import { DataFinder } from './Knowledge/DataFinder';
import { Encyclopedia } from './Knowledge/Encyclopedia';
import { Instructions } from './Knowledge/Instructions';
import { Joke } from './Knowledge/Joke';
import { Lyrics } from './Knowledge/Lyrics';
import { Open } from './Knowledge/Open';
import { Phone } from './Knowledge/Phone';
import { Puppy } from './Knowledge/Puppy';
import { Sports } from './Knowledge/Sports';
import { Sun } from './Knowledge/Sun';
import { Time } from './Knowledge/Time';
import { Translator } from './Knowledge/Translator';
import { Weather } from './Knowledge/Weather';

const calculate = {
  knowledge: Calculator,
  props: {}
};
const call = {
  knowledge: Phone,
  props: {}
};
const get = {
  'me': {
    'the': {
      'lyrics': {
        'of': {
          knowledge: Lyrics,
          props: {}
        }
      },
      'last': {
        'results': {
          'of': {
            knowledge: Sports,
            props: {
              date: 'last',
              value: 'results'
            }
          }
        },
        'result': {
          'of': {
            knowledge: Sports,
            props: {
              date: 'last',
              value: 'result'
            }
          }
        }
      }
    },
    'yesterday\'s': {
      'result': {
        'of': {
          knowledge: Sports,
          props: {
            date: 'last',
            value: 'result'
          }
        }
      }
    }
  }
};
const how = {
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
};
const is = {
  'it': {
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
    },
    'raining': {
      'in': {
        knowledge: Weather,
        props: {
          location: '',
          value: 'rain'
        }
      }
    }
  }
};
const open = {
  knowledge: Open,
  props: {}
};
const search = {
  knowledge: Encyclopedia,
  props: {}
};
const show = {
  'me': {
    'a': {
      'puppy': {
        knowledge: Puppy,
        props: false
      }
    }
  }
};
const tell = {
  'me': {
    'a': {
      'joke': {
        knowledge: Joke,
        props: false
      }
    }
  }
};
const what = {
  'are': {
    'the': {
      'lyrics': {
        'of': {
          knowledge: Lyrics,
          props: {}
        }
      }
    }
  },
  'can': {
    'you': {
      'tell': {
        'me': {
          'about': {
            knowledge: DataFinder,
            props: {}
          }
        }
      }
    },
    'i': {
      'ask': {
        'you': {
          knowledge: Instructions,
          props: {}
        }
      }
    }
  },
  'is': {
    knowledge: Encyclopedia,
    props: {}
  },
  'time': {
    'is': {
      'it': {
        knowledge: Time,
        props: false
      }
    }
  }
};
const when = {
  'will': {
    'the': {
      'sun': {
        'set': {
          knowledge: Sun,
          props: {
            value: 'set',
            date: 'today'
          },
          'tomorrow': {
            knowledge: Sun,
            props: {
              value: 'set',
              date: 'tomorrow'
            }
          }
        },
        'rise': {
          knowledge: Sun,
          props: {
            value: 'rise',
            date: 'today'
          },
          'tomorrow': {
            knowledge: Sun,
            props: {
              value: 'rise',
              date: 'tomorrow'
            }
          }
        }
      }
    }
  }
};

const QuestionParser = {
  calculate,
  call,
  get,
  how,
  is,
  open,
  search,
  show,
  tell,
  what,
  when,
};
export default QuestionParser;

export const AllowedQuestions = [
  'Calculate [formula]',
  'Call [phone number]',
  'Get me the lyrics of [song  name]',
  'Get me the last results of [sports team] (5 last)',
  'Get me the last result of [sports team]',
  'Get me yesterday\'s result of [sports team]',
  'How do you say [phrase] in [language]?',
  'Is it cold in [city]?',
  'Is it hot in [city]?',
  'Is it raining in [city]?',
  'Open [url]',
  'Search [phrase]',
  'Show me a puppy',
  'Tell me a joke',
  'What are the lyrics of [song] by [artist]?',
  'What can you tell me about [url]?',
  'What can I ask you?',
  'What is [phrase]?',
  'What time is it?',
  'When will the sun set?',
  'When will the sun set tomorrow?',
  'When will the sun rise?',
  'When will the sun rise tomorrow?',
];