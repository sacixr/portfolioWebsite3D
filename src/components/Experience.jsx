import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

{/*creates each individual work experience section from index.js */}
const ExperienceCard = ({experience}) => (
  /*creates the timeline*/
  <VerticalTimelineElement contentStyle={{ background:'#1d1836', color: '#fff'}}
  contentArrowStyle={{ borderRight: '7px solid #232631'}}
  date={ experience.date }
  iconStyle={{ background: experience.iconBg }}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img src={ experience.icon }
      alt={ experience.company_name }
      className="w-[60%] h-[60%] object-contain"/>
    </div>
  }>
  {/*title and company name formatting*/}
  <div>
    <h3 className="text-white text-[24px] font-bold">
      {experience.title}
    </h3>
    <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{experience.company_name}</p>
  </div>

  {/*formatting of the spacing between lines and bullet points*/}
  <ul className="mt-5 list-disc ml-5 space-y-2">
    {experience.points.map((point, index) => (
      <li key={`experience-point-${index}`}
      className='="text-white-100 text-[14px] pl-1 tracking-wider'
    >
      {/*fetches point from index.js*/}
      {point}
    </li>
    ))}
  </ul>
  </VerticalTimelineElement>
)

{/*allows the creation of the timeline*/}
const Experience = () => {
  return (
    <>
      {/*title and subheading formatting*/}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h1 className={styles.sectionHeadText}>Work Experience.</h1>
      </motion.div>

      {/*timeline formatting*/}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {/*loops through index.js file to display experience cards of information*/}
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")