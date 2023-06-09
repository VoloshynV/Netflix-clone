import { useRouter } from 'next/router'
import { FC } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BsFillPlayFill } from 'react-icons/bs'

import FavoriteButton from '@/components/FavoriteButton'
import useInfoModal from '@/hooks/useInfoModal'
import { Movie } from '@/types/movie'

interface MovieCardProps {
  data: Movie
}

const MovieCard: FC<MovieCardProps> = ({ data: { thumbnailUrl, duration, genre, id } }) => {
  const { push } = useRouter()
  const { openModal } = useInfoModal()

  return (
    <div className='col-span group relative h-[12vw] bg-zinc-900'>
      <img
        className='duration h-[12vw] w-full cursor-pointer rounded-md object-cover shadow-xl transition delay-300 group-hover:opacity-90 sm:group-hover:opacity-0'
        src={thumbnailUrl}
        alt='thumbnail'
      />
      <div
        className='invisible absolute top-0 z-10 w-full scale-0 
      opacity-0 transition delay-300 duration-200 group-hover:-translate-y-[6vw] 
      group-hover:translate-x-[2vw] group-hover:scale-110 group-hover:opacity-100 sm:visible'>
        <img
          className='duration h-[12vw] w-full cursor-pointer rounded-t-md object-cover shadow-xl transition '
          src={thumbnailUrl}
          alt='thumbnail'
        />
        <div className='absolute z-10 w-full rounded-b-md bg-zinc-800 p-2 shadow-md transition lg:p-4'>
          <div className='flex items-center gap-3'>
            <div
              className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full
             bg-white transition hover:bg-neutral-300 lg:h-10 lg:w-10'
              onClick={() => push(`/watch/${id}`)}>
              <BsFillPlayFill size={30} />
            </div>
            <FavoriteButton movieId={id} />
            <div
              onClick={() => openModal(id)}
              className='group/item ml-auto flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-white transition hover:border-neutral-300 lg:h-10 lg:w-10'>
              <BiChevronDown className='text-white group-hover/item:text-neutral-300' size={25} />
            </div>
          </div>
          <p className='mt-4 font-semibold text-green-400'>
            New <span className='text-white'>2023</span>
          </p>
          <div className='mt-4 flex items-center gap-2'>
            <p className='text-[10px] text-white lg:text-sm'>{duration}</p>
          </div>
          <div className='mt-4 flex items-center gap-2'>
            <p className='text-[10px] text-white lg:text-sm'>{genre}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
