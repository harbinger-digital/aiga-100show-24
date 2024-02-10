'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Background() {
  const [altBackground, setAltBackground] = useState(false)

  useEffect(() => {
    const isiPhone = typeof window !== 'undefined' && /iPhone/i.test(navigator.platform)
    setAltBackground(isiPhone)
    document.body.style.backgroundColor = isiPhone ? '#906DBE' : '#aa93c8'
  }, [])

  if (altBackground) {
    return (
      <>
        <div className='bg-gradient-to-b from-[#aa93c8] to-[#906DBE] absolute right-0 left-0 top-0 h-[130vh] -z-50'></div>
        <div className='bg-gradient-to-b from-[transparent] to-[#906DBE] absolute right-0 left-0 top-0 h-[130vh] -z-30'></div>
        <div className='h-[130vh] absolute right-0 left-0 top-0 -z-40 mix-blend-overlay opacity-50'>
          <Image
            src='/BackgroundTexture.png'
            alt='Background Texture'
            fill={true}
            objectFit='cover'
            loading='eager'
            priority={true}
          />
        </div>
      </>
      // <div className='flex flex-col absolute top-0 right-0 left-0 bottom-0 -z-40 mix-blend-overlay opacity-50'>
      //   <div className='h-[700px] relative'>
      //     <Image
      //       src='/BackgroundTexture.png'
      //       alt='Background Texture'
      //       fill={true}
      //       objectFit='cover'
      //       loading='eager'
      //       priority={true}
      //     />
      //   </div>
      //   <div className='h-[700px] relative'>
      //     <Image
      //       src='/BackgroundTexture.png'
      //       alt='Background Texture'
      //       fill={true}
      //       objectFit='cover'
      //       loading='eager'
      //       priority={true}
      //     />
      //   </div>
      //   <div className='h-[700px] relative'>
      //     <Image
      //       src='/BackgroundTexture.png'
      //       alt='Background Texture'
      //       fill={true}
      //       objectFit='cover'
      //       loading='eager'
      //       priority={true}
      //     />
      //   </div>
      //   <div className='h-[700px] relative'>
      //     <Image
      //       src='/BackgroundTexture.png'
      //       alt='Background Texture'
      //       fill={true}
      //       objectFit='cover'
      //       loading='eager'
      //       priority={true}
      //     />
      //   </div>
      // </div>
    )
  } else {
    return (
      <div
        className='bg-scroll bg-repeat h-[150dvh] mix-blend-overlay opacity-40 fixed left-0 right-0 bottom-[-150px] -z-40'
        style={{
          backgroundImage: 'url(/BackgroundTexture.png)',
          backgroundSize: '60%',
          backgroundPosition: 'top',
          backgroundRepeat: 'repeat',
        }}
      ></div>
    )
  }
}
