import React from 'react'
import Script from 'next/script'

const page = () => {
    return (
        <>
            <Script
                src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"
                onLoad={
                    console.log('Script has loaded')
                }
            />

            {/* <iframe src="https://www.google.com/maps/embed?pb=!…" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
            <div className="flex justify-center items-center my-9 flex-col">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3634.181481662109!2d88.6059367760504!3d24.374989364510387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbefb3343d99a7%3A0xcbc586376f507c14!2sRajshahi!5e0!3m2!1sen!2sbd!4v1704601260506!5m2!1sen!2sbd" width="1200" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <div className="flex">
                    <button className=' bg-gray-700 text-gray-200 px-20 py-2 rounded-lg my-6 mx-6'>
                        +
                    </button>
                    <button className=' bg-gray-700 text-gray-200 px-20 py-2 rounded-lg my-6'>
                        -
                    </button>
                </div>
            </div>
        </>
    )
}

export default page