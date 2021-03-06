import React, { useEffect, useState } from 'react'
import { chatbotStore } from '../../store'
import ChatbotMessage from './Chatbot-Message';

const ChatBot = () => {

    const [inputField, setInputField] = useState();

    const getInputName = (e) => {
        setInputField({[e.target.name]: e.target.value});
    }

    const { topMessage , input, messages, getInput} = chatbotStore.getState();
    const inputValue = chatbotStore((state)=>state.inputValue)
    const getAnswer = chatbotStore((state) => state.getAnswer)
    const getBotIntro = chatbotStore((state) => state.getBotIntro)
    const loading = chatbotStore((state) => state.loading)
    const nextQuestion = chatbotStore((state) => state.nextQuestion)

    const showTopMessageShow = () => {
        return {__html: topMessage};
    }

    useEffect(() => {
        getBotIntro()
    }, []);

    return (
        <div className="chatbot">
           <div className="chatbot__title">
               <div className="chatbot__logo">
                   <div onClick={()=> getBotIntro()}><span className="chatbot__back">🔄</span></div>
                </div>
               <div className="chatbot__title-text">{loading ? <div className={`robot__animation--${messages.length}`}><span className="chatbot__robot">🤖</span></div> : <div><span className="chatbot__robot">🤖</span></div>}</div>
               <div onClick={(e)=> getAnswer("DIE")} className="chatbot__logo"><span className="chatbot__back">❌</span></div>
           </div>
           <div className="chatbot__container">
               {loading ? null : <div className="chatbot__top-message" dangerouslySetInnerHTML={showTopMessageShow()}></div>}

                
                {loading ? <div className="loading-middle">Loading</div> : <div className="chatbot__messages">{messages.map((message, index) => {
                    return(<ChatbotMessage message={message} index={index} key={index}/>)
                })}</div>}
                
               
  
           </div>
           {!loading && input ? <form onSubmit={(e)=> {
            e.preventDefault()
            getInput(inputField)
            getAnswer(nextQuestion);
           } } className="chatbot__footer input__animation">
                    <input onChange={(e)=> getInputName(e)} type="text" name={inputValue} className="chatbot__text-input" autoFocus/>
                        <button type="submit" 
                       className="chatbot__return-button">
                   SEND
               </button>
           </form> : null} 
        </div>
    )
}

export default ChatBot
