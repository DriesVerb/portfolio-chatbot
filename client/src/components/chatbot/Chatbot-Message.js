import React from 'react'
import { chatbotStore } from '../../store'

const ChatbotMessage = ({message, index}) => {
    const getAnswer = chatbotStore((state) => state.getAnswer)


    return (
        <div onClick={(e)=>{
            e.preventDefault();
            getAnswer(message.nQ);
        }} className={`message message__animation--${index}`}>
            <div className="message__text">{message.msg}</div>
        </div>
    )
}

export default ChatbotMessage;
