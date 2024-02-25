'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import gsap from 'gsap'

export default function Hero() {
  useEffect(() => {
    let spinner = gsap.to('#spinner', { rotation: 359, repeat: -1, ease: 'none', duration: 30 })

    spinner.play()
  }, [])

  return (
    <div className='flex flex-col gap-8 h-lg:gap-10 items-center relative md:max-w-sm h-lg:max-w-lg max-w-80 transition-all duration-500'>
      <div
        id='spinner'
        className='absolute opacity-70 mix-blend-soft-light top-[-70px] left-[-16px] md:top-[-70px] md:left-[10px] h-lg:top-[-112px] h-lg:left-[-20px] w-[177px] h-[177px] h-lg:w-[277px] h-lg:h-[277px] rotate-45 transition-all duration-500'
      >
        <Image src='/Bee_Butterfly_level_1.png' alt='Butterfly Pattern' fill={true} />
      </div>
      <Image src='/title.svg' alt='AIGA 100 Show Title' width={810.3} height={507.95} />
      <div className='flex flex-col gap-4 items-center'>
        <div className='group flex relative'>
          <Link
            href='https://aiga-chapters.secure-platform.com/a/page/chapters/louisville'
            className='flex gap-3 px-6 py-4 justify-center items-center z-10'
          >
            <p className='text-white font-[800] text-base uppercase tracking-widest text-center'>
              Submit Work by feb&nbsp;25
            </p>
          </Link>
          <div className='absolute top-0 right-0 bottom-0 left-0 rounded-full backdrop-blur-[4px] bg-black/[6%] border border-1 border-black/[8%] group-hover:bg-black/10 transition-all duration-300'></div>
        </div>
        {/* <Link href='https://www.eventbrite.com/e/2024-aiga-lou-top-100-show-tickets-821827447017' className='flex justify-center items-center z-10'>
          <p className='text-white font-[800] text-base uppercase tracking-widest underline'>purchase event tickets!</p>
        </Link> */}
      </div>
    </div>
  )
}
