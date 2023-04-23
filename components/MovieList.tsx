import { isEmpty } from 'lodash'
import { FC } from 'react'

import { Movie } from '@/types/movie'

import MovieCard from './MovieCard'

interface MovieListProps {
  data: Movie[]
  title: string
}

const MovieList: FC<MovieListProps> = ({ data, title }) => {
  if (isEmpty(data)) return null

  return (
    <div className='mt-4 space-y-8 px-4 md:px-12'>
      <p className='text-md mb-4 font-semibold text-white md:text-xl lg:text-2xl'>{title}</p>
      <div className='grid grid-cols-4 gap-2'>
        {data.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieList
