import { NextPageContext } from 'next'
import Head from 'next/head'
import { getSession } from 'next-auth/react'

import Billboard from '@/components/Billboard'
import InfoModal from '@/components/InfoModal'
import MovieList from '@/components/MovieList'
import Navbar from '@/components/Navbar'
import useFavorites from '@/hooks/useFavorites'
import useInfoModal from '@/hooks/useInfoModal'
import useMovieList from '@/hooks/useMovieList'

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

export default function Home() {
  const { data: movies = [] } = useMovieList()
  const { data: favouriteMovies = [] } = useFavorites()
  const { isOpen, closeModal } = useInfoModal()

  return (
    <>
      <Head>
        <title>Netflix Clone App</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <InfoModal visible={isOpen} onClose={closeModal} />
        <Navbar />
        <Billboard />
        <MovieList title='Trending Now' data={movies} />
        <MovieList title='My List' data={favouriteMovies} />
      </main>
    </>
  )
}
