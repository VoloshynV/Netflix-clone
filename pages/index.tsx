import Billboard from '@/components/Billboard'
import Navbar from '@/components/Navbar'
import { NextPageContext } from 'next'
import { getSession } from 'next-auth/react'
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
  return (
    <>
      <Head>
        <title>Netflix Clone App</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Navbar />
        <Billboard />
      </main>
    </>
  )
}
