import { User } from '@prisma/client'
import useSwr from 'swr'

import fetcher from '@/lib/fetcher'

const useCurrentUser = () => {
  const { data, error, mutate, isLoading } = useSwr<User>('/api/current', fetcher)

  return {
    data,
    error,
    mutate,
    isLoading,
  }
}

export default useCurrentUser
