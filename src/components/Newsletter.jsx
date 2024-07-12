import React from "react"




function Newsletter(props) {





    return (

        <div className="hero bg-secondary w-full h-[50vh]">
        
            <div className="hero-content sm:p-8 p-4  bg-base-100 flex-col sm:w-4/6 w-full h-5/6 sm:rounded-lg">
                <p className="font-2 font-bold text-3xl">E-Newsletter</p>
                <div>
                    <p className="font-1 font-semibold text-lg sm:text-left text-center">Subscribe to our newsletter to receive updates and news</p>
                </div>
                <div className="join">
                    <input type="email" className="input input-secondary join-item text-lg font-1 font-semibold" placeholder="Your Email" />
                    <button className="btn join-item btn-outline btn-secondary font-2 rounded-r-lg">Subscribe</button>
                </div>
                <div className="flex flex-row gap-2">
                <input type="checkbox" className="checkbox" />
                <p className="font-1">I accept your legal notice, private policy and cookie policy</p>
                </div>
                
                

            </div>


        




        </div>
    )
}


export default Newsletter