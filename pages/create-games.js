import Head from 'next/head';
import React, { useState } from 'react';
import axios from 'axios';

const createGames = () =>
{
    const [formData, setFormData] = useState({
        name: "",
        genre: "",
        price: "",
        releasedate: "",
        url: ""

    })
    const handleChange = (e) =>
    {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };
    const handleSubmit = async (e) =>
    {
        e.preventDefault()
        const details = { ...formData }
        try
        {
            await axios({
                method: 'POST',
                url: 'http://localhost:5201/games',
                data: details,
                headers: { 'Content-Type': 'application/json' }
            })
            console.log(details)
        } catch (err)
        {
            console.log(err)
        }
    }
    return (
        <>
            <Head>
                <title>GameStore | Add Games</title>
            </Head>
            <div className='mx-72 mt-20'>
                <form onSubmit={handleSubmit} className='text-[#434f5c]'>
                    <label htmlFor="name" className='font-semibold'>Game Name</label><br />
                    <input type="text" name="name" id="name"
                        required
                        className='w-full border border-gray-300 border-solid rounded-md p-1 mb-4 focus:outline-none'
                        placeholder='Enter game name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="genre" className='font-semibold'>Genre</label><br />
                    <select name="genre" id="genre" value={formData.genre} onChange={handleChange} className='w-full border border-gray-300 border-solid p-1 rounded-md mb-4' required>
                        <option value="" >Select an option</option>
                        <option value="fighting">Fighting</option>
                        <option value="roleplaying">Role Playing</option>
                        <option value="sports">Sports</option>
                        <option value="arcade">Arcade</option>
                    </select><br />
                    <label htmlFor="price" className='font-semibold'>Price</label><br />
                    <input type='number' name='price' id='price' value={formData.price} onChange={handleChange} className='w-full border border-gray-300 border-solid p-1 rounded-md mb-4 focus:outline-none' placeholder='Enter price of game' /><br />
                    <label htmlFor="releasedate" className='font-semibold'>Release Date</label><br />
                    <input type="date" value={formData.releasedate} onChange={handleChange} className='w-full border border-gray-300 border-solid p-1 rounded-md mb-4 focus:outline-none' name='releasedate' id='releasedate' /><br />
                    <label htmlFor="url" className='font-semibold'>Image url</label><br />
                    <input type="url" name='url' id='url' value={formData.url} onChange={handleChange} className='w-full border border-gray-300 border-solid p-1 rounded-md mb-4 focus:outline-none' placeholder='Enter game display picture' /><br />
                    <button type="submit" className='bg-[#2d4b81] border border-solid border-[#2d4b81] rounded-sm text-white py-1 px-4 flex justify-center items-center'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default createGames