export default function Background() {
  return (
    <div
      className='bg-scroll bg-repeat h-[130dvh] mix-blend-overlay opacity-50 fixed left-0 right-0 bottom-[-150px] -z-40'
      style={{
        backgroundImage: 'url(/BackgroundTexture.png)',
        backgroundSize: '60%',
        backgroundPosition: 'top',
        backgroundRepeat: 'repeat',
      }}
    ></div>
  )
}
