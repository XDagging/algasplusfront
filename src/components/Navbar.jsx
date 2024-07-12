import React, {useContext} from "react";
import logo from "../assets/logo.png";
import {LanguageContext} from "./Context"

import { FaInstagram, FaTwitter, FaFacebook, FaBars} from "react-icons/fa";

function Navbar(props) {


    const languageChange = useContext(LanguageContext)


    

    return (

        <div className="navbar bg-base-200 p-4 sticky top-0 left-0 z-20">
            <div className="flex-1">

                <a className="btn btn-ghost btn-base-200 ml-2 btn-lg" href="/">
                    <p className="font-3 font-bold text-3xl">AlgasPlus</p>
                </a>
                
            </div>


            <div className="md:hidden flex flex-0">
            <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn m-1"><FaBars /></div>
                    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow font-2 font-semibold gap-1 text-left">
                        <li className="btn btn-sm btn-base-200"><a href="/mission">Who are we?</a></li>
                        <li  className="btn btn-sm btn-base-200"><a href="/innovation">Innovations</a></li>
                        <li  className="btn btn-sm btn-base-200"><a href="/news">News</a></li>
                        <li  className="btn btn-sm btn-base-200"><a href="/contacts">Contact Us</a></li>
                        <li className="join join-horizontal font-2 mx-auto mt-1">
                    <div className="btn btn-sm btn-outline join-item btn-neutral" onClick={(e) => {
                        languageChange.setLanguage("En")
                    }}>
                        English
                    </div>
                    <div className="btn btn-sm btn-outline join-item btn-accent" onClick={(e) => {
                        languageChange.setLanguage("Es")
                    }}>
                        Español
                    </div>
                    
                    </li>
                    </ul>
                    </div>

            </div>



            <div className="flex-0 md:flex hidden">
                <div className="flex  flex-row gap-3 mr-8 text-lg select-none">
                <a href="/innovation">
                <div className="dropdown dropdown-hover cursor-pointer">
                    <div className="flex flex-row items-center justify-items-center gap-1 ">
                    <p className="font-2 font-semibold">Innovations </p> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                    </div>
                   

                    {/* <ul className="dropdown-content menu bg-base-100 w-full gap-2 rounded-lg p-3">

                        <li className=""><a className="font-1 font-semibold" href="/mission">Our Team</a></li>
                        <li className="font-1 font-semibold"><a href="/mission#matters" className="font-1 font-semibold">Our values</a></li>
                        
            
                    </ul> */}
                </div>
                
                </a>
                

                <div className="dropdown dropdown-hover cursor-pointer">
                    <div className="flex flex-row items-center justify-items-center gap-1 ">
                    <p className="font-2 font-semibold ">Who are we? </p> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                    </div>
                   

                    <ul className="dropdown-content menu bg-base-100 w-full gap-2 rounded-lg p-3">

                        <li className=""><a className="font-1 font-semibold" href="/mission">Our Team</a></li>
                        <li className="font-1 font-semibold"><a href="/mission#matters" name="matters" className="font-1 font-semibold">Our values</a></li>
                        
            
                    </ul>
                </div>
                
                


                {/* <div className="dropdown dropdown-hover cursor-pointer">
                    <div className="flex flex-row items-center justify-items-center gap-1 ">
                    <p className="font-2 font-semibold ">Brands and Products </p> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                    </div>
                   

                    <ul className="dropdown-content menu bg-base-100 w-full gap-2 rounded-lg p-3">

                        <li className="font-1 font-semibold">Something here</li>
                        <li className="font-1 font-semibold">Something here</li>
                        <li className="font-1 font-semibold">Something here</li>
                    </ul>
                </div> */}
                {/* <div className="dropdown dropdown-hover cursor-pointer">
                    <div className="flex flex-row items-center justify-items-center gap-1 ">
                    <p className="font-2 font-semibold ">Products </p> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                    </div>
                   

                    <ul className="dropdown-content menu bg-base-100 w-full gap-2 rounded-lg p-3">

                        <li className="font-1 font-semibold">Something here</li>
                        <li className="font-1 font-semibold">Something here</li>
                        <li className="font-1 font-semibold">Something here</li>
                    </ul>
                </div> */}
                <div className="flex flex-row items-center justify-items-center gap-1">
                    <a className="font-2 font-semibold underline underline-offset-4 cursor-pointer" href="/news">News </a> 
                    
                </div>
                <div className="flex flex-row items-center justify-items-center gap-1">
                    <a href="/contacts" className="font-2 font-semibold underline underline-offset-4 cursor-pointer">Contact us </a> 
                    
                </div>
                
                </div>
        



            
                

     
                
                <div className="p-4 lg:block hidden">
                <button className="btn btn-circle btn-base-300"><FaFacebook className="size-4" /></button>
                <button className="btn btn-circle btn-base-300"><FaTwitter className="size-4" /></button>
                <button className="btn btn-circle btn-base-300"><FaInstagram className="size-4" /></button>
                </div>
                <div className="join join-horizontal font-2">
                <div className="btn btn-sm btn-outline join-item btn-neutral" onClick={(e) => {
                        languageChange.setLanguage("En")
                    }}>
                        English
                    </div>
                    <div className="btn btn-sm btn-outline join-item btn-accent" onClick={(e) => {
                        languageChange.setLanguage("Es")
                    }}>
                        Español
                    </div>
                    
                </div>

                
            </div>




        </div>
    )
}

export default Navbar