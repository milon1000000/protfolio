import React from 'react'
import{projects} from "../assets/assets.jsx"
import {motion} from "framer-motion"
import ProjectCard from './ProjectCard.jsx'
function Projects() {
  return (
    <motion.div 
     initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: false ,amount:0.2 }}
      id="projects"
     className='py-20 bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'>
        <div className='container mx-auto px-6 max-w-6xl'>
            <h2 className='text-3xl font-bold text-center mb-4'>My <span className='text-purple-500'>Project</span></h2>
            <p className='text-center max-w-2xl mx-auto mb-16'>A selection of my recent work</p>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {projects.map((project,index)=>(
                    <ProjectCard key={index} {...project}/>
                ))}
            </div>
        </div>
      
    </motion.div>
  )
}

export default Projects
