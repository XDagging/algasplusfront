import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Newsletter from "./Newsletter"








function Innovation(props) {



    return (


        <>
        
        <Navbar />


        <div className="hero innovationImage min-h-[70vh] relative">
        <div class="custom-shape-divider-bottom-1720548302">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" class="shape-fill"></path>
    </svg>
</div>
<div class="custom-shape-divider-top-1720548339">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content">
                <p className="text-6xl font-1 font-bold text-white">Our Innovations</p>

            </div>

        </div>
        

        <div className="mt-10 sm:p-10 flex flex-col gap-10 sm:w-4/6 w-full mx-auto bg-base-100 rounded-lg">
            <div className="sm:p-10 p-4 bg-base-200 rounded-lg">
                <p className="font-2 font-bold text-2xl">A teleporter</p>
                <p className="font-1 font-semibold text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non accumsan nisi. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Integer eget mauris.</p>
                <div className="mt-4 p-4 bg-base-100">
                    <p className="font-1 ">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a odio bibendum, tincidunt augue quis, molestie nibh. Quisque mollis, sem ut sagittis efficitur, neque risus semper diam, vitae efficitur augue mi non diam. Ut elementum velit felis, sed euismod nulla ultrices posuere. Nunc eget justo a massa luctus euismod vitae sit amet justo. Nunc mollis sed massa facilisis efficitur. Phasellus at suscipit nulla. Aliquam erat volutpat. Pellentesque laoreet augue neque, sed scelerisque mi tincidunt id. Aliquam ac dolor a risus lobortis placerat vitae a turpis. Etiam posuere justo a justo laoreet, non pharetra mauris tempus. Donec vel semper mi. Sed a enim urna.

Nunc sed quam eget purus finibus pellentesque. Duis ac purus ac nibh mattis accumsan. Donec commodo dapibus sem, et fermentum mauris condimentum eu. Ut molestie pellentesque nisi, sit amet placerat ligula sagittis vel. Morbi consectetur maximus dolor. Aliquam vitae tortor tristique orci aliquet auctor ac non ex.</p>

                </div>
                

                

            </div>




            <div className="sm:p-10 p-4 bg-base-200 rounded-lg">
                <p className="font-2 font-bold text-2xl">Biostimulants</p>
                <p className="font-1 font-semibold text-lg">synthetic substances applied to plants, seeds, or soil to enhance crop vigor, yield, and quality by stimulating natural processes, thereby improving nutrient uptake, stress tolerance, and overall plant health.</p>
                <div className="mt-4 p-4 bg-base-100">
                    <p className="font-1 ">
                    Microalgae produce a variety of bioactive compounds that can act as biostimulants, improving plant tolerance to stress, increasing nutrient uptake, and stimulating growth. These biostimulants can be particularly beneficial under environmental stress conditions, such as drought or soil salinity. By harnessing the power of these microalgae-derived compounds, agricultural practices can achieve more resilient and sustainable crop production. Moreover, the use of biostimulants derived from microalgae can reduce the need for chemical fertilizers and pesticides, promoting eco-friendly farming practices and contributing to the preservation of natural ecosystems.
        
        </p>
                </div>
                

                

            </div>
            <div className="sm:p-10 p-4 bg-base-200 rounded-lg">
                <p className="font-2 font-bold text-2xl">A teleporter</p>
                <p className="font-1 font-semibold text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non accumsan nisi. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Integer eget mauris.</p>
                <div className="mt-4 p-4 bg-base-100">
                    <p className="font-1 ">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a odio bibendum, tincidunt augue quis, molestie nibh. Quisque mollis, sem ut sagittis efficitur, neque risus semper diam, vitae efficitur augue mi non diam. Ut elementum velit felis, sed euismod nulla ultrices posuere. Nunc eget justo a massa luctus euismod vitae sit amet justo. Nunc mollis sed massa facilisis efficitur. Phasellus at suscipit nulla. Aliquam erat volutpat. Pellentesque laoreet augue neque, sed scelerisque mi tincidunt id. Aliquam ac dolor a risus lobortis placerat vitae a turpis. Etiam posuere justo a justo laoreet, non pharetra mauris tempus. Donec vel semper mi. Sed a enim urna.

Nunc sed quam eget purus finibus pellentesque. Duis ac purus ac nibh mattis accumsan. Donec commodo dapibus sem, et fermentum mauris condimentum eu. Ut molestie pellentesque nisi, sit amet placerat ligula sagittis vel. Morbi consectetur maximus dolor. Aliquam vitae tortor tristique orci aliquet auctor ac non ex.</p>

                </div>
                

                

            </div>
        </div>

        <div className="mt-24">

            <Newsletter />
            <Footer />

        </div>





        </>
    )
}


export default Innovation