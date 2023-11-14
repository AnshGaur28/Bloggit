import {motion} from 'framer-motion';
import { Reveal } from '../../utils/revealonscroll';
 function About() {
  return (
    
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-zinc-900">
    <div className="flex flex-col lg:flex-row justify-between gap-8">

        <Reveal className="w-full lg:w-5/12 flex flex-col justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.8, delay: 0.5,ease: [0, 0.71, 0.2, 1.01]}} >
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-500 dark:text-white pb-4">About Us</h1>
            <p className="font-normal text-base leading-6 text-gray-400 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
        </motion.div>
        </Reveal>
        
        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{duration: 0.8,ease: [0, 0.71, 0.2, 1.01]}} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-full lg:w-8/12">
            <img  className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
        </motion.div>
    </div>

    <Reveal className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        
        <motion.div  className="p-5 w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-500 dark:text-white pb-4">Our Story</h1>
            <p className="font-normal text-base leading-6 text-gray-400 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
        </motion.div>
        
        <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                    <motion.img  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" alt="Alexa featured Image" />
                    <motion.img  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" alt="Alexa featured Image" />
                    <p className="font-medium text-xl leading-5 text-gray-400 dark:text-white mt-4">Alexa</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                    <motion.img  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" alt="Olivia featured Image" />
                    <motion.img  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" alt="Olivia featured Image" />
                    <p className="font-medium text-xl leading-5 text-gray-400 dark:text-white mt-4">Olivia</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                    <motion.img  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" alt="Liam featued Image" />
                    <motion.img  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" alt="Liam featued Image" />
                    <p className="font-medium text-xl leading-5 text-gray-400 dark:text-white mt-4">Liam</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                    <motion.img  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" alt="Elijah featured image" />
                    <motion.img  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" alt="Elijah featured image" />
                    <p className="font-medium text-xl leading-5 text-gray-400 dark:text-white mt-4">Elijah</p>
                </div>
            </div>
        </div>
    </Reveal>
</div>

  );
}

export default About;
