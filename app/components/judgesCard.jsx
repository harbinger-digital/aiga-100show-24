import Image from 'next/image'
import Link from 'next/link'

export default function JudgesCard({ src, alt, name, description }) {
  return (
    <Link href='/shivani-parasnis'>
      <div className='flex flex-col relative h-[412px] min-w-[233px] grow'>
        <div className='self-stretch h-full relative'>
          <Image src={src} alt={alt} fill='true' objectFit='cover' />
        </div>
        <div className='flex flex-col gap-2 md:min-h-[150px] md:justify-between p-4 backdrop-blur-[4px] bg-black/[6%] border border-1 border-black/[8%] group-hover:bg-black/10 transition-all duration-300'>
          <h3 className='text-white font-[800] text-xl leading-6 uppercase tracking-widest'>{name}</h3>
          <p className='text-white font-[400] text-base uppercase tracking-widest'>{description}</p>
        </div>
      </div>
    </Link>
  )
}
