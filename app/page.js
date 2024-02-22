'use client'

import Background from './components/background'
import Hero from './components/hero'
import Spinner from './components/spinner'
import Navbar from './components/navbar'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Footer from './components/footer'
import JudgesCard from './components/judgesCard'
import Image from 'next/image'
import Link from 'next/link'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { PlusIcon, MinusIcon } from '@radix-ui/react-icons'
import WinnerCard from './components/winnerCard'
import { useState, useEffect } from 'react'
import winnersData from '../data/winnersData.json'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 767px)').matches)
  }, [])

  return (
    <div className='font-geist px-6 sm:px-8 md:px-16 transition-all duration-500 relative'>
      <Navbar />
      <Spinner />
      <div className='flex flex-col gap-32 lg:gap-48 mx-auto w-full max-w-3xl items-center pt-[30vh] pb-[10vh] md:pb-[10vh] lg:pb-[20vh] h-md:pt-[34vh] h-lg:pt-[30vh] transition-all duration-500 z-30'>
        <Hero />
        <div className='flex flex-col gap-8 w-full'>
          <div className='flex justify-center items-center gap-8 self-stretch'>
            <div className='grow h-px relative bg-white' />
            <h2 className='font-bely uppercase text-3xl tracking-widest text-white text-center'>About The Show</h2>
            <div className='grow h-px relative bg-white' />
          </div>
          <p className='font-[350] text-lg leading-7 text-white text-center'>
            The 100 Show recognizes the best creative work from designers within Kentucky and Southern Indiana.
            Agencies, freelancers, and in-house teams are celebrated for their efforts in a range of design disciplines
            including advertising, branding, packaging, environmental design, interactive design, service design, and
            more. The awards culminate in the top 100 works – showcasing the Best of Category winners and a single work
            that is Best of Show.
          </p>
        </div>
        <div className='flex flex-col gap-8 w-full'>
          <div className='flex justify-center items-center gap-8 self-stretch'>
            <div className='grow h-px relative bg-white' />
            <h2 className='font-bely uppercase text-3xl tracking-widest text-white text-center'>Keynote Speaker</h2>
            <div className='grow h-px relative bg-white' />
          </div>
          <Link
            className='w-full flex-col justify-start items-start inline-flex rounded overflow-clip group'
            href='/keynote'
          >
            <div className='self-stretch h-[350px] justify-start items-start inline-flex overflow-clip'>
              <div className='grow shrink self-stretch relative group-hover:scale-105 transition-all duration-500'>
                <Image
                  className='w-[300px] object-cover'
                  src='/images/Kaviya_1.jpg'
                  fill={true}
                  alt='Kaviya Ravi sitting on a chair with a yellow background'
                />
              </div>
              <div className='grow shrink basis-0 self-stretch relative hidden sm:block group-hover:scale-105 transition-all duration-500'>
                <Image
                  className='object-cover'
                  src='/images/Kaviya_2.jpeg'
                  fill={true}
                  alt='art piece by Kaviya Ravi'
                />
              </div>
            </div>
            <div className='flex flex-col justify-between w-full gap-2 p-4 backdrop-blur-[4px] bg-black/[6%] border border-1 border-black/[8%] group-hover:bg-black/10 transition-all duration-300'>
              <h3 className='text-white font-[800] text-3xl uppercase tracking-widest'>Kaviya Ravi</h3>
              <p className='text-white font-[400] text-sm md:text-base uppercase tracking-widest'>
                Artist, maker, designer, biochemist & small business owner
              </p>
            </div>
          </Link>
        </div>
        <div className='flex flex-col gap-8 w-full'>
          <div className='flex justify-center items-center gap-8 self-stretch'>
            <div className='grow h-px relative bg-white' />
            <h2 className='font-bely uppercase text-3xl tracking-widest text-white text-center'>Judges</h2>
            <div className='grow h-px relative bg-white' />
          </div>
          <div className='flex gap-4 w-full flex-col md:flex-row'>
            <JudgesCard
              src='/judges/shivani-parasnis.jpg'
              alt='Shivani Parasnis Headshot'
              name='Shivani Parasnis'
              description='typographer, graphic designer'
              href='/shivani-parasnis'
              position='top'
            />
            <JudgesCard
              src='/judges/george-garrastegui.jpg'
              alt='Geoge Garrastregui Headshot'
              name='George Garrastegui, Jr.'
              description='educator, designer'
              href='/george-garrastregui'
              position='top'
            />
            <JudgesCard
              src='/judges/jeff-minnichbach.jpg'
              alt='Jeff Minnichbach Headshot'
              name='Jeff Minnichbach'
              description='graphic designer'
              href='/jeff-minnichbach'
              position='top'
            />
          </div>
        </div>
        <div className='flex flex-col gap-8 w-full'>
          <div className='flex justify-center items-center gap-8 self-stretch'>
            <div className='grow h-px relative bg-white' />
            <h2 className='font-bely uppercase text-3xl tracking-widest text-white text-center'>2023 Winners</h2>
            <div className='grow h-px relative bg-white' />
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {winnersData.slice(0, isMobile ? 8 : 9).map((item, index) => (
              <WinnerCard key={index} {...item} />
            ))}
          </div>
          <Collapsible className='flex flex-col gap-8 items-center relative' open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className='flex flex-col gap-4 sticky top-16 md:top-32 z-10 left-auto right-auto'>
              {isOpen ? (
                <div className='group flex'>
                  <div className='flex gap-3 px-6 py-4 justify-center items-end z-10'>
                    <p className='text-white font-[800] text-base leading-none uppercase tracking-widest text-center'>
                      Show Less
                    </p>
                    <MinusIcon className='w-5 h-5 text-white' />
                  </div>
                  <div className='absolute top-0 right-0 bottom-0 left-0 rounded-full bg-black/[6%] shadow-lg shadow-[#5E3687]/[20%] border border-1 border-black/[8%] group-hover:bg-black/10 transition-all duration-300'></div>
                  <div className='absolute top-0 right-0 bottom-0 left-0 rounded-full -z-10 bg-[#9F6DB7]/[70%] backdrop-blur-[8px]'></div>
                </div>
              ) : (
                <div className='group flex relative'>
                  <div className='flex gap-3 px-6 py-4 justify-center items-end z-10'>
                    <p className='text-white font-[800] text-base leading-none uppercase tracking-widest text-center'>
                      Show More
                    </p>
                    <PlusIcon className='w-5 h-5 text-white' />
                  </div>
                  <div className='absolute top-0 right-0 bottom-0 left-0 rounded-full backdrop-blur-[4px] bg-black/[6%] border border-1 border-black/[8%] group-hover:bg-black/10 transition-all duration-300'></div>
                </div>
              )}
            </CollapsibleTrigger>
            <CollapsibleContent className='w-full'>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {winnersData.slice(isMobile ? 8 : 9).map((item, index) => (
                  <WinnerCard key={index} {...item} />
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <div className='flex flex-col gap-8 w-full'>
          <div className='flex justify-center items-center gap-8 self-stretch'>
            <div className='w-full h-px relative bg-white' />
            <h2 className='font-bely uppercase text-3xl tracking-widest text-white'>FAQs</h2>
            <div className='w-full h-px relative bg-white' />
          </div>
          <div className='flex w-full'>
            <Accordion type='single' collapsible className='w-full flex flex-col gap-2 '>
              <AccordionItem value='item-1'>
                <AccordionTrigger>Who can submit?</AccordionTrigger>
                <AccordionContent>
                  Professional and student designers from all over the region are eligible to submit their work. First,
                  an AIGA account is required.{' '}
                  <a href='https://my.aiga.org/account/login.aspx' className='underline font-semibold text-[#ffa6f2]'>
                    Creating an AIGA account is free and easy.
                  </a>{' '}
                  Joining AIGA is an option during the two-step process, simply continue when prompted to become a
                  member. Then log out to reset your cart. To opt-out of the join process once you&apos;ve created your
                  account, close the tab and return to the competition page to login and continue with the credentials
                  you&apos;ve created.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger>What can I submit?</AccordionTrigger>
                <AccordionContent>
                  <ul className='list-disc pl-4 flex flex-col gap-3'>
                    <li>
                      <strong>Branding and Logos:</strong>
                      <br />
                      Includes identity systems, business cards, stationary, logo design and more
                    </li>
                    <li>
                      <strong>Environmental Design, Wayfinding, AR, VR, Murals:</strong>
                      <br />
                      Includes signage, exhibits, augmented reality in a space, virtual reality, and more
                    </li>
                    <li>
                      <strong>Illustration:</strong>
                      <br />
                      Includes Advertising, books, editorial, self-promotion, motion/animation, data visualization and
                      information graphics
                    </li>
                    <li>
                      <strong>Motion Graphics, Animation and Video:</strong>
                      <br />
                      Includes commercials, title sequences, icon animation, character animation, 3D effects, social
                      media motion graphics, and more
                    </li>
                    <li>
                      <strong>Non-profit work:</strong>
                      <br />
                      Includes any and all categories above, but will be judged solely for being a non-profit work in
                      consideration of budget and need of client.
                    </li>
                    <li>
                      <strong>Packaging:</strong>
                      <br />
                      Includes food packaging, industrial packaging, consumer goods packaging, point-of-sale
                      merchandise, health and beauty packaging and more.
                    </li>
                    <li>
                      <strong>Photography:</strong>
                      <br />
                      Includes photojournalism, editorial, portrait, fashion, street, sports, wildlife, aerial, product,
                      composite, commercial, etc.
                    </li>
                    <li>
                      <strong>Print:</strong>
                      <br />
                      Posters and flyers, stationary and business cards, merchandising, direct mailing campaigns, print
                      advertisements, currency and coin design, stamps and more.
                    </li>
                    <li>
                      <strong>Print - Editorial:</strong>
                      <br />
                      Newspaper or magazine, annual reports, brochures and catalogs, books, corporate publishing,
                      catalogues, journals
                    </li>
                    <li>
                      <strong>Social Good:</strong>
                      <br />
                      Includes any and all categories above, but will be judged solely for their focus on diversity,
                      equity, inclusion, public health, education, welfare, etc
                    </li>
                    <li>
                      <strong>Student Work:</strong>
                      <br />
                      Includes any and all categories above, but will be judged solely for being a student work in
                      consideration of hypothetical projects or being free of client constraints
                    </li>
                    <li>
                      <strong>Typography and Handlettering:</strong>
                      <br />
                      Includes any type of deliverable from other categories that showcases the use of handlettering or
                      focus on typographic treatment. Also includes the creation or refinement of a typeface.
                    </li>
                    <li>
                      <strong>UX Design (Product):</strong>
                      <br /> Includes user interface design for products, systems and services, virtual interfaces,
                      interaction design etc.
                    </li>
                    <li>
                      <strong>Web and Digital:</strong>
                      <br />
                      Includes website design and development, micro-sites, digital campaigns, social media campaigns
                      etc
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-3'>
                <AccordionTrigger>How can I submit?</AccordionTrigger>
                <AccordionContent>
                  Ready to submit your work?{' '}
                  <a
                    href='https://aiga-chapters.secure-platform.com/a/page/chapters/louisville'
                    className='underline font-semibold text-[#ffa6f2]'
                  >
                    Head to the submit page and follow the instructions.
                  </a>{' '}
                  You will be asked to create an AIGA account if you don&apos;t already have one.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-4'>
                <AccordionTrigger>Will there be food?</AccordionTrigger>
                <AccordionContent>
                  Yes, there will be food and drinks provided! The ticket includes one free drink.
                </AccordionContent>
              </AccordionItem>
              {/* <div className='h-[1px] w-full px-4 my-1'></div> */}
              <AccordionItem value='item-5'>
                <AccordionTrigger>I think I&apos;m a member, but I&apos;m getting the nonmember rate?</AccordionTrigger>
                <AccordionContent>
                  Please confirm your membership has not recently lapsed. You may be up for renewal and need to
                  reinstate your membership before you begin. Please login to{' '}
                  <a href='https://my.aiga.org/become-a-member' className='underline font-semibold text-[#ffa6f2]'>
                    my.aiga.org
                  </a>{' '}
                  to confirm your member status. Or search the{' '}
                  <a href='https://my.aiga.org/individual-directory' className='underline font-semibold text-[#ffa6f2]'>
                    Member Directory
                  </a>{' '}
                  to confirm if a colleague has an active membership (Note: names of members in good standing will only
                  appear if they have selected the directory option). Please contact{' '}
                  <a href='mailto:membership@aiga.org' className='underline font-semibold text-[#ffa6f2]'>
                    membership@aiga.org
                  </a>{' '}
                  if you have questions about your membership status.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-6'>
                <AccordionTrigger>Why am I being charged nonmember fees?</AccordionTrigger>
                <AccordionContent>
                  The competition system looks at your member type when you login to determine the correct fees. If you
                  decide to join or renew in mid-cart, you must log out to reset the fees. See below for more
                  information.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-7'>
                <AccordionTrigger>
                  The member fee is not showing after I join/renew my membership. How do I update the entry fees in my
                  cart?
                </AccordionTrigger>
                <AccordionContent>
                  First, save your work! To update your cart, please log out of the{' '}
                  <a
                    href='https://aiga-chapters.secure-platform.com/a/page/chapters/louisville'
                    className='underline font-semibold text-[#ffa6f2]'
                  >
                    competition system
                  </a>{' '}
                  and also log out of{' '}
                  <a href='https://my.aiga.org/' className='underline font-semibold text-[#ffa6f2]'>
                    my.aiga.org
                  </a>
                  . This will reset your account. Then,{' '}
                  <a
                    href='https://aiga-chapters.secure-platform.com/a/page/chapters/louisville'
                    className='underline font-semibold text-[#ffa6f2]'
                  >
                    login again
                  </a>{' '}
                  to refresh your member settings and your cart. If this does not refresh your cart, please contact{' '}
                  <a href='mailto:membership@aiga.org' className='underline font-semibold text-[#ffa6f2]'>
                    membership@aiga.org
                  </a>
                  . It is possible that you may have a duplicate account, and we will need to merge them in order for
                  you to continue.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-8'>
                <AccordionTrigger>Who do I contact about college and high school discounts?</AccordionTrigger>
                <AccordionContent>
                  All student discounts have been issued through known educators in the surrounding areas. These
                  parameters include Kentucky and southern Indiana colleges, and specifically Louisville high schools.
                  If you are included in these areas but have not received these codes, please contact our Programming
                  Director,{' '}
                  <a
                    href='mailto:shannon@louisville.aiga.org?subject=Education%20Discount%2C%20the%20100&body=Hi%20Shannon%2C%0A%0AI%20identify%20as%20a%20%5BCollege%20or%20High%20school%5D%20student%20and%20would%20like%20to%20receive%20a%20discount%20code%20for%20my%20entry%20to%20the%20100%20Show.%20I%20attend%20%5BName%20of%20School%5D.%20Please%20refer%20to%20my%20instructor%2C%20%5BName%20of%20instructor%5D%2C%20for%20communication%20and%20programming.%0A%0AThank%20you%2C%0A%5BName%5D'
                    className='underline font-semibold text-[#ffa6f2]'
                  >
                    Shannon McCarthy
                  </a>
                  .
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <Background />
      <Footer />
    </div>
  )
}
