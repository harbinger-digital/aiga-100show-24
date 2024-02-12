import Image from 'next/image'
import Link from 'next/link'

export default function JudgesCard({ alt, name, description, href, position, hoverSrc }) {
  return (
    <Link href={href} className='flex md:flex-col md:h-[412px] basis-full overflow-clip rounded group'>
      <div className='h-36 w-28 md:h-full md:w-full relative flex-shrink-0 md:shrink overflow-clip'>
        <Image
          src={hoverSrc}
          alt={alt}
          fill={true}
          style={{ objectFit: 'cover', objectPosition: `center ${position}` }}
          className='group-hover:scale-105 transition-all duration-500'
        />
      </div>
      <div className='flex flex-col justify-between w-full md:h-[250px] lg:max-h-[150px] lg:h-full gap-2 p-4 backdrop-blur-[4px] bg-black/[6%] border border-1 border-black/[8%] group-hover:bg-black/10 transition-all duration-300'>
        <h3 className='text-white font-[800] text-lg sm:text-lg md:text-xl leading-6 uppercase tracking-widest'>
          {name}
        </h3>
        <p className='text-white font-[400] text-sm md:text-base uppercase tracking-widest'>{description}</p>
      </div>
    </Link>
  )
}
