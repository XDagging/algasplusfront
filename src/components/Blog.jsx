import React, {useState} from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
import Newsletter from "./Newsletter"






function Blog(props) {




    return (
        <section>

            <Navbar />


              
            <div className="lg:w-3/6 mx-auto p-2  mt-24 bg-base-200 relative min-h-[50vh] rounded-lg">
                
                <div className="pb-2 border-b-2 border-base-300 p-4">
                    <p className="font-2 text-3xl font-bold">
                        {props.title}
                    </p>
                    <p className="font-1 mt-2">Written by: {props.author}</p>
                </div>
                <div className="p-4">
                    <p className="font-2 font-semibold">
                        {props.text}
                    
                    

                    </p>
                    
                </div>
                <a href="/news" className="ml-4 btn btn-secondary font-1 font-bold">Return to News</a>
                



            </div>


            <div className="mt-24">
            <Newsletter />
            <Footer />
            </div>

            



        </section>
    )
}


export default Blog