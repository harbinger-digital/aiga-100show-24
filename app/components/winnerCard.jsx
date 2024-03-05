'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function WinnerCard({ src, name, category }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex flex-col w-full rounded overflow-clip group cursor-pointer'>
      <div className='relative w-full h-full overflow-clip aspect-video'>
        <Image
          src={src}
          alt='Image 1'
          fill={true}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          onClick={() => setIsOpen(true)}
        />
      </div>
      <div className='flex h-24 md:h-28 flex-col justify-between w-full gap-1 p-2 backdrop-blur-[4px] bg-black/[6%] border border-1 border-black/[8%] group-hover:bg-black/10 transition-all duration-300'>
        <p className='text-white font-[600] text-xs md:text-sm  uppercase tracking-widest text-center'>
          {name}
          <strong className='font-[400] italic capitalize'> ({category})</strong>
        </p>
        {/* <p className='text-white font-[400] text-xs md:text-sm capitalize'>{category}</p> */}
      </div>
      {isOpen && (
        <div
          className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 p-4 sm:p-16 md:p-32 bg-black/50 cursor-pointer backdrop-blur-sm'
          onClick={() => setIsOpen(false)}
        >
          <div className='relative w-full h-full'>
            <Image src={src} alt='Image 1' layout='fill' objectFit='contain' />
          </div>
        </div>
      )}
    </div>
  )
}
