import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'

interface PlayButtonProps {
  movieId?: string
}

const PlayButton: FC<PlayButtonProps> = ({ movieId }) => {
  const { push } = useRouter()

  return (
    <button
      onClick={() => push(`/watch/${movieId}`)}
      className='flex w-auto items-center rounded-md bg-white py-1 px-2 text-xs font-semibold transition hover:bg-neutral-300 md:py-2 md:px-4 lg:text-lg'>
      <BsFillPlayFill size={25} className='mr-1' />
      Play
    </button>
  )
}

export default PlayButton
