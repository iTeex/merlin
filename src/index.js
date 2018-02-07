import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Face from './components/Face/Face';
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Face />
  </Provider>,
  document.getElementById('root')
);
