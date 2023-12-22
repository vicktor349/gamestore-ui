import React, { useEffect, useState } from 'react'
import axios from 'axios'




const Card = () =>
{
    const [apiData, setApiData] = useState([])
    useEffect(() =>
    {
        fetch("http://localhost:5201/games")
            .then((res) =>
            {
                return res.json()
            }).then((data) =>
            {
                setApiData(data);
            })
    }, [])

    const cardDetails = [
        {
            Name: "Street Fighter 6",
            Genre: "Fighting",
            Price: 37.99,
            Imageuri: "https://cdn.game.net/image/upload/c_fill,dpr_1.0,f_auto,h_200,q_auto/v1/game_img/ml2/8/2/9/8/829829_gen_a.png"
        },
        {
            Name: "Final Fantasy XVI",
            Genre: "RolePlaying",
            Price: 34.98,
            Imageuri: "https://cdn.game.net/image/upload/c_fill,dpr_1.0,f_auto,h_200,q_auto/v1/game_img/ml2/7/4/9/6/749641_gen_a.png"
        },
        {
            Name: "FC 24",
            Genre: "Sports",
            Price: 69.98,
            Imageuri: "https://cdn.game.net/image/upload/c_fill,dpr_1.0,f_auto,h_200,q_auto/v1/game_img/ml2/P/S/5/-/PS5-SW-0000036_gen_a.png"
        },
        {
            Name: "Super Mario Bros. Wonder",
            Genre: "Arcade",
            Price: 44.99,
            Imageuri: "https://cdn.game.net/image/upload/c_fill,dpr_1.0,f_auto,h_200,q_auto/v1/game_img/ml2/8/3/3/3/833303_gen_a.png"
        },
        {
            Name: "Super Mario Bros. Wonder",
            Genre: "Arcade",
            Price: 44.99,
            Imageuri: "https://cdn.game.net/image/upload/c_fill,dpr_1.0,f_auto,h_200,q_auto/v1/game_img/ml2/8/3/3/3/833303_gen_a.png"
        },
        {
            Name: "Super Mario Bros. Wonder",
            Genre: "Arcade",
            Price: 44.99,
            Imageuri: "https://cdn.game.net/image/upload/c_fill,dpr_1.0,f_auto,h_200,q_auto/v1/game_img/ml2/8/3/3/3/833303_gen_a.png"
        },
        {
            Name: "Super Mario Bros. Wonder",
            Genre: "Arcade",
            Price: 44.99,
            Imageuri: "https://cdn.game.net/image/upload/c_fill,dpr_1.0,f_auto,h_200,q_auto/v1/game_img/ml2/8/3/3/3/833303_gen_a.png"
        },
        {
            Name: "Super Mario Bros. Wonder",
            Genre: "Arcade",
            Price: 44.99,
            Imageuri: "https://cdn.game.net/image/upload/c_fill,dpr_1.0,f_auto,h_200,q_auto/v1/game_img/ml2/8/3/3/3/833303_gen_a.png"
        },
        {
            Name: "Super Mario Bros. Wonder",
            Genre: "Arcade",
            Price: 44.99,
            Imageuri: "https://cdn.game.net/image/upload/c_fill,dpr_1.0,f_auto,h_200,q_auto/v1/game_img/ml2/8/3/3/3/833303_gen_a.png"
        },
        {
            Name: "Super Mario Bros. Wonder",
            Genre: "Arcade",
            Price: 44.99,
            Imageuri: "https://cdn.game.net/image/upload/c_fill,dpr_1.0,f_auto,h_200,q_auto/v1/game_img/ml2/8/3/3/3/833303_gen_a.png"
        },
        {
            Name: "Super Mario Bros. Wonder",
            Genre: "Arcade",
            Price: 44.99,
            Imageuri: "https://cdn.game.net/image/upload/c_fill,dpr_1.0,f_auto,h_200,q_auto/v1/game_img/ml2/8/3/3/3/833303_gen_a.png"
        },
        {
            Name: "Super Mario Bros. Wonder",
            Genre: "Arcade",
            Price: 44.99,
            Imageuri: "https://cdn.game.net/image/upload/c_fill,dpr_1.0,f_auto,h_200,q_auto/v1/game_img/ml2/8/3/3/3/833303_gen_a.png"
        },
    ]
    return (
        <>
            <div className='flex mb-5'>
                <h1 className='ml-auto mt-2 mr-2'>Sort by:</h1>
                <select name="" id="" className='py-2 px-4 hover:cursor-pointer'>
                    <option value="" defaultChecked className='hover:cursor-pointer'>Best Sellers</option>
                    <option value="">Name (A - Z)</option>
                    <option value="">Name (Z - A )</option>
                    <option value="">Price (Low to High) </option>
                    <option value="">Price (High to Low) </option>
                    <option value="">Release Date</option>
                </select>
            </div>
            <div className='grid grid-cols-4'>
                {apiData.map((cardDetail, id) =>
                {
                    return (
                        <div key={id}>
                            {console.log(cardDetail)}
                            <div className='border border-solid border-gray-300'>
                                <img src={cardDetail["imageUri"]} height={200} width={200} alt="Game Image" className='hover:cursor-pointer mx-auto mt-12' />
                                <h1 className='mt-4 font-bold text-[#333] hover:cursor-pointer ml-7 hover:underline'>{cardDetail["name"]}</h1>
                                <p className='text-sm font-semibold ml-7'>{cardDetail["genre"]}</p>
                                <hr className='mt-2 w-48 mx-auto' />
                                <div className='bg-[#2d4b81] flex text-white mt-6 mb-12 w-52 mx-auto'>
                                    <p className='font-semibold ml-2 hover:cursor-pointer hover:underline'>NEW</p>
                                    <p className='ml-auto mr-2 hover:cursor-pointer hover:underline'>${cardDetail["price"]}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Card