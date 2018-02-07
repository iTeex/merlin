import Brain from '../Brain/Brain';
import ChatBot  from 'react-simple-chatbot';
import React from 'react';

import Logo from '../Logo/Logo'
import './Face.css';

function Face() {
  return (
    <div>
      <Logo/>
      <ChatBot
        placeholder=" "
        width="100%"
        botDelay="0"
        customDelay="0"
        userDelay="0"
        hideBotAvatar={true}
        hideHeader={true}
        hideUserAvatar={true}
        recognitionEnable={true}
        steps={[
          {
            id: 'hello',
            message: 'Hi Pierre, what can I do for you?',
            trigger: 'question'
          },
          {
            id: 'question',
            trigger: 'think',
            user: true
          },
          {
            id: 'think',
            component: <Brain />,
            trigger: 'question'
          }
        ]}
      />
    </div>
  )
}
export default Face;