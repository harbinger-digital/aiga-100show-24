'use client'

import Background from './components/background/background'
import Hero from './components/hero/hero'
import Spinner from './components/spinner/spinner'
import Navbar from './components/nav/navbar'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className='font-geist px-16'>
      <Navbar />
      <Spinner />
      <motion.div
        animate={{ opacity: [0.2, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
      >
        <div className='bg-[#F60011] rounded-full blur-[200px] h-[904px] w-[904px] fixed bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 mix-blend-overlay opacity-40 -z-30'></div>
      </motion.div>
      <motion.div
        animate={{ opacity: [0.2, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
      >
        <div className='bg-[#F60011] rounded-full blur-[200px] h-[904px] w-[904px] fixed top-0 right-0 transform translate-x-1/2 -translate-y-1/2 mix-blend-overlay opacity-40 -z-30'></div>
      </motion.div>
      <div className='flex flex-col gap-32 lg:gap-48 mx-auto w-full max-w-3xl items-center py-[30vh] h-md:py-[34vh] h-lg:py-[30vh] transition-all duration-500'>
        <Hero />
        <div className='flex flex-col gap-6 w-full'>
          <h2 className='font-bely uppercase text-3xl tracking-widest text-white'>About The Show</h2>
          <p className='font-[350] text-lg leading-7 text-white'>
            The 100 Show recognizes the best creative work from designers within Kentucky and Southern Indiana.
            Agencies, freelancers, and in-house teams are celebrated for their efforts in a range of design disciplines
            including advertising, branding, packaging, environmental design, interactive design, service design, and
            more. The awards culminate in the top 100 works – showcasing the Best of Category winners and a single work
            that is Best of Show.
          </p>
        </div>
        <div className='flex flex-col gap-6 w-full'>
          <h2 className='font-bely uppercase text-3xl tracking-widest text-white'>FAQs</h2>
          <div className='flex w-full'>
            <Accordion type='single' collapsible className='w-full flex flex-col gap-2 '>
              <AccordionItem value='item-1'>
                <AccordionTrigger>Who can submit?</AccordionTrigger>
                <AccordionContent>
                  The 100 Show is a competition that brings designers from all over our region to submit their best work
                  in a cross-disciplinary competition. We call for a wide net of entries including advertising,
                  branding, packaging, environmental design, interactive design, service design, and more.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger>What can I submit?</AccordionTrigger>
                <AccordionContent>
                  The 100 Show is a competition that brings designers from all over our region to submit their best work
                  in a cross-disciplinary competition. We call for a wide net of entries including advertising,
                  branding, packaging, environmental design, interactive design, service design, and more.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-3'>
                <AccordionTrigger>How can I submit?</AccordionTrigger>
                <AccordionContent>
                  The 100 Show is a competition that brings designers from all over our region to submit their best work
                  in a cross-disciplinary competition. We call for a wide net of entries including advertising,
                  branding, packaging, environmental design, interactive design, service design, and more.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-4'>
                <AccordionTrigger>Will There be food?</AccordionTrigger>
                <AccordionContent>
                  The 100 Show is a competition that brings designers from all over our region to submit their best work
                  in a cross-disciplinary competition. We call for a wide net of entries including advertising,
                  branding, packaging, environmental design, interactive design, service design, and more.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <Background />
    </div>
  )
}
