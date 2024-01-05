'use client'
import React from 'react'
import Script from 'next/script'

const page = () => {
    return (
        <>
            {/* <Script
                type="module" 
                src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"
                onLoad={() => {
                    console.log('Script has loaded')
                }}
            /> */}


<model-viewer src="/formatted/display.glb" className='z-[20]' sar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="commerce" poster="poster.webp" shadow-intensity="1">
    <div className="progress-bar hide" slot="progress-bar">
        <div className="update-bar"></div>
    </div>
    <button slot="ar-button" id="ar-button">
        View in your space
    </button>
    <div id="ar-prompt">
        <img src="https://modelviewer.dev/shared-assets/icons/hand.png"/>
    </div>
</model-viewer>




<div className='z-[20]'>
<model-viewer src="/formatted/display.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls tone-mapping="commerce" poster="poster.webp" shadow-intensity="1" environment-image="legacy">
    <div className="progress-bar hide" slot="progress-bar">
        <div className="update-bar"></div>
    </div>
    <button slot="ar-button" id="ar-button">
        View in your space
    </button>
    <div id="ar-prompt" >
        <img src="https://modelviewer.dev/shared-assets/icons/hand.png"/>
    </div>
</model-viewer>
</div>


        </>
    )
}

export default page