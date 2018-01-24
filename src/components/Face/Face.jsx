import Brain from '../Brain/Brain';
import ChatBot  from 'react-simple-chatbot';
import React from 'react';

import './Face.css';

function Face() {

    return (
        <div>
            <ChatBot
                placeholder=" "
                width="50%"
                botDelay="0"
                customDelay="0"
                userDelay="0"
                hideBotAvatar="true"
                hideHeader="true"
                hideUserAvatar="true"
                hideSubmitButton="true"
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