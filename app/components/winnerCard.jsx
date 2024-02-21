import Image from 'next/image'

export default function WinnerCard({ src, name }) {
  return (
    <div className='flex flex-col w-full rounded overflow-clip'>
      <div className='relative w-full h-full overflow-clip aspect-video'>
        <Image src={src} alt='Image 1' fill={true} objectFit='cover' />
      </div>
      <div className='flex flex-col justify-between w-full gap-1 p-2 backdrop-blur-[4px] bg-black/[6%] border border-1 border-black/[8%] group-hover:bg-black/10 transition-all duration-300'>
        <p className='text-white font-[400] text-xs md:text-sm uppercase tracking-widest'>{name}</p>
      </div>
    </div>
  )
}
