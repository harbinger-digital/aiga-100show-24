import Navbar from '../components/navbar'
import Image from 'next/image'
import Footer from '../components/footer'
import Background from '../components/background'
import JudgesCard from '../components/judgesCard'

export function generateStaticParams() {
  return [{ judge: 'shivani-parasnis' }, { judge: 'george-garrastregui' }, { judge: 'jeff-minnichbach' }]
}

const pageData = {
  'shivani-parasnis': {
    title: 'Shivani Parasnis',
    subtitle: 'Typographer & Graphic Designer',
    photoURL: '/judges/shivani-parasnis.jpg',
    description:
      'Shivani Parasnis is a typographer and graphic designer from Mumbai, India, currently based out of Brooklyn, NY. After making the switch from Biotechnology to Graphic Design in 2018, Parasnis moved to the States to pursue an MFA in Graphic Design at the Maryland Institute College of Art. Her work is heavily influenced by her physical and emotional environments, and she enjoys melding influences of the East and West in her practice. Her design thinking is grounded in typography, vibrancy, music, and culture. Her projects have been recognized by the Type Directors&apos; Club, Art Directors&apos; Club, It&apos;s Nice That, The One Club for Creativity, Adobe and AIGA; and featured in numerous publications globally. She&apos;s previously worked for clients including the New York Times, WIRED, Adobe, WeTransfer, and many others, and is presently a Senior Designer in the Brand & Creative team at Spotify, NY.',
  },
  'george-garrastregui': {
    title: 'George Garrastegui',
    description: 'George Garrastegui',
  },
  'jeff-minnichbach': {
    title: 'Jeff Minnichbach',
    description: 'Jeff Minnichbach',
  },
}

export default function Page({ params }) {
  return (
    <div className='font-geist px-6 sm:px-8 md:px-16 transition-all duration-500'>
      <Navbar />
      <div className='flex flex-col mx-auto w-full max-w-4xl gap-32 py-36'>
        <div className='flex w-full gap-16'>
          <div className='w-[400px] shrink-0 relative'>
            <Image
              src={pageData[params.judge].photoURL}
              alt={pageData[params.judge].title}
              fill={true}
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='flex flex-col items-start gap-8 flex-[1_0_0]'>
            <div className='flex flex-col items-start gap-1 self-stretch'>
              <h1 className='self-stretch text-white font-bely text-[35px] font-normal leading-10 tracking-[4.2px] uppercase'>
                {pageData[params.judge].title}
              </h1>
              <h2 className='self-stretch text-white text-lg font-[350] leading-7 tracking-[1.44px] capitalize'>
                {pageData[params.judge].subtitle}
              </h2>
            </div>
            <p className='self-stretch text-white text-lg font-[350] leading-7'>{pageData[params.judge].description}</p>
          </div>
        </div>
        <div className='flex flex-col items-start gap-10 self-stretch'>
          <div className='flex justify-center items-center gap-8 self-stretch'>
            <h4 className='text-white text-center font-bely text-[35px] font-normal leading-10 tracking-[4.2px] uppercase'>
              Judges
            </h4>
          </div>
          <div className='flex w-full gap-4 flex-col md:flex-row'>
            <JudgesCard
              src='/judges/shivani-parasnis.jpg'
              alt='Shivani Parasnis Headshot'
              name='Shivani Parasnis'
              description='typographer, graphic designer'
            />
            <JudgesCard
              src='/judges/shivani-parasnis.jpg'
              alt='Geoge Garrastregui Headshot'
              name='George Garrastegui, Jr.'
              description='educator, designer'
            />
            <JudgesCard
              src='/judges/shivani-parasnis.jpg'
              alt='Jeff Minnichbach Headshot'
              name='Jeff Minnichbach'
              description='graphic designer'
            />
          </div>
        </div>
      </div>
      <Background />
      <Footer />
    </div>
  )
}
