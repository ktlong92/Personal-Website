import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-top"
        src="https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/325852354_1195828591327635_1420710896402738339_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=A0tqpobMMkoAX9UGtha&tn=HhcxcWqy8EKiOyLE&_nc_ht=scontent-lax3-2.xx&oh=00_AfAQpISXFpMlE5ds-uFxu_nDZJVO7IAKoltSEGv1ppAEZQ&oe=63C90AD8"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Job Title</h4>
        <p className="font-bold text-2xl mt-1">Company Name</p>
        <div className="flex space-x-2 my-2">
          <Image src="/../public/favicon.ico" alt="" width={10} height={10} className="h-10 w-10 rounded-full" />
          <Image src="/../public/favicon.ico" alt="" width={10} height={10} className="h-10 w-10 rounded-full" />
          <Image src="/../public/favicon.ico" alt="" width={10} height={10} className="h-10 w-10 rounded-full" />
          <Image src="/../public/favicon.ico" alt="" width={10} height={10} className="h-10 w-10 rounded-full" />
        </div>
        <p className="uppercase py-5 text-gray-300">Started... - Ended...</p>

        <ul className="list-disc space-y-4 ml-5 text-md">
          <li>Summary points Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points Summary points</li>
          <li>Summary points Summary points Summary points Summary points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
