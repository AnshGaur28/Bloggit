import { motion } from "framer-motion";
import { Reveal } from "../../utils/revealonscroll";
function Hero()  {
  return <>
    <section className={`relative w-full h-80 mx-auto bg-zinc-900 p-2`}>
      <div
        className={`absolute inset-0 top-[60px]  max-w-7xl mx-auto flex flex-row items-start gap-5 mt-20`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <motion.div animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
      }} className='box w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-r from-indigo-500' />
        </div>

        <div>
          <Reveal>
          <h1  className='font-black  lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white'>
            Hi, I'm <span className='text-[#915EFF]'>Ansh</span>
          </h1>
          </Reveal>
          <motion.p animate="visible" initial="hidden" transition={{duration:0.5 , delay:0.25}} variants={{hidden : {opacity: 0 ,  y : 75 , x:-200} , visible : {opacity : 1 , y : 0 , x:0}  }} className='text-gray-300 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]'>
          I'm an  Student at Punjab Engineering College <br className='sm:block hidden' />
          This is my Blog where I like to post what I learn and you could do the same.
          </motion.p>
        </div>

      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
        </a>
      </div>
    </section>
    </>
}

export default Hero;

