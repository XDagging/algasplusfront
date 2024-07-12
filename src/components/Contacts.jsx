import React from "react";
import Footer from "./Footer"
import Newsletter from "./Newsletter"
import Navbar from "./Navbar"
import { FaPhone, FaEnvelope, FaMapPin, FaPaperPlane} from "react-icons/fa";




function Contacts(props) {





    return (

        <>
        <Navbar />

        <div className=" py-10 w-full bg-base-100 text-center">
            <div className="lg:w-5/6 bg-base-100 p-4 rounded-lg mx-auto">
                <p className="font-2 font-bold text-3xl ">Contact Us:</p>

                <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 items-center justify-items-center gap-4 w-full lg:text-right text-center">
                    <div className="p-10 rounded-lg w-full h-full bg-base-300">

                        <FaPhone className="size-12 lg:ml-auto mx-auto lg:mr-0" />
                        <p className="font-2 mt-5 text-2xl font-bold ">Phone Number</p>
                        <p className="font-1 mt-5 text-lg font-semibold">+1 301-390-1923</p>
                        
                    </div>
                    <div className="p-10 rounded-lg w-full h-full bg-base-300">

                        <FaEnvelope className="size-12  lg:ml-auto mx-auto lg:mr-0 " />
                        <p className="font-2 mt-5 text-2xl font-bold ">Email</p>
                        <p className="font-1 mt-5 text-lg font-semibold">example@gmail.com</p>
                        
                    </div>
                    <div className="p-10 rounded-lg w-full h-full bg-base-300">

                        <FaMapPin className="size-12 lg:ml-auto mx-auto lg:mr-0" />
                        <p className="font-2 mt-5 text-2xl font-bold ">Address</p>
                        <p className="font-1 mt-5 text-lg font-semibold">1209 Elmo Street<br/>Bethesda Maryland<br/>20814</p>
                        
                    </div>

                </div>
                





            </div>

        


        </div>
        <div class="divider divider-neutral"><p className="font-2 font-bold text-3xl">OR</p></div>
            <div className="sm:w-5/6 p-2 mx-auto bg-base-100 my-5">
            
                <div className=" sm:w-4/6 mx-auto">
                <p className="font-1 text-2xl font-bold">Contact form</p>
                <div className="mt-2 px-5 py-5 bg-base-200 rounded-lg  mx-auto">
                    <div className="flex flex-row gap-2 pb-4 border-b-2 border-neutral">
                        <div className="w-full flex-1">
                            <input className="input input-bordered font-2  w-full" placeholder="First Name:" />
                        </div>
                        <div className="flex-1">
                            <input className="input input-bordered font-2 w-full" placeholder="Last Name:" />
                        </div>

                    </div>
                    <div className="flex flex-col gap-4">
                        <input className="input input-bordered font-2 w-full mt-4" placeholder="Email Address:" />
                        <textarea className="textarea font-2 font-semibold" placeholder="Message:" />
                        

                    </div>
                    <button className="mt-4 btn btn-secondary flex flex-row"><p className="font-1">Send Message</p><FaPaperPlane/></button>
                    
                    



                </div>
                </div>
            </div>
        <div className=""> 
            <Newsletter />
            <Footer />
        </div>






        </>
    )
}


export default Contacts