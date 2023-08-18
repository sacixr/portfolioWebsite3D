import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Some Things I've Worked On</p>
        <h1 className={styles.sectionHeadText}>Projects.</h1>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Works, "works");