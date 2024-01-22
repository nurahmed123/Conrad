import React from 'react'
import Script from "next/script";

const Chat = () => {
    return (
        <>
            <div className="z-[20]">


                <ab-chat
                    chatbotID="ppFCSpmhM9JP_G951InN0"
                    
                    className="px-4 z-[20] fixed"
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