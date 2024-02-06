import Navbar from '../components/navbar'
import Image from 'next/image'

export function generateStaticParams() {
  return [{ judge: 'shivani-parasnis' }, { judge: 'george-garrastregui' }, { judge: 'jeff-minnichbach' }]
}

const pageData = {
  'shivani-parasnis': {
    title: 'Shivani Parasnis',
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
      <div className='flex mx-auto w-full max-w-3xl'>
        <div className='flex max-w-[400px] grow relative'>
          <Image
            src={pageData[params.judge].photoURL}
            alt={pageData[params.judge].title}
            fill={true}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p className='flex shrink'>{pageData[params.judge].description}</p>
      </div>
    </div>
  )
}
