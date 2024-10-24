import React from 'react'

import FbConnect from "../components/FbConnect"

import { Link } from 'react-router-dom'

const CricketPlayers = () => {
    return (
        <div className='md:mx-20 mx-4 h-full'>

            <div className='flex px-1  py-10 justify-between'>
                <h1 className='text-2xl  font-medium'>Cricket Players</h1>
                <input className=' bg-white rounded-full pr-6 pl-3 py-3 text-sm' placeholder='Search...' />
            </div>

            <div className='flex gap-x-8'>
                <div className='border mb-4 bg-white rounded-xl md:w-3/4 w-full h-full'>

                    <div className='grid gap-y-2.5 grid-flow-row p-8'>
                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="suryakumar.png"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <h1 class=" grid font-sans text-base font-normal leading-relaxed tracking-normal  antialiased">
                                <Link to="/cricket-player-detail" className='cursor-pointer hover:underline'>Suryakumar Yadav</Link>
                                <span>India</span>
                            </h1>
                        </div>

                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="babarazam.webp"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <h1 class=" grid font-sans text-base font-normal leading-relaxed tracking-normal  antialiased">
                                <Link to="#" className='hover:underline'>Babar Azam</Link>
                                <span>Pakistan</span>

                            </h1>
                        </div>


                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="philipsalt.webp"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <h1 class=" grid font-sans text-base font-normal leading-relaxed tracking-normal  antialiased">
                                <Link to="#" className='hover:underline'>Philip Salt</Link>
                                <span>England</span>

                            </h1>
                        </div>


                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="viratkohli.png"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <h1 class=" grid font-sans text-base font-normal leading-relaxed tracking-normal  antialiased">
                                <Link to="#" className='hover:underline'>Virat Kohli</Link>
                                <span>India</span>

                            </h1>
                        </div>


                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="suryakumar.png"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <h1 class=" grid font-sans text-base font-normal leading-relaxed tracking-normal  antialiased">
                                <Link to="#" className='hover:underline'>Suryakumar Yadav</Link>
                                <span>India</span>
                            </h1>
                        </div>



                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="glenn.webp"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <h1 class=" grid font-sans text-base font-normal leading-relaxed tracking-normal  antialiased">
                                <Link to="#" className='hover:underline'>Glenn Philip</Link>
                                <span>New Zealand</span>

                            </h1>
                        </div>


                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="philipsalt.webp"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <h1 class=" grid font-sans text-base font-normal leading-relaxed tracking-normal  antialiased">
                                <Link to="#" className='hover:underline'>Philip Salt</Link>
                                <span>England</span>

                            </h1>
                        </div>


                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="viratkohli.png"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <h1 class=" grid font-sans text-base font-normal leading-relaxed tracking-normal  antialiased">
                                <Link to="#" className='hover:underline'>Virat Kohli</Link>
                                <span>India</span>

                            </h1>
                        </div>


                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="suryakumar.png"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <h1 class=" grid font-sans text-base font-normal leading-relaxed tracking-normal  antialiased">
                                <Link to="#" className='hover:underline'>Suryakumar Yadav</Link>
                                <span>India</span>
                            </h1>
                        </div>



                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="glenn.webp"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <h1 class=" grid font-sans text-base font-normal leading-relaxed tracking-normal  antialiased">
                                <Link to="#" className='hover:underline'>Glenn Philip</Link>
                                <span>New Zealand</span>

                            </h1>
                        </div>

                    </div>





                </div>

                <FbConnect />


            </div>


        </div>
    )
}

export default CricketPlayers