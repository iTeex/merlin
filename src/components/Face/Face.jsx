import Brain from '../Brain/Brain';
import ChatBot  from 'react-simple-chatbot';
import React from 'react';

import './Face.css';
import './Squares.css';

function Face() {

    return (
        <div>
          <div className="big-square-1"></div>
          <div className="big-square-2"></div>
          <div className="big-square-3"></div>
          <div className="little-square-1"></div>
          <div className="little-square-2"></div>
          <div className="little-square-3"></div>

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