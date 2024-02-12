import Navbar from '../components/navbar'
import Image from 'next/image'
import Footer from '../components/footer'
import Background from '../components/background'

export default function Page() {
  return (
    <div className='font-geist px-6 sm:px-8 md:px-16 transition-all duration-500'>
      <Navbar />
      <div className='flex flex-col mx-auto w-full max-w-6xl md:gap-32 gap-24 py-32 md:py-40'>
        <div className='flex flex-col md:flex-row w-full lg:gap-16 gap-6 md:gap-12 transition-all duration-500'>
          <div className='lg:w-[400px] md:w-[400px] w-32 h-32 rounded-full overflow-clip lg:shrink-0 relative md:h-auto md:max-h-[350px] lg:max-h-[500px] transition-all duration-500'>
            <Image src='/images/kaviya-keynote-hover.png' alt='placeholder' fill={true} className='object-cover' />
          </div>
          <div className='flex flex-col items-start w-full gap-8'>
            <div className='flex flex-col items-start gap-1 self-stretch'>
              <h1 className='self-stretch text-white font-bely text-3xl lg:text-5xl leading-tighter font-normal tracking-widest uppercase'>
                Kaviya Ravi
              </h1>
              <h2 className='self-stretch text-white text-lg font-[350] leading-7 tracking-[1.44px] capitalize'>
                Artist, maker, designer, biochemist & small business owner
              </h2>
            </div>
            <div className='flex flex-col gap-4'>
              <p className='self-stretch text-white text-lg font-[350] leading-7'>
                Kaviya Ravi is an artist, maker, designer, biochemist and small business owner raised in Southern India.
                Everything she creates is “Unapologetically Colorful” and working with her hands brings her the greatest
                joy. Her Motto is to live a silly, simple life and this philosophy is reflected in her interiors, art
                and all her designs. She shares glimpses of her colorful life on her instagram kvyainc and sells her
                colorful wares on her online store KHROMOPHILIA.
              </p>
              <p className='self-stretch text-white text-lg font-[350] leading-7'>
                You can find her most days exploring the world with her partner and her pup or creating colorfully,
                whimsical things in her little home studio in Louisville, Kentucky. She was a contestant on NBC’s
                “Making It” and her colorful home has been featured on various design blogs and magazines.
              </p>
            </div>
            <div className='justify-center items-center gap-6 inline-flex'>
              <div className='w-6 h-6 relative'>
                <a href='https://khromophilia.com/' target='_blank'>
                  <Image src='/images/web_icon.svg' alt='Website' width='24' height='24' />
                </a>
              </div>
              <div className='w-6 h-6 relative'>
                <a href='https://www.instagram.com/kvyainc' target='_blank'>
                  <Image src='/images/insta_icon.svg' alt='Instagram' width='24' height='24' />
                </a>
              </div>
              <div className='w-6 h-6 relative'>
                <a href='https://www.linkedin.com/in/kaviya-ravi-65647450/' target='_blank'>
                  <Image src='/images/linkedIn_icon.svg' alt='LinkedIn' width='24' height='24' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-8 w-full'>
          <div className='flex justify-center items-center gap-8 self-stretch'>
            <div className='grow h-px relative bg-white' />
            <h2 className='font-bely uppercase text-3xl tracking-widest text-white text-center'>Artist&apos;s Works</h2>
            <div className='grow h-px relative bg-white' />
          </div>
          <div className='grid grid-col-1 sm:grid-cols-2 gap-4'>
            <div className='w-full rounded overflow-clip relative aspect-square'>
              <Image src='/images/gallery_1.jpeg' alt='Image 1' layout='fill' className='object-cover' />
            </div>
            <div className='w-full rounded overflow-clip relative aspect-square'>
              <Image src='/images/gallery_2.jpeg' alt='Image 2' layout='fill' className='object-cover' />
            </div>
            <div className='w-full rounded overflow-clip relative aspect-square'>
              <Image src='/images/gallery_3.jpeg' alt='Image 3' layout='fill' className='object-cover' />
            </div>
            <div className='w-full rounded overflow-clip relative aspect-square'>
              <Image src='/images/gallery_4.jpeg' alt='Image 3' layout='fill' className='object-cover' />
            </div>
          </div>
        </div>
      </div>
      <Background />
      <Footer />
    </div>
  )
}
