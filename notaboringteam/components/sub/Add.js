import React from 'react'
import Script from "next/script";

const Add = () => {
    return (
        <>
            <Script
                async
                type="text/javascript"
                src="https://www.googletagmanager.com/gtag/js?id=G-K9874PP28N"
            />
        </>
    )
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());

    gtag('config', 'G-K9874PP28N');
}

export default Add