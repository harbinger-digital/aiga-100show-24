export default function Background() {
  return (
    <div
      className='bg-scroll bg-repeat h-[100lvh] mix-blend-overlay opacity-50 fixed left-0 right-0 bottom-0 -z-40'
      style={{
        backgroundImage: 'url(/BackgroundTexture.png)',
        backgroundSize: '60%',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'repeat',
      }}
    ></div>
  )
}
