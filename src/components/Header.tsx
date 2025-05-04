import { motion } from "motion/react";


const Header =()=>{
return (
    <section className="min-h-screen bg-cover flex items-center mb-4 bg-center w-full overflow-hidden" style={{backgroundImage:"url('/header_img.png')" }} id="home">
{/* add Navbar here */}


<motion.div initial={{opacity:0,y:100}}
            transition={{duration:1}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}

className="container text-center m-auto py-4 px-6 md:px-20 lg:px-32 text-white">
    <h2 className=" text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl pt-20  font-semibold">Explore homes that fit your dreams</h2>
    <div className="space-x-6 mt-16">

        <a href="#Project" className="border border-white px-8 py-3 rounded">Projects</a>
        <a href="#contact" className="px-8 py-3 rounded bg-blue-500">Contact Us</a>
    </div>
</motion.div>
    </section>

)
}

export default Header ;