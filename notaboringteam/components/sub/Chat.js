import React from 'react'
import Script from "next/script";

const Chat = () => {
    return (
        <>
            <ab-chat
                chatbotID="ppFCSpmhM9JP_G951InN0"
                theme="dark"
                orientation="left"
                headline="Chat with our AI"
                className="px-4 z-[20] fixed"
            ></ab-chat>
            <Script
                async
                type="text/javascript"
                src="https://client.aidbase.ai/chat-widget.ab.js"
            />
        </>
    )
}

export default Chat