import React from 'react'

const Card = () =>
{
    const cardDetails = [
        {
            Name: "Street Fighter II",
            Genre: "Fighting",
            Price: 100,
            Imageuri: "https://placehold.co/100"
        },
        {
            Name: "Street Fighter II",
            Genre: "Fighting",
            Price: 100,
            Imageuri: "https://placehold.co/100"
        },
        {
            Name: "Street Fighter II",
            Genre: "Fighting",
            Price: 100,
            Imageuri: "https://placehold.co/100"
        },
        {
            Name: "Street Fighter II",
            Genre: "Fighting",
            Price: 100,
            Imageuri: "https://placehold.co/100"
        },



    ]
    return (
        <div className='grid grid-cols-4'>
            {cardDetails.map((cardDetail, id) =>
            {
                return (
                    <div className='py-20' key={id}>
                        <div className='border border-solid border-gray-300'>
                            <img src={cardDetail.Imageuri} height={200} width={200} alt="Game Image" className='hover:cursor-pointer mx-auto mt-12' />
                            <h1 className='mt-4 font-bold text-[#333] hover:cursor-pointer ml-7 hover:underline'>{cardDetail.Name}</h1>
                            <p className='text-sm font-semibold ml-7'>{cardDetail.Genre}</p>
                            <hr className='mt-2 w-48 mx-auto' />
                            <div className='bg-[#2d4b81] flex text-white mt-6 mb-12 w-52 mx-auto'>
                                <p className='font-semibold ml-2 hover:cursor-pointer hover:underline'>NEW</p>
                                <p className='ml-auto mr-2 hover:cursor-pointer hover:underline'>${cardDetail.Price}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card