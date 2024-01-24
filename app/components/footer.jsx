import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='mx-auto w-full pb-8 max-w-3xl'>
      <div className='w-full'>
        <div className='md:flex'>
          <div className='mb-6 md:mb-0'>
            <Link href='https://louisville.aiga.org/'>
              <Image src='/Logo.png' alt='AIGA 100 Show Logo' width={120} height={32} className='h-8' />
            </Link>
          </div>
        </div>
        <hr className='my-4 border-gray-200 sm:mx-auto lg:my-6' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-white sm:text-center dark:text-gray-400'>
            © 2024{' '}
            <a href='https://louisville.aiga.org/' className='hover:underline'>
              AIGA LOU{' '}
            </a>
            All Rights Reserved.
          </span>
          <div className='flex mt-4 sm:justify-center sm:mt-0'>
            <a href='https://www.facebook.com/aigalou/' className='text-white hover:text-gray-90'>
              <svg
                className='w-4 h-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 8 19'
              >
                <path
                  fillRule='evenodd'
                  d='M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>Facebook page</span>
            </a>
            <a href='https://www.instagram.com/aigalou' className='text-white ms-5'>
              <svg
                className='w-4 h-4'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 448 512'
              >
                <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'></path>
              </svg>
              <span className='sr-only'>Instagram Page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
