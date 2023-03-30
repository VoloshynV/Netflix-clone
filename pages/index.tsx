import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix Clone App</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1 className='text-2xl'>Netflix Clone App</h1>
      </main>
    </>
  )
}
