import React from 'react'
import shippingImg from '../assets/shipping10.png'
import shippingImg1 from '../assets/shipping12.png'

export default function FeaturedSection() {
  return (
    <div>
        <section className="bg-[#fff] dark:bg-navy">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What sets us apart:</h2>
                    <ul>
                        <li className="list-disc">Solid experience and knowledge of the local and international market.</li>
                        <li className="list-disc">Commitment to excellence in customer service.</li>
                        <li className="list-disc">Strategic partnerships to offer comprehensive solutions.</li>
                        <li className="list-disc">Focus on innovation and continuous pursuit of excellence.</li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 py-12 gap-4 mt-8">
                    <img 
                        className="  rounded-lg" 
                        src={shippingImg}
                        //src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" 
                        alt="shipping, plane, track, ship" />
                    <img 
                        className="mt-4 w-full h-full lg:mt-10 rounded-lg"
                        src={shippingImg1} 
                        //src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" 
                        alt="office content 2" />
                </div>
            </div>
        </section>
    </div>
  )
}
