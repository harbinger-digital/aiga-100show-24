import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Spinner() {
  return (
    <>
      <motion.div
        animate={{ opacity: [0.2, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
        className='relative -z-30'
      >
        <div className='bg-[#F60011] rounded-full blur-[200px] h-[904px] w-[904px] fixed bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 mix-blend-overlay opacity-40'></div>
      </motion.div>
      <motion.div
        animate={{ opacity: [0.2, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
        className='-z-30'
      >
        <div className='bg-[#F60011] rounded-full blur-[200px] h-[904px] w-[904px] fixed top-0 right-0 transform translate-x-1/2 -translate-y-1/2 mix-blend-overlay opacity-40'></div>
      </motion.div>
      <div className='fixed bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 mix-blend-soft-light opacity-30 -z-30'>
        <div className='relative flex flex-col items-center justify-center left-1/2 transform -translate-x-1/2 -translate-y-1/8 w-[500px] h-[500px]'>
          <motion.div
            className='absolute w-[200px] h-[200px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[300px] 2xl:w-[400px] 2xl:h-[400px]'
            animate={{ rotate: 180 }}
            transition={{ duration: 50, repeat: Infinity, repeatType: 'loop' }}
          >
            <Image src='/Bee_Butterfly_level_1.png' layout='fill' alt='butterfly and bee pattern' />
          </motion.div>
          <motion.div
            className='absolute w-[500px] h-[500px] 2xl:w-[700px] 2xl:h-[700px]'
            animate={{ rotate: -180 }}
            transition={{ duration: 100, repeat: Infinity, repeatType: 'loop' }}
          >
            <Image src='/Bee_Butterfly_level_2.png' width={700} height={700} alt='butterfly and bee pattern' />
          </motion.div>
          <motion.div
            className='absolute w-[700px] h-[700px] 2xl:w-[1000px] 2xl:h-[1000px]'
            animate={{ rotate: 180 }}
            transition={{ duration: 200, repeat: Infinity, repeatType: 'loop' }}
          >
            <Image src='/Bee_Butterfly_level_3.png' width={1000} height={1000} alt='butterfly and bee pattern' />
          </motion.div>
          <motion.div
            className='absolute w-[900px] h-[900px] 2xl:w-[1300px] 2xl:h-[1300px]'
            animate={{ rotate: -180 }}
            transition={{ duration: 300, repeat: Infinity, repeatType: 'loop' }}
          >
            <Image src='/Bee_Butterfly_level_4.png' width={1300} height={1300} alt='butterfly and bee pattern' />
          </motion.div>
        </div>
      </div>
    </>
  )
}
