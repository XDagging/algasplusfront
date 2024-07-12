import React, {useState, useEffect, useContext} from "react"
import Navbar from "./Navbar"
import Newsletter from "./Newsletter";
import { FaNewspaper } from "react-icons/fa";
import Footer from "./Footer"



import { LanguageContext } from "./Context"


let language
let interval
let counter = 0
function Index(props) {

    

    language = useContext(LanguageContext).language


    const [news,setNews] = useState([
        {
            title: "Some title here. Man this is intriguing",
            date: "September 24th, 2016",
            link: "#"
        },
        {
            title: "Some title here. Man this is intriguing",
            date: "September 24th, 2016",
            link: "#"
        },
        {
            title: "Some title here. Man this is intriguing",
            date: "September 24th, 2016",
            link: "#"
        },
    ])



    const [list, setList] = useState(
        [   
            {
                img: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
                header: "Our Products",
                subText: "Heres some sub text that doesnt really matter",
                link: "/index"
            },
            {
                img: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
                header: "Our Products",
                subText: "Heres some sub text that doesnt really matter",
                link: "/index"
            },
            {
                img: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
                header: "Our Products",
                subText: "Heres some sub text that doesnt really matter",
                link: "/index"
            },
            {
                img: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
                header: "Our Products",
                subText: "Heres some sub text that doesnt really matter",
                link: "/index"
            },
            
        ]
    )

    useEffect(() => {
        interval = setInterval(() => {
            console.log("this happened")
            if (counter >= list.length) {
                counter = 0
                scrollCarousel(0)
                console.log("scrolled to 0")
            } else {
                scrollCarousel(counter)
                counter++
                console.log("scrolled to", counter)
            }
            
            
        }, 1000)
    
        return () => {
            clearInterval(interval)
        }
            

    }, [])

    
    





    function scrollCarousel(targetImageNumber) {
        const carouselElement = document.getElementById("carousel")
        let carouselWidth = carouselElement.clientWidth;
    
        // Images are numbered from 1 to 4 so thats why we substract 1
        let targetImage = targetImageNumber - 1;
    
        let targetXPixel = (carouselWidth * targetImage) + 1
    
        carouselElement.scrollTo(targetXPixel, 0);
    }




    return (

        <>

        <Navbar />

        <div className="hero w-full min-h-[60vh] bg-base-300 relative">
            <div className="hero-content flex-col items-start">
                <div>
                    <p className="font-1 text-7xl font-semibold ">{language==="En" ? "40+ years dedicated to our land" : "40+ años dedicada a esto."}</p>
                </div>
                <div>
                    <p className="font-2 text-lg font-bold">{language === "En"? "Here at AlgasPlus, we do what others can't" : "Aqui en AlgasPlus, nosotros hacemos lo que otros no pueden"}</p>
                </div>
                <a href="/mission" className="btn btn-accent font-1 text-lg text-white">{language === "En"?"Learn more":"Ver mas" }<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
</svg>
</a>
                
           
            </div>
            


        </div>
        <div className="w-full relative">
        <div class="custom-shape-divider-top-1720448613">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>
        </div>

        <div className="w-full mx-auto relative">
        
        

        <div className="w-fit max-w-full mx-auto mb-40">
        {/* <div className=" rounded-lg p-5 bg-base-200 flex flex-row gap-2 items-center justify-items-center z-20">
                <p className="font-2 text-2xl font-semibold">Featured</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v16.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V3a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
</svg>




            </div> */}
            <p className="font-1 p-4 rounded-lg w-full mt-4 lg:ml-2 ml-0 bg-neutral text-white  font-semibold text-3xl text-center">{language==="En"?"Featured":"Destacada"}</p>
            
            <div className="bg-base-100 carousel p-2 lg:w-[40vw] w-[100%] z-20  rounded-lg">
            
            <div class="carousel carousel-end rounded-box  bg-neutral select-none " id="carousel">
            {list.map((item,i) => (
            <div class="carousel-item  justify-items-start items-start relative w-full" key={i}>
                
                <img className="select-none w-[50%] h-full object-cover" src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" alt="Drink" />
                <div className="p-4 w-full bg-base-100">
                <p className="font-2 text-start text-2xl font-semibold">{item.header}</p>
                <p className="font-1">{item.subText}</p>
                <button className="mt-2 font-1 text-lg font-semibold btn btn-base-200">Learn more<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 sm:block hidden">
  <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>
 </button>
                </div>
         

       
                
            </div>
            ))}
            
  
            </div>
            {/* <div class="flex w-full justify-center gap-2 py-2">
          
  <a onClick={() => scrollCarousel(1)} class="btn btn-xs">1</a>
  <a href="#item2" class="btn btn-xs">2</a>
  <a href="#item3" class="btn btn-xs">3</a>
  <a href="#item4" class="btn btn-xs">4</a>
</div> */}


        </div>
        </div>

        <div className="w-full relative">
        <div class="custom-shape-divider-bottom-1720451850">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>



        </div>
            
        <div className="bg-base-300 w-full min-h-[80vh] pb-10">
            <div className="p-4 text-center mb-12  w-fit  mx-auto rounded-lg">
                
                <p className="text-center font-bold font-1 text-2xl mb-10">Why choose AlgasPlus?</p>
                <p className="font-1 font-semibold text-lg">A trusted ___ provider</p>
            </div>
            <div className="sm:w-4/6 mx-auto bg-base-100 p-8 py-24 rounded-lg grid lg:grid-cols-2 grid-cols-1 items-center justify-items-center gap-12">
                <div className="text-center flex flex-col gap-4">
                    <p className="font-semibold font-1">1000 yards</p>
                    <p className="text-3xl font-bold font-2">For everyday people</p>
                    <p className="font-1 font-semibold mt-4">Our materials are used across the world for <br/>everyday people.</p>
                    <button className="btn btn-outline w-fit mx-auto">Learn more<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M15 3.75A5.25 5.25 0 0 0 9.75 9v10.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V9a6.75 6.75 0 0 1 13.5 0v3a.75.75 0 0 1-1.5 0V9c0-2.9-2.35-5.25-5.25-5.25Z" clipRule="evenodd" />
</svg>
</button>
                </div>
                <div className="text-center flex flex-col gap-4">
                    <p className="font-semibold font-1">1000 yards</p>
                    <p className="text-3xl font-bold font-2">For everyday people</p>
                    <p className="font-1 font-semibold mt-4">Our materials are used across the world for <br/>everyday people.</p>
                    <button className="btn btn-outline w-fit mx-auto">Learn more<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M15 3.75A5.25 5.25 0 0 0 9.75 9v10.19l4.72-4.72a.75.75 0 1 1 1.06 1.06l-6 6a.75.75 0 0 1-1.06 0l-6-6a.75.75 0 1 1 1.06-1.06l4.72 4.72V9a6.75 6.75 0 0 1 13.5 0v3a.75.75 0 0 1-1.5 0V9c0-2.9-2.35-5.25-5.25-5.25Z" clipRule="evenodd" />
</svg>
</button>
                </div>
            </div>
            
            
            
        </div>

        <div className="my-5 w-5/6 mx-auto">
                <p className="text-center font-2 text-4xl font-semibold">Recent News</p>

                <div className="my-5 grid sm:grid-cols-2 grid-cols-1 w-full gap-2 items-center justify-items-center">

                    {news.map((item, i) => (
              


                        <div key={i} className="w-full h-full lg:bg-base-100 bg-base-200 hover:bg-base-300 transition-all px-12 py-24 rounded-lg group select-none cursor-pointer">
                            <FaNewspaper className="size-6" />
                            <p className="font-1 font-bold text-2xl">{item.title}</p>
                            <p className="font-1">{item.date}</p>


                        </div>

                        
                    ))}


                </div>



        </div>

        <Newsletter />
        <Footer />
        
        
        </div>
        



        </>
    )
}


export default Index