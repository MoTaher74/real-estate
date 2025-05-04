import { motion } from "motion/react";
import { assets, testimonialsData } from "../assets/assets";

const Testimonials =()=>{
return (
    <section className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="test">
       <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Customer <span className="underline underline-offset-4 decoration-1 under font-light"> Testimonials</span></h1>
        <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">Real Stories from Those Who Found Home with Us</p>
        <motion.div
         initial={{opacity:0,y:100}}
         transition={{duration:1}}
         whileInView={{opacity:1,y:0}}
         viewport={{once:true}}
        className="flex flex-wrap justify-center gap-8">
            {testimonialsData.map((tes,idx)=>(
                <div key={idx} className="max-w-[350px] border shadow-lg rounded px-8 py-12 text-center cursor-pointer hover:bg-blue-400 duration-500">

                    <img src={tes.image} alt={tes.alt} className="w-29 h-20 rounded-full mx-auto mb-4"/>
                    <h2 className="text-xl text-gray-700 font-medium">{tes.name}</h2>
                    <p className="text-gray-500 mb-4 text-sm">{tes.title}</p>
                    <div className="flex justify-center gap-1 text-red-500 mb-4">
                        {Array.from({length:tes.rating}, (items,idx)=>(
                            <img key={idx} src={assets.star_icon} alt="stars" />
                        ))}
                    </div>
                    <p className="text-gray-500">{tes.text}</p>
                </div>
            ))}

        </motion.div>
    </section>

)
}

export default Testimonials ;