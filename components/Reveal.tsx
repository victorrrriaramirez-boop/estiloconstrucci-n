"use client";
import { motion } from "framer-motion";
export default function Reveal({children, className=""}:{children:React.ReactNode;className?:string}){return <motion.div className={className} initial={{opacity:0,y:32}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:.7,ease:[.22,1,.36,1]}}>{children}</motion.div>}
