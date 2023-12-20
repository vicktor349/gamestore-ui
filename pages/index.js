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
        <div className='grid grid-cols-8'>
          <div className='bg-white w-64 h-fit pb-12'>
            <SideNavbar />
          </div>
          <div className='bg-white col-start-3 col-end-9 h-fit'>
            <Card />
          </div>
        </div>
      </main>
    </>
  )
}
