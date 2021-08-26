import React from 'react'
import ChatBot from '../../components/chatbot'

const Home = () => {
    return (
        <div className="home">
            <ChatBot/>
            <footer className="footer">
                This chatbot is written by <a rel="noreferrer" target="blank" href="https://github.com/DriesVerb/">Dries Verboven</a> 
            </footer>
        </div>
    )
}

export default Home
