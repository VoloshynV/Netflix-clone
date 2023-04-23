import { useRouter } from 'next/router'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import useMovie from '@/hooks/useMovie'

const Watch = () => {
  const { query, push } = useRouter()
  const { movieId } = query

  const { data } = useMovie(movieId as string)

  return (
    <div className='h-screen w-screen bg-black'>
      <nav className='fixed z-10 flex w-full items-center gap-8 bg-black bg-opacity-70 p-4'>
        <AiOutlineArrowLeft
          className='cursor-pointer text-white'
          size={40}
          onClick={() => push('/')}
        />
        <p className='text-1xl font-bold text-white md:text-3xl'>
          <span>Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video src={data?.videoUrl} className='h-full w-full' autoPlay controls />
    </div>
  )
}
export default Watch
