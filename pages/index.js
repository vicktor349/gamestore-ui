import Head from 'next/head'
import Card from '@/components/Card'
import SideNavbar from '@/components/SideNavbar'

export default function Home()
{
  return (
    <>
      <Head>
        <title>GameStore | Home</title>
      </Head>
      <main className="font-body mt-20">
        <div className='grid grid-cols-6'>
          <div className='bg-white w-48'>
            <div className='ml-2'>
              <SideNavbar />
            </div>
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
