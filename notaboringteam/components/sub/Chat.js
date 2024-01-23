import React from 'react'
import Script from "next/script";

const Chat = () => {
    return (
        <>
            <div className="z-[20] mx-4 fixed">
                <ab-chat
                    chatbotID="ppFCSpmhM9JP_G951InN0"
                    className="px-4 z-[20] fixed"
                    theme="dark"
                    orientation="right"
                    color="#8B5CF6"
                    logoURL="https://cdn.some-page.com/logo.png"
                    headline="Chat with our AI"
                    description="Ask any question and our AI will answer!"
                    initialMessage="How can I help you today?"
                    placeholder="Type your message here..."
                    isOpen="true"
                    hideButton="false"
                    maxHeight="48rem"
                    minHeight="32rem"
                    userID="a64427d6"
                    username="John Doe"
                    email="john@doe.com"
                    profileImageURL="https://cdn.some-page.com/profile-sm.png"
                    referenceID="a738d158892b"
                ></ab-chat>
                <Script
                    async
                    type="text/javascript"
                    src="https://client.aidbase.ai/chat-widget.ab.js"

                />
            </div>
        </>
    )
}

export default Chat