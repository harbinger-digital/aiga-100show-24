import Image from 'next/image'
import Link from 'next/link'

export default function JudgesCard({ src, alt, name, description }) {
  return (
    <Link href='/shivani-parasnis' className='flex md:flex-col md:h-[412px] basis-full overflow-clip rounded'>
      <div className='h-36 w-36 md:h-full md:w-full relative flex-shrink-0 md:shrink'>
        <Image src={src} alt={alt} fill={true} style={{ objectFit: 'cover' }} />
      </div>
      <div className='flex flex-col justify-between md:justify-start w-full grow gap-2 p-4 backdrop-blur-[4px] bg-black/[6%] border border-1 border-black/[8%] group-hover:bg-black/10 transition-all duration-300'>
        <h3 className='text-white font-[800] text-xl leading-6 uppercase tracking-widest'>{name}</h3>
        <p className='text-white font-[400] text-sm md:text-base uppercase tracking-widest'>{description}</p>
      </div>
    </Link>
  )
}
