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
                    logoURL="https://cdn.some-page.com/logo.png"
                    headline="Chat with our AI"
                    description="Ask any question and our AI will answer!"
                    initialMessage="How can I help you today?"
                    placeholder="Type your message here..."
                    isOpen="false"
                    hideButton="true"
                    maxHeight="48rem"
                    minHeight="32rem"
                    profileImageURL="https://cdn.some-page.com/profile-sm.png"
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