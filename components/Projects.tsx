import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/typings';
import { urlFor } from '@/sanity';
import Image from 'next/image';

type Props = {
  projects: Project[]
}

function Projects({ projects }: Props) {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative overflow-hidden h-screen text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#04D347]/80">
        {projects?.map((project, i) => (
          // eslint-disable-next-line react/jsx-key
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              className="w-1/4 h-full object-cover rounded-2xl"
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                Case Study {i + 1} of {projects.length}: {' '} {project.title}
              </h4>

              <div className='flex items-center space-x-2 justify-center'>
                {project?.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    className="h-20 w-20 rounded-full object-cover"
                    src={urlFor(technology.image).url()}
                    alt={''}
                    width={100}
                    height={100}
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">
              {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#04D347]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects