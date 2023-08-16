import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{max: 45, scale: 1, speed: 450}}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        
        <img src={icon} alt={title} className="w-16 h-16 objection-contain"/>
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
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
        <h1 className={styles.sectionHeadText}>About Me.</h1>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a full-time MSci Undergraduate Student in my third year of study, although I do work part-time as a Supervisor at my University's Union Shop while upkeeping a personal blog. My passions lie primarily in AI and its developments, although I am also intrigued by Full-Stack Development and Sofwate Engineering in general. I have experience with Python, Java, JavaScript and Prolog (to name a few!) alongside frameworks like React and Node.js! In general, I am a Jack-Of-All-Trades - I love learning about everything and anything and as a quick learner, it comes quite naturally. Don't get me wrong though, I love a challenge. And as someone whose passions lie in real-world issues, those are the challenges I mainly want to conquer throughout my career. If you have any questions about me, my interests or anything else, drop me a message. I love discussions!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default About