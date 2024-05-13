import shippingImg from '../assets/shipping10.png'
import shippingImg1 from '../assets/shipping12.png'

const  FeaturedSection = () =>  {
  return (
    <div>
        <section className="bg-[#fff] dark:bg-lightest-navy">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light bg-white dark:bg-navy p-8 lg:px-12 rounded-md text-navy sm:text-lg dark:text-lightest-slate">
                    <h2 className="mb-4 text-5xl pb-4 tracking-tight font-extrabold text-primary dark:text-[#fff]">What sets us apart</h2>
                    <div>
                        <p className="">Solid experience and knowledge of the local and international market.</p>
                        <p className="py-2">Commitment to excellence in customer service.</p>
                        <p className="pb-2">Strategic partnerships to offer comprehensive solutions.</p>
                        <p className="">Focus on innovation and continuous pursuit of excellence.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 py-12 gap-4 mt-8">
                    <img 
                        className="  rounded-lg" 
                        src={shippingImg}
                        alt="shipping, plane, track, ship" />
                    <img 
                        className="mt-4 w-full h-full lg:mt-10 rounded-lg"
                        src={shippingImg1}  
                        alt="office content 2" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default FeaturedSection
