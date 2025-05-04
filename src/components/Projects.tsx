import { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "motion/react";






const Projects =()=>{
    const[currIdx,setCurrIdx] = useState(0);
    const [cardsToShow,setCardsToShow] = useState(1)
useEffect(()=>{
const showCards = ()=>{
    if(window.innerWidth >= 1024){
        setCardsToShow(projectsData.length);
    }else{
        setCardsToShow(1);
    }
};
    showCards();
    window.addEventListener('resize',showCards);
    return ()=> window.removeEventListener('resize',showCards);

},[])
    const nextProject = ()=>{
        setCurrIdx((prevIdx) => (prevIdx + 1) % projectsData.length)
    }
    const prevProject = ()=>{
        setCurrIdx((prevIdx) => prevIdx === 0 ?  projectsData.length - 1 : prevIdx - 1)
    }
return (
    <section className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Project">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Projects <span className="underline underline-offset-4 decoration-1 under font-light">Completed</span></h1>
        <p className="text-gray-500 max-w-80 text-center mb-8 mx-auto">Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

        {/* ---slider buttons--- */}

        <div className="flex justify-end items-center mb-8">
            <button onClick={prevProject} className="p-3 bg-gray-200 rounded mr-2" aria-label="Prev Project">
                <img src={assets.left_arrow} alt="Prev" />
            </button>
            <button onClick={nextProject} className="p-3 bg-gray-200 rounded mr-2" aria-label="Next Project">
                <img src={assets.right_arrow} alt="Next" />
            </button>
        </div>
{/* ------- projects slider container---------- */}

    <motion.div 
     initial={{opacity:0,x:100}}
     transition={{duration:1}}
     whileInView={{opacity:1,x:0}}
     viewport={{once:true}}
    className="overflow-hidden ">
        <div className="flex gap-8 transition-transform duration-500 ease-in-out"
        style={{transform:`translateX(-${(currIdx * 100) / cardsToShow}%)`}}
        >
            {projectsData.map((data,idx)=>(
                <div key={idx} className="relative flex-shrink-0 w-full sm:w-1/4">
                    <img src={data.image} alt={data.title} className="w-full h-auto mb-14" loading="lazy"/>
                    <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                        <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">{data.title}</h2>
                        <p className="text-gray-400 text-sm">
                            {data.price} <span className="px-1 text-black">|</span>{data.location}
                        </p>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    </motion.div>

    </section>

)
}

export default Projects ;