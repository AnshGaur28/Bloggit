import Hero from "./heroSection";
import About from "../About/about";
function Homepage(){
    return <>
        <Hero/>
        <section className='w-full flex justify-start bg-gray-100' id='about'><About/></section>
    </>
}

export default Homepage;