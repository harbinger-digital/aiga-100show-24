import Navbar from '../components/navbar'
import Image from 'next/image'
import Footer from '../components/footer'
import Background from '../components/background'
import JudgesCard from '../components/judgesCard'

export function generateStaticParams() {
  return [{ judge: 'shivani-parasnis' }, { judge: 'george-garrastegui' }, { judge: 'jeff-minnichbach' }]
}

const pageData = {
  'shivani-parasnis': {
    title: 'Shivani Parasnis',
    subtitle: 'Typographer & Graphic Designer',
    photoURL: '/judges/shivani-parasnis-hover.png',
    description:
      "Shivani Parasnis is a typographer and graphic designer from Mumbai, India, currently based out of Brooklyn, NY. After making the switch from Biotechnology to Graphic Design in 2018, Parasnis moved to the States to pursue an MFA in Graphic Design at the Maryland Institute College of Art. Her work is heavily influenced by her physical and emotional environments, and she enjoys melding influences of the East and West in her practice. Her design thinking is grounded in typography, vibrancy, music, and culture. Her projects have been recognized by the Type Directors' Club, Art Directors' Club, It's Nice That, The One Club for Creativity, Adobe and AIGA; and featured in numerous publications globally. She's previously worked for clients including the New York Times, WIRED, Adobe, WeTransfer, and many others, and is presently a Senior Designer in the Brand & Creative team at Spotify, NY.",
    websiteURL: 'https://shivaniparasnis.com/',
    instagramURL: 'https://www.instagram.com/shivaniparasnis/',
    linkedInURL: 'https://www.linkedin.com/in/shivaniparasnis/',
  },
  'george-garrastegui': {
    title: 'George Garrastegui',
    subtitle: 'educator, designer',
    photoURL: '/judges/george-garrastegui-hover.png',
    description:
      "George Garrastegui, Jr. is an educator, designer, and advocate looking to elevate the creative process by shifting the focus to how we work over what we produce. With over 20+ years of experience in publishing, marketing, and strategy, George has worked with brands such as Esquire, Ford, Cadillac, and Popular Mechanics. He teaches design research and strategic problem-solving at CUNY's City Tech and advertising at the School of Visual Arts. George hosts the award-winning How Creative Work podcast Works in Process, which highlights methodologies and approaches from creatives who have successfully navigated their creative careers.<br><br>In 2023 Works in Process was a feature media partner of the UK's Tech Circus What If? Summit and the inaugural co-host of the Racism Untaught podcast. In 2022, George was a keynote speaker at the OnBrand Conference, and lastly, in 2021 + 2022, he chaired and moderated the AIGA Design + Business Conference, which explored how design impacts businesses in measurable ways.<br><br>George has earned both his AAS in Illustration and his BFA in Graphic Design from New York's Fashion Institute of Technology and his MFA in Graphic Design from the Savannah College of Art + Design. He is fueled by the pursuit of uncovering ways to give emerging designers access and opportunities as a member of both the AIGA DEI initiative and 100 Roses from Concrete.",
    websiteURL: 'https://ggarrastegui.com/',
    instagramURL: 'https://www.instagram.com/ggarrastegui',
    linkedInURL: 'https://www.linkedin.com/in/ggarrastegui/',
  },
  'jeff-minnichbach': {
    title: 'Jeff Minnichbach',
    subtitle: 'graphic designer',
    photoURL: '/judges/jeff-minnichbach-hover.png',
    description:
      '2016. As a Top-Rated Upwork designer I had the privilege of creating thousands of designs for some of the most renowned companies online including TRUECar McAfee VitaCup Bulletproof PlutoTV National Achievers Convention Outstanding Foods and Christie Brinkley Skincare among others.<br><br>2018 marked a pivotal year in my career as I transitioned from a freelance designer to a business entrepreneur with the launch of No Limit Creatives (NLC). NLC a subscription-based design service rapidly evolved offering businesses of various sizes comprehensive graphic and video design solutions. Our model focuses on eliminating the traditional challenges associated with freelance and in-house designers such as unreliable commitments large overhead and limitations on skills & experience.<br><br>NLC distinguished itself as a leading subscription-based design service in the online realm achieving seven-figure revenues in under two years. We have catered to thousands of clients worldwide and have built a robust fully remote team of nearly 400 employees and contractors emphasizing the flexibility and efficiency of a modern office-free work environment.',
    websiteURL: 'https://nlc.com/',
    instagramURL: 'https://www.instagram.com/jeffminnichbach/',
    linkedInURL: 'https://www.linkedin.com/in/jeff-minnichbach/',
  },
}

export default function Page({ params }) {
  let descriptionLines = pageData[params.judge].description.split('<br><br>')
  return (
    <div className='font-geist px-6 sm:px-8 md:px-16 transition-all duration-500'>
      <Navbar />
      <div className='flex flex-col mx-auto w-full max-w-6xl md:gap-32 gap-24 py-32 md:py-40'>
        <div className='flex flex-col md:flex-row w-full lg:gap-16 gap-6 md:gap-12 transition-all duration-500'>
          <div className='lg:w-[400px] md:w-[400px] w-32 h-32 rounded-full overflow-clip lg:shrink-0 relative md:h-auto md:max-h-[350px] lg:max-h-[500px] transition-all duration-500'>
            <Image
              src={pageData[params.judge].photoURL}
              alt={pageData[params.judge].title}
              fill={true}
              className='object-cover object-top'
            />
          </div>
          <div className='flex flex-col items-start w-full gap-8'>
            <div className='flex flex-col items-start gap-1 self-stretch'>
              <h1 className='self-stretch text-white font-bely text-3xl lg:text-5xl leading-tighter font-normal tracking-widest uppercase'>
                {pageData[params.judge].title}
              </h1>
              <h2 className='self-stretch text-white text-lg font-[350] leading-7 tracking-[1.44px] capitalize'>
                {pageData[params.judge].subtitle}
              </h2>
            </div>
            <div className='flex flex-col gap-4'>
              {descriptionLines.map((line, index) => (
                <p key={index} className='self-stretch text-white text-lg font-[350] leading-7'>
                  {line}
                </p>
              ))}
            </div>
            <div className='justify-center items-center gap-6 inline-flex'>
              <div className='w-6 h-6 relative'>
                <a href={pageData[params.judge].websiteURL} target='_blank'>
                  <Image src='/images/web_icon.svg' alt='Website' width='24' height='24' />
                </a>
              </div>
              <div className='w-6 h-6 relative'>
                <a href={pageData[params.judge].instagramURL} target='_blank'>
                  <Image src='/images/insta_icon.svg' alt='Instagram' width='24' height='24' />
                </a>
              </div>
              <div className='w-6 h-6 relative'>
                <a href={pageData[params.judge].linkedInURL} target='_blank'>
                  <Image src='/images/linkedIn_icon.svg' alt='LinkedIn' width='24' height='24' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-start gap-10 self-stretch'>
          <div className='flex justify-center items-center gap-8 self-stretch'>
            <div className='w-full h-px relative bg-white' />
            <h4 className='font-bely uppercase text-3xl tracking-widest text-white'>Judges</h4>
            <div className='w-full h-px relative bg-white' />
          </div>
          <div className='flex gap-4 w-full flex-col md:flex-row'>
            <JudgesCard
              src='/judges/shivani-parasnis.jpg'
              alt='Shivani Parasnis Headshot'
              name='Shivani Parasnis'
              description='typographer, graphic designer'
              href='/shivani-parasnis'
              position='10%'
              hoverSrc='/judges/shivani-parasnis-hover.png'
            />
            <JudgesCard
              src='/judges/george-garrastegui.jpg'
              alt='Geoge Garrastregui Headshot'
              name='George Garrastegui, Jr.'
              description='educator, designer'
              href='/george-garrastegui'
              position='30%'
              hoverSrc='/judges/george-garrastegui-hover.png'
            />
            <JudgesCard
              src='/judges/jeff-minnichbach.jpg'
              alt='Jeff Minnichbach Headshot'
              name='Jeff Minnichbach'
              description='graphic designer'
              href='/jeff-minnichbach'
              position='10%'
              hoverSrc='/judges/jeff-minnichbach-hover.png'
            />
          </div>
        </div>
      </div>
      <Background />
      <Footer />
    </div>
  )
}
