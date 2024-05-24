import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
return (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div 
    variants={fadeIn("right","spring",0.5*index,0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div options={{max:45, scale:1,speed:450}} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex=col'>
        <img  src={icon} alt={title} className='w-16 h-16 onject-contain ' />
        <h3 className='text-white text-bold text-[20px] text-center'>{title}</h3>

      </div>

    </motion.div>

  </Tilt>
)
}

const About = () => {
  return (
   <>
   <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText}>Overview</h2>
   </motion.div>
   <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
   As a full-stack developer, I have the exciting role of crafting entire web experiences from the ground up, using my skills to design and develop both the frontend and backend of websites, ensuring they function seamlessly and look visually appealing.
   <br />
   </motion.p>
   Here's My &nbsp; <a href="https://drive.google.com/file/d/1ehvkQtEZhRnqs6pZI2RmavEwxBhgHcWk/view?usp=sharing" className='text-red-600 underline'>Resume</a> &nbsp; <a href="https://github.com/rudra016" className='text-red-600 underline'>Github</a> &nbsp; <a href="https://www.linkedin.com/in/rudra-kumar-897264227/" className='text-red-600 underline'>LinkedIn</a>
   <div className='mt-20 flex flex-wrap gap-10'>
    { services.map((service,index)=>(
      <ServiceCard key={service.title} index={index} {...service} />
    ))}

   </div>
   </>
  )
}

export default SectionWrapper(About,"about")