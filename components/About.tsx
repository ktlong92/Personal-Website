import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/325852354_1195828591327635_1420710896402738339_n.jpg?stp=dst-jpg_p526x296&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=A0tqpobMMkoAX9UGtha&tn=HhcxcWqy8EKiOyLE&_nc_ht=scontent-lax3-2.xx&oh=00_AfAQpISXFpMlE5ds-uFxu_nDZJVO7IAKoltSEGv1ppAEZQ&oe=63C90AD8"
        alt=""
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here&apos;s a little background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sequi officia aperiam quas cumque dolor ratione nostrum eligendi velit nam. Fuga perspiciatis inventore esse asperiores voluptatum quisquam facere atque reiciendis?
        </p>
      </div>
    </motion.div>
  )
}

export default About
