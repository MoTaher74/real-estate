import About from "../components/About";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const Home =()=>{
return (
    <div className="w-full overflow-hidden">
<Navbar/>
<Header/>
<About/>
<Projects/>
<Testimonials/>
<Contact/>

<Footer/>
    </div>

)
}

export default Home ;