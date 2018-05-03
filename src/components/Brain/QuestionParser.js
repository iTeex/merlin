import { Calculator } from './Knowledge/Calculator';
import { DataFinder } from './Knowledge/DataFinder';
import { Encyclopedia } from './Knowledge/Encyclopedia';
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