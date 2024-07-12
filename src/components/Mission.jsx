import React, {useEffect} from "react";
import Navbar from "./Navbar"
import Newsletter from "./Newsletter"
import Footer from "./Footer"
import { FaBullseye } from "react-icons/fa";

function Mission(props) {
    



    return (

        <section>

        <Navbar />
        
        
        <div className="bg-base-300">

        
        <div className="md:w-4/6 mx-auto py-24">
            <div className="lg:w-2/6 w-5/6 mx-auto ">

                <div className="flex flex-col gap-4 text-center border-b-2 pb-8">
                    <p className="text-center font-1 text-lg">Our team</p>
                    <p className="font-bold text-4xl font-2 ">A world class provider:</p>
                    <p className="font-1">
                    Algas Plus C.A was founded in 2022 with the mission of providing the Venezuelan agricultural market with a viable alternative to organic products for the agricultural sector and promoting regenerative crops by introducing innovative products that add value to crops and the production chain of the food sector.
                    
                    </p>

                </div>

                <div className="my-8 text-center border-b-2 pb-8">

                    <p className="text-lg font-1 font-bold">Our company was featured many times in many newspapers. This placeholder text should be something impressive you accomplished.</p>
                </div>

                <div className="text-center my-8 pb-4 border-b-2">
                    <p className=" font-semibold font-2 text-2xl">Our mission:</p>
                    <p className="mt-2 font-1 font-semibold">
                    To develop and offer innovative and effective organic microalgae fertilizers that optimize crop nutrition, improve soil structure and biology, and contribute to environmental conservation, generating value for farmers and rural communities.
                    </p>
                    
                    
                    
                </div>
                <div className="w-fit mx-auto">
                <button className="btn btn-wide btn-neutral"><p className="text-lg font-bold font-2">Integrated Policies</p></button>
                </div>
                

            </div>
        </div>
        </div>
        <div className="bg-base-100" id="matters">
            <div className="py-5 w-full text-center ">
                <p className="font-2 font-semibold">Our philosophy</p>
                <p className="font-1 font-bold text-2xl mt-3">What matters to us</p>
            </div>
            <div className="md:w-3/6 mx-auto bg-base-200 p-4 rounded-lg flex flex-col gap-4">
                <div className="w-full bg-base-300 rounded-lg p-8 sm:h-[20vh] ">
                    <div className="flex-col">
                    <div className="flex flex-row items-center justify-items-center gap-2">
                        <p className="font-1 font-semibold">Goal </p>
                        <FaBullseye className="size-4"/>
                    </div>
                    
                    <p className="font-2 text-2xl font-bold">Diversity, culture, and inclusion</p>
                    <button className="btn btn-circle btn-outline mt-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
</svg>
</button>
                    </div>
                  
                    
                </div>

                <div className="w-full bg-base-300 rounded-lg p-8 sm:h-[20vh]">
                    <div className="flex flex-row items-center justify-items-center gap-2">
                    <p className="font-1 font-semibold">Goal </p>
                    <FaBullseye className="size-4"/>
                    </div>
                    
                    <p className="font-2 text-2xl font-bold">Sustainable sourcing</p>
                    <button className="btn btn-circle btn-outline mt-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
</svg>
</button>
                </div>

                <div className="w-full bg-base-300 rounded-lg p-8 sm:h-[20vh]">
                    <div className="flex flex-row items-center justify-items-center gap-2">
                    <p className="font-1 font-semibold">Goal </p>
                    <FaBullseye className="size-4"/>
                    </div>
                    
                    <p className="font-2 text-2xl font-bold">Clean Labor</p>
                    <button className="btn btn-circle btn-outline mt-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
</svg>
</button>
                </div>
            </div>

        </div>
        <div className="mt-12">
        <Newsletter />
        </div>
        <Footer />
        







        </section>
    )
}


export default Mission


