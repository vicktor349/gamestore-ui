import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import Slider from '@mui/material/Slider';

const SideNavbar = () =>
{
    function valuetext(value)
    {
        return `${value}°C`;
    }
    const [value, setValue] = React.useState([0, 100]);
    const [ratingValue, setRatingValue] = React.useState([1, 2, 3, 4]);

    const handleChange = (event, newValue) =>
    {
        setValue(newValue);
    };
    return (
        <div className='text-[#434f5c] mt-12'>
            <div className="mx-5">
                <h1 className='mb-6'>CATEGORY</h1>
                <div>
                    <div className='flex mb-4'>
                        <h1>PRICE($)</h1>
                        <h1 className='ml-auto hover:cursor-pointer select-none px-2 hover:bg-[rgba(168,195,244,0.99)]'>APPLY</h1>
                    </div>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                    />
                    <div className="flex">
                        <span className='border border-solid border-gray-300 px-8' >{value[0]}</span>
                        <span className='ml-5'>-</span>
                        <span className="ml-auto border border-solid border-gray-300 px-8">{value[1]}</span>
                    </div>
                </div>
                <div className='select-none mt-10'>
                    <h1 className='font-semibold text-[#434f5c] mb-2'>GENRE </h1>
                    {/* CHECKBOX 1 */}
                    <div className='mb-2'>
                        <input type="checkbox" name="fighting" id="fighting" className="hover:cursor-pointer" />
                        <label htmlFor="fighting" className='hover:cursor-pointer ml-2'>Fighting</label>
                    </div>
                    {/* CHECKBOX 2 */}
                    <div className='mb-2'>
                        <input type="checkbox" name="roleplaying" className="hover:cursor-pointer" id="roleplaying" />
                        <label htmlFor="roleplaying" className='hover:cursor-pointer ml-2'>Role Playing</label>
                    </div>
                    {/* CHECKBOX 3 */}
                    <div className='mb-2'>
                        <input type="checkbox" name="sports" id="sports" className="hover:cursor-pointer" />
                        <label htmlFor="sports" className='hover:cursor-pointer ml-2'>Sports</label>
                    </div>
                    {/* CHECKBOX 4 */}
                    <div className='mb-2'>
                        <input type="checkbox" name="arcade" id="arcade" className="hover:cursor-pointer" />
                        <label htmlFor="arcade" className='hover:cursor-pointer ml-2'>Arcade</label>
                    </div>
                </div>
                <div className='mt-6'>
                    <h1 className='mb-3'>PRODUCT RATING</h1>
                    {/* FOUR STARS RATING */}
                    <div className='flex mb-2 '>
                        <input type="radio" name="rating" value="fourstars" id="fourstars" className='hover:cursor-pointer' />
                        <label htmlFor="fourstars" className='flex hover:cursor-pointer'>
                            <Rating name="read-only" value={ratingValue[3]} readOnly className='items-cneter' />
                        </label>
                    </div>
                    {/* THREE STARS RATING */}
                    <div className='flex mt-3'>
                        <input type="radio" name='rating' value="threestars" id="threestars" className='hover:cursor-pointer' />
                        <label htmlFor="threestars" className='flex hover:cursor-pointer'>
                            <Rating name="read-only" className="items-center" value={ratingValue[2]} readOnly />
                        </label>
                    </div>
                    {/* TWO STARS RATING */}
                    <div className='flex mt-3'>
                        <input type="radio" name="rating" id="twostars" value="twostars" className='hover:cursor-pointer' />
                        <label htmlFor="twostars" className='flex hover:cursor-pointer'>
                            <Rating name="read-only" value={ratingValue[1]} readOnly className='items-center' />
                        </label>
                    </div>
                    {/* ONE STAR RATING */}
                    <div className='flex mt-3'>
                        <input type="radio" name="rating" id="onestar" value="onestar" className='hover:cursor-pointer' />
                        <label htmlFor="onestar" className='flex hover:cursor-pointer'>
                            <Rating name="read-only" value={ratingValue[0]} readOnly className='items-center' />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNavbar