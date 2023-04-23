import axios from 'axios'
import React, { FC, useCallback, useMemo } from 'react'
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai'

import useCurrentUser from '@/hooks/useCurrentUser'
import useFavorites from '@/hooks/useFavorites'

interface FavoriteButtonProps {
  movieId: string
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ movieId }) => {
  const { mutate: mutateFavourites } = useFavorites()
  const { data: currentUser, mutate } = useCurrentUser()

  const isFavorite = useMemo(
    () => currentUser?.favoriteIds?.includes(movieId),
    [currentUser, movieId]
  )

  const toggleFavorite = useCallback(async () => {
    let response

    if (isFavorite) {
      response = await axios.delete(`/api/favorite`, {
        data: { movieId },
      })
    } else {
      response = await axios.post(`/api/favorite`, {
        movieId,
      })
    }

    const updatedFavoriteIds = response.data.favoriteIds

    mutate({
      ...currentUser,
      favoriteIds: updatedFavoriteIds,
    })
    mutateFavourites()
  }, [isFavorite, movieId, currentUser, mutate, mutateFavourites])

  const Icon = isFavorite ? AiOutlineCheck : AiOutlinePlus

  return (
    <div
      onClick={toggleFavorite}
      className='
        group-item
        flex
        h-6
        w-6
        cursor-pointer
        items-center
        justify-center
        rounded-full
        border-2
        border-white
        transition
        hover:border-neutral-300
        lg:h-10
        lg:w-10
  '>
      <Icon className='text-white' size={25} />
    </div>
  )
}

export default FavoriteButton
