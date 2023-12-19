import Head from 'next/head'
import Card from '@/components/Card'

export default function Home()
{
  return (
    <>
      <Head>
        <title>GameStore | Home</title>
      </Head>
      <main className="font-body mt-20">
        <div className='grid grid-cols-6'>
          <div className="col">
            <h1>Hello</h1>
          </div>
          <div className='bg-white col-start-2 col-end-7'>
            <div className='mx-16'>
              <Card />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
