import { Movie } from '@prisma/client'
import useSWR from 'swr'

import fetcher from '@/lib/fetcher'

const useMovie = (id?: string) => {
  const { data, isLoading, error } = useSWR<Movie>(id ? `/api/movies/${id}` : null, fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
    revalidateOnReconnect: false,
  })

  return { data, isLoading, error }
}

export default useMovie
