import { AiOutlineInfoCircle } from 'react-icons/ai'

import PlayButton from '@/components/PlayButton'
import useBillboard from '@/hooks/useBillboard'

const Billboard = () => {
  const { data } = useBillboard()

  return (
    <div className='relative h-[56.25vw]'>
      <video
        className='h-[56-.25vw] w-full object-cover brightness-[60%]'
        autoPlay
        muted
        loop
        poster={data?.thumbnailUrl}
        src={data?.videoUrl}></video>
      <div className='absolute top-[30%] ml-4 md:top-[40%] md:ml-16'>
        <p className='text-1xl lg: h-full w-[50%] text-6xl font-bold text-white drop-shadow-xl md:text-5xl'>
          {data?.title}
        </p>
        <p className='mt-3 w-[90%] text-[8px] text-white drop-shadow-xl md:mt-8 md:w-[80%] md:text-lg lg:w-[50%]'>
          {data?.description}
        </p>
        <div className='mt-3 flex items-center gap-3 md:mt-4'>
          <PlayButton movieId={data?.id || ''} />
          <button className='flex w-auto items-center rounded-md bg-white bg-opacity-30 py-1 px-2 text-xs font-semibold text-white transition hover:bg-opacity-20 md:py-2 md:px-4 lg:text-lg'>
            <AiOutlineInfoCircle className='mr-1 ' />
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Billboard
