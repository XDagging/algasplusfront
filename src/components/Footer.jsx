import React from "react"




function Footer(props) {



    return (

<footer class="footer bg-neutral text-neutral-content items-center p-12">
  <aside class="grid-flow-col items-center ">
    <div className="">
    
    <p className="font-3 text-lg">AlgasPlus</p>
    <p className="font-2">Copyright © {new Date().getFullYear()} - All right reserved</p>
    </div>
    
    
  </aside>
  <nav class="grid-flow-col gap-4 underline-offset-4 font-semibold flex flex-col">
  
        <a href="" className=" font-1 link">Cookie Policy</a>
          
        <a href="" className="font-1 link">Private Policy</a>
          
        <a href="" className="font-1 link">FAQ</a>
          
        <a href="" className="font-1 link">Legal Notice</a>




    
  </nav>
</footer>
    )
}


export default Footer