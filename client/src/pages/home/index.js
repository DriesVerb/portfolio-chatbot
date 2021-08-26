import React from 'react'

// components
import ChatBot from '../../components/chatbot'

const Home = () => {
    return (
        <div className="home">
            <ChatBot/>
            <footer className="footer">
                This chatbot is written by Dries Verboven
            </footer>
        </div>
    )
}

export default Home
