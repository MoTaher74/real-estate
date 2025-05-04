import { useState } from "react";
const Navbar =()=>{

    const [open, setOpen] =useState(false)
    return (
        <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4  relative transition-all">

            <a href="#home">
                <h1 className="text-xl md:text-2xl font-bold text-indigo-500 hover:text-indigo-600">UrbanVista</h1>
            </a>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-10 px-20">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#Project">Projects</a>
                <a href="#test">Testimonials</a>
            </div>
            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                {/* Menu Icon SVG */}
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="1.5" rx=".75" fill="#426287" />
                    <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                    <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                </svg>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-center gap-4 px-5 text-[16px] md:hidden`}>
             <a href="#home" onClick={()=>setOpen(false)}>Home</a>
                <a href="#about" onClick={()=>setOpen(false)}>About</a>
                <a href="#Project" onClick={()=>setOpen(false)}>Projects</a>
                <a href="#test" onClick={()=>setOpen(false)}>Testimonials</a>

            </div>

        </nav>
    )
}

export default Navbar ;


