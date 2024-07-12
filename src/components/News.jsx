import React, {useState} from "react";
import Navbar from "./Navbar"
import Footer from "./Footer"
import Newsletter from "./Newsletter";
import Blog from "./Blog"




function News(props) {
    const [blogOpen, setBlogOpen] = useState(false)
    const [blogIndex, setBlogIndex] = useState(0)

    const [blogs, setBlogs] = useState([
        {
            title: "The world is about to end",
            text: "This is a very long line and essay im about to write. I started yapping in shit and tbh ion rly know what imma do atm it is what it is",
            img: "https://farm3.staticflickr.com/2933/13966674116_6116e36b10_k.jpg",
            author: "Sebastian Hernandez-Tavares"

        },
        {
            title: "The world is about to end",
            text: "This is a very long line and essay im about to write. I started yapping in and tbh ion rly know what imma do atm it is what it is",
            img: "https://farm3.staticflickr.com/2933/13966674116_6116e36b10_k.jpg",
            author: "Sebastian Hernandez-Tavares"

        },
        {
            title: "The world is about to end",
            text: "This is a very long line and essay im about to write. I started yapping in and tbh ion rly know what imma do atm it is what it is",
            img: "https://farm3.staticflickr.com/2933/13966674116_6116e36b10_k.jpg",
            author: "Sebastian Hernandez-Tavares"

        },
        {
            title: "The world is about to end",
            text: "This is a very long line and essay im about to write. I started yapping in and tbh ion rly know what imma do atm it is what it is",
            img: "https://farm3.staticflickr.com/2933/13966674116_6116e36b10_k.jpg",
            author: "Sebastian Hernandez-Tavares"

        },
        {
            title: "The world is about to end",
            text: "This is a very long line and essay im about to write. I started yapping in and tbh ion rly know what imma do atm it is what it is",
            img: "https://farm3.staticflickr.com/2933/13966674116_6116e36b10_k.jpg",
            author: "Sebastian Hernandez-Tavares"

        },{
            title: "The world is about to end",
            text: "This is a very long line and essay im about to write. I started yapping in and tbh ion rly know what imma do atm it is what it is",
            img: "https://farm3.staticflickr.com/2933/13966674116_6116e36b10_k.jpg",
            author: "Sebastian Hernandez-Tavares"

        },
    ])






    return (

        <>
        

        {(blogOpen) && (
            <Blog title={blogs[blogIndex].title} text={blogs[blogIndex].text} author={blogs[blogIndex].author} />

        )}

        {(!blogOpen) && (
            <>
            <Navbar />
            <div className="mt-24">
            <p className="font-2 font-bold text-3xl text-center ">Recent News</p>

            <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-items-center gap-4 md:w-4/6 mx-auto mt-10">
                {blogs.map((blog,i) => (
                    <div className="w-full h-full rounded-lg p-4 bg-base-100 select-none cursor-pointer hover:bg-base-300 group transition-all" onClick={() => {
                        setBlogIndex(i)
                        setBlogOpen(true)
                    }}>
                        <div className="w-full h-40 rounded-lg">
                            <img src="https://southburlingtonlibrary.org/client_media/images/Seeds.jpg" className="w-full h-full object-cover rounded-lg" alt="blogPhoto" />

                        </div>
                        <div className="p-4 bg-base-200 mt-2 rounded-lg group-hover:bg-base-200">
                            <p className="font-2 font-bold text-lg">{blog.title}</p>
                            
                            <p className="font-1 font-semibold p-2 bg-base-100 rounded-lg">{blog.text.substring(0,100)}...</p>
                            <p className="font-1 text-sm w-fit rounded-lg p-2">By: {blog.author.split(" ")[0] + " "+ blog.author.split(" ")[1].substring(0,1)}.</p>
                        
                        </div>
                        


                    
                    </div>
                ))}
                
                
            </div>

        </div>
                <div className="mt-24">
                    <Newsletter />
                    <Footer />
                </div>
            </>
            

        )}
    
        

        
        



        </>
    )
}


export default News;