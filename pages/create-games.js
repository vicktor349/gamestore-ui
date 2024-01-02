import Head from 'next/head';
import React, { useState } from 'react';
import axios from 'axios';
import { Alert, CircularProgress } from '@mui/material';

const createGames = () =>
{
    const [formData, setFormData] = useState({
        Name: "",
        Genre: "",
        Price: "",
        ReleaseDate: "",
        ImageUri: ""

    })
    const [successMsg, setSuccessMsg] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
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
        const details = { ...formData }
        try
        {
            setIsSubmitting(true)
            await axios({
                method: 'POST',
                url: 'http://localhost:5201/games',
                data: details,
                headers: { 'Content-Type': 'application/json' }
            }).then(response =>
            {
                if (response.status == "201")
                {
                    setSuccessMsg(true)
                    setIsSubmitting(false)
                    setTimeout(() =>
                    {
                        setSuccessMsg(false)
                    }, 4000)
                }
            })
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
                    <label htmlFor="Name" className='font-semibold'>Game Name</label><br />
                    <input type="text" name="Name" id="Name"
                        required
                        className='w-full border border-gray-300 border-solid rounded-md p-1 mb-4 focus:outline-none'
                        placeholder='Enter game name'
                        value={formData.Name}
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="Genre" className='font-semibold'>Genre</label><br />
                    <input type="text" name="Genre" id="Genre"
                        required
                        className='w-full border border-gray-300 border-solid rounded-md p-1 mb-4 focus:outline-none'
                        placeholder='Enter Game Genre name'
                        value={formData.Genre}
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="Price" className='font-semibold'>Price</label><br />
                    <input type='number' name='Price' id='Price' value={formData.Price} onChange={handleChange} className='w-full border border-gray-300 border-solid p-1 rounded-md mb-4 focus:outline-none' placeholder='Enter price of game' /><br />
                    <label htmlFor="ReleaseDate" className='font-semibold'>Release Date</label><br />
                    <input type="text" value={formData.ReleaseDate} name="ReleaseDate" id="ReleaseDate" placeholder='e.g 2011-11-18' onChange={handleChange} className='w-full border border-gray-300 border-solid p-1 rounded-md mb-4 focus:outline-none' /><br />
                    <label htmlFor="text" className='font-semibold'>Image url</label><br />
                    <input type="text" name='ImageUri' id='ImageUri' value={formData.ImageUri} onChange={handleChange} className='w-full border border-gray-300 border-solid p-1 rounded-md mb-4 focus:outline-none' placeholder='Enter game display picture' /><br />
                    <button className='bg-[#2d4b81] border border-solid border-[#2d4b81] rounded-sm text-white py-1 px-4 flex justify-center items-center hover:cursor-pointer'>
                        {
                            !isSubmitting ?
                                "Submit"
                                : <CircularProgress size={25} color="grey" className='hover:cursor-not-allowed' />
                        }
                    </button>
                </form>
                {
                    successMsg
                        ?
                        <Alert severity='success' className='bg-green-300 absolute bottom-4 right-4' >Game Successfully added</Alert>
                        :
                        ""
                }
            </div>
        </>
    )
}

export default createGames