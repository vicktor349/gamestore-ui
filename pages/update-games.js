import Head from 'next/head';
import React from 'react'

const updateGames = () =>
{
    return (
        <>
            <Head>
                <title>GameStore | Update Games</title>
            </Head>
            <div className='mx-72 mt-20'>
                <form action="" className='text-[#434f5c]'>
                    <label htmlFor="name" className='font-semibold'>Game Name</label><br />
                    <input type="text" name="name" id="name"
                        required
                        className='w-full border border-gray-300 border-solid rounded-md p-1 mb-4 focus:outline-none'
                        placeholder='Enter game name'
                    />
                    <br />
                    <label htmlFor="genre" className='font-semibold'>Genre</label><br />
                    <input type="text" name="genre" id="genre" className='w-full border border-gray-300 border-solid rounded-md p-1 mb-4 focus:outline-none hover:cursor-not-allowed' disabled />
                    <br />
                    <label htmlFor="price" className='font-semibold'>Price</label><br />
                    <input type='number' name='price' id='price' className='w-full border border-gray-300 border-solid p-1 rounded-md mb-4 focus:outline-none' placeholder='Enter price of game' /><br />
                    <label htmlFor="releasedate" className='font-semibold'>Release Date</label><br />
                    <input type="date" className='w-full border border-gray-300 border-solid p-1 rounded-md mb-4 focus:outline-none' name='releasedate' id='releasedate' /><br />
                    <label htmlFor="url" className='font-semibold'>Image url</label><br />
                    <input type="url" name='url' id='url' className='w-full border border-gray-300 border-solid p-1 rounded-md mb-4 focus:outline-none' placeholder='Enter game display picture' /><br />
                    <button type="submit" className='bg-[#2d4b81] border border-solid border-[#2d4b81] rounded-sm text-white py-1 px-4 flex justify-center items-center'>Update</button>
                </form>
            </div>
        </>
    )
}

export default updateGames;