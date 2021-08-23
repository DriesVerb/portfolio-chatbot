import React from 'react'
import { chatbotStore } from '../../store'

const ChatbotMessage = ({message, index, onChangeNavigation, navigation}) => {
    const getAnswer = chatbotStore((state) => state.getAnswer)
    const {path} = navigation;

    return (
        <div onClick={(e)=>{
            e.preventDefault();
            getAnswer(message.nQ);
            onChangeNavigation(message.nQ);
        }} className={`message message__animation--${index}`}>
            <div className="message__text">{message.msg}</div>
        </div>
    )
}

export default ChatbotMessage;
