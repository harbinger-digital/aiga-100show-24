export default function Background() {
  return (
    <div
      className='bg-scroll bg-repeat h-[100dvh] mix-blend-overlay opacity-50 fixed left-0 right-0 top-0 -z-40'
      style={{
        backgroundImage: 'url(/BackgroundTexture.png)',
        backgroundSize: '60%',
        backgroundPosition: 'top',
        backgroundRepeat: 'repeat',
      }}
    ></div>
  )
}
