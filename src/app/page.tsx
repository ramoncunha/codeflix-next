export default function Home() {
  return (
    <div className='relative h-full lg:h-[140vh]'>
      <main className='relative pb-24 pl-4 lg:space-y-24 lg:pl-16'>
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
          <div className='absolute flex flex-col left-0 top-0 -z-10 h-[95vh] w-screen'>
            <Image src=''/>
          </div>

          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            The Whitcher
          </h1>

          <p className='text-shadow-md max-w-ws text-xs md:max-w-lg md:text-lg lg:max-w-2xl'>
            Testando
          </p>
        </div>

        <div className='flex space-x-3'>
          <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
            Play
          </button>
          <button className='md:text-xl; flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5'>
            More Info
          </button>
        </div>
        
      </main>
    </div>
  )
}
