import { motion } from "motion/react";
import { assets } from "../assets/assets";


const About =()=>{
return (
    <section className="container flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="about">
    <h1 className="text-2xl sm:text-4xl font-bold mb-2">About <span className="underline underline-offset-4 decoration-1 under font-light">Our Brand</span></h1>
    <p className="text-gray-500 max-w-80 text-center mb-8 ">Passionate About Properties,Dedicated to Your Vision</p>
    <motion.div 
     initial={{opacity:0,x:100}}
     transition={{duration:1}}
     whileInView={{opacity:1,x:0}}
     viewport={{once:true}}
    className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img src={assets.brand_img} alt="" className="w-full sm:w-1/2 max-w-lg" loading="lazy" />
        <div className="flex flex-col  items-center md:items-start mt-10 text-gray-600">
            <div className="grid grid-cols-2  gap-6 md:gap-10 w-full 2xl:pr-28 ">
            <div>
                <p className="text-4xl font-medium text-gray-800">10+</p>
                <p>Years of Excellence</p>
            </div>
            <div>
                <p className="text-4xl font-medium text-gray-800">18+</p>
                <p>Projects Completed</p>
            </div>
            <div>
                <p className="text-4xl font-medium text-gray-800">20+</p>
                <p>Years of Experience</p>
            </div>
            <div>
                <p className="text-4xl font-medium text-gray-800">25+</p>
                <p>Ongoing Projects</p>
            </div>
            </div>
<p className="mt-10 text-gray-500 max-w-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<a href="" className="px-8 py-3 rounded text-white bg-blue-500 mt-16">Learn more</a>
        </div> 
    </motion.div>
    </section>

)
}

export default About ;