

const Footer = () => {
  return (
    <section className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden " id="footer">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <a href="#home">
                <h1 className="text-xl md:text-2xl font-bold text-white hover:text-indigo-600">UrbanVista</h1>
            </a>
            <p className="text-gray-400 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime optio vel, dolorum nostrum modi voluptas illum exercitationem ab enim repudiandae.</p>
            </div>
            <div className="w-full md:w-1/5 mb-8 md:mb-0 ">
                <h3 className="text-white text-lg font-bold mb-4">Company</h3>
                <ul className="flex flex-col gap-2 text-gray-400">
                    <a href="#home" className="hover:text-white">Home</a>
                    <a href="#about" className="hover:text-white">About Us</a>
                    <a href="#contact" className="hover:text-white">Contact Us</a>
                    <a href="#privacy" className="hover:text-white">Privacy Policy</a>
                </ul>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0 ">
            <h3 className="text-white text-lg font-bold mb-4">Subscribe to our newsletter</h3>
            <p className="text-gray-400 mb-4 max-w-80">The latest news,articles and resources,sent to your inbox weekly.</p>

                <div className="flex space-x-3">
                    <input type="email" placeholder="Enter your email" className="p-2 rounded-lg bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"/>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded ">Subscribe</button>
                </div>
            </div>
        </div>
        <div className="border-t py-4 text-center text-sm md:text-base text-gray-500/80 mt-4">
                Copyright {new Date().getFullYear()} © MoTAHER Dev. All Right Reserved.
        </div>
      
    </section>
  )
}

export default Footer
