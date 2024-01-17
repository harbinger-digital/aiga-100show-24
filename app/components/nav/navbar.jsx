import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useScroll, useMotionValueEvent, motion, useAnimation } from 'framer-motion'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'

const navbarVariants = {
  initial: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    paddingTop: '2rem',
    paddingBottom: '0',
    borderColor: 'rgba(0, 0, 0, 0)',
  },
  scrolled: {
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    borderColor: 'rgba(0, 0, 0, 0.08)',
  },
}

const navButtonVariants = {
  initial: {
    backgroundColor: 'rgba(0, 0, 0, 0.06)',
    borderColor: 'rgba(0, 0, 0, 0.08)',
  },
  scrolled: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: 'rgba(0, 0, 0, 0)',
  },
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 64) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  })

  const [timeLeft, setTimeLeft] = useState({})

  useEffect(() => {
    const targetDate = new Date('2024-02-01T00:00:00') // set your target date here

    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date()
      let timeLeft = {}

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24))
            .toString()
            .padStart(2, '0'),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
            .toString()
            .padStart(2, '0'),
          minutes: Math.floor((difference / 1000 / 60) % 60)
            .toString()
            .padStart(2, '0'),
          seconds: Math.floor((difference / 1000) % 60)
            .toString()
            .padStart(2, '0'),
        }
      }

      setTimeLeft(timeLeft)
    }

    calculateTimeLeft()
    const timerId = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timerId) // clear interval on component unmount
  }, [])

  const controls = useAnimation()

  const startAnimation = () => {
    controls.start('hover')
  }

  const stopAnimation = () => {
    controls.start('initial')
  }

  return (
    <motion.div
      className={`z-50 fixed top-0 right-0 left-0 px-8 flex justify-between items-center border border-b border-black/[8%] ${
        isScrolled ? 'backdrop-blur-lg' : ''
      }`}
      variants={navbarVariants}
      initial='initial'
      animate={isScrolled ? 'scrolled' : 'initial'}
      transition={{ duration: 0.4 }}
    >
      <Link href='https://louisville.aiga.org/'>
        <Image src='/Logo.png' alt='AIGA 100 Show Logo' width={120} height={32} className='h-8' />
      </Link>
      <div className='gap-2 hidden md:flex'>
        <div className='group flex relative' onMouseEnter={startAnimation} onMouseLeave={stopAnimation}>
          <Link
            href='/'
            className={`flex gap-3 px-6 py-4 rounded justify-center items-center transition-all duration-300 z-10 ${
              isScrolled ? 'group-hover:bg-black/10' : 'group-hover:bg-black/5'
            }`}
          >
            <Image src='/ticket.svg' alt='Submit Icon' width={20} height={20} />
            <p className='text-white font-[800] text-base uppercase tracking-widest'>Tickets</p>
          </Link>
          <motion.div
            className={`absolute top-0 right-0 bottom-0 left-0 rounded border border-1 transition-all  ${
              isScrolled ? '' : 'backdrop-blur-[4px]'
            }`}
            variants={navButtonVariants}
            initial='initial'
            animate={isScrolled ? 'scrolled' : 'initial'}
            transition={{ duration: 0.8 }}
          ></motion.div>
        </div>
        <div className='group flex relative' onMouseEnter={startAnimation} onMouseLeave={stopAnimation}>
          <Link
            href='/'
            className={`flex gap-3 min-w-[334px] px-6 py-4 rounded justify-start items-center transition-all duration-300 z-10 ${
              isScrolled ? 'group-hover:bg-black/10' : 'group-hover:bg-black/5'
            }`}
          >
            <Image src='/submit.svg' alt='Submit Icon' width={20} height={20} />
            <p className='text-white font-[800] text-base uppercase tracking-widest'>Submit</p>
            <p className='text-white font-[800] text-base uppercase tracking-widest'>
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </p>
          </Link>
          <motion.div
            className={`absolute top-0 right-0 bottom-0 left-0 rounded border border-1 transition-all ${
              isScrolled ? '' : 'backdrop-blur-[4px]'
            }`}
            variants={navButtonVariants}
            initial='initial'
            animate={isScrolled ? 'scrolled' : 'initial'}
            transition={{ duration: 0.8 }}
          ></motion.div>
        </div>
      </div>
      {/* mobile */}
      <div className='flex md:hidden'>
        <div className='group flex relative' onMouseEnter={startAnimation} onMouseLeave={stopAnimation}>
          <Link
            href='/'
            className={`flex gap-3 px-3 py-2 rounded justify-center items-center transition-all duration-300 z-10 ${
              isScrolled ? 'group-hover:bg-black/10' : 'group-hover:bg-black/5'
            }`}
          >
            <HamburgerMenuIcon className='text-white w-6 h-6' />
          </Link>
          <motion.div
            className={`absolute top-0 right-0 bottom-0 left-0 rounded border border-1 transition-all  ${
              isScrolled ? '' : 'backdrop-blur-[4px]'
            }`}
            variants={navButtonVariants}
            initial='initial'
            animate={isScrolled ? 'scrolled' : 'initial'}
            transition={{ duration: 0.8 }}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  )
}
