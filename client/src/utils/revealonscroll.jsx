import React , { useEffect , useRef } from "react";
import { useInView , useAnimation , motion, easeIn } from "framer-motion";

export const Reveal = ({children , width="fit-content" , className})=>{
    const ref = useRef(null);
    const isInView = useInView(ref , {once : true});

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(()=>{
        if(isInView){
            console.log(isInView);
            mainControls.start("visible")
            slideControls.start("visible")
        }

    } , [isInView]);


    return  <motion.div ref={ref} className={className}  variants={{hidden : {opacity : 0 , y :75}  , visible : { opacity: 1 , y : 0}}} animate={mainControls} transition={{delay:0.25 ,duration:0.5}}  initial="hidden"  >{children}</motion.div>
};
    