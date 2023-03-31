import useCurrentUser from '@/hooks/useCurrentUser'
import { NextPageContext } from 'next'
import { getSession, signOut } from 'next-auth/react'
import Head from 'next/head'

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
  const { data: user } = useCurrentUser()

  return (
    <>
      <Head>
        <title>Netflix Clone App</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1 className='text-2xl text-white'>Netflix Clone App</h1>
        <p className='text-white'>Logged in as: {user?.name}</p>
        <button className='h-10 w-full bg-white' onClick={() => signOut()}>
          LogOut
        </button>
      </main>
    </>
  )
}
