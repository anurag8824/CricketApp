import React from 'react'
import FbConnect from '../components/FbConnect'
import { Link } from 'react-router-dom'

const CricketTeams = () => {
    return (
        <div className='md:mx-20 mx-4 h-full'>

            <div className='flex px-1  py-10 justify-between'>
                <p className='text-2xl  font-medium'>CricketTeams</p>
                <input className=' bg-white rounded-full pr-6 pl-3 py-3 text-sm' placeholder='Search...' />
            </div>

            <div className='flex gap-x-8'>
                <div className='border mb-4 bg-white rounded-xl md:w-3/4 w-full h-full'>

                    <div className='grid gap-y-2.5 grid-flow-row p-8'> 

                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="ind.png"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <Link to="/cricket-team-detail/home" class="block hover:underline font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                India
                            </Link>
                        </div>

                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="wi.png"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <Link to="#" class="block hover:underline font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                West Indies
                            </Link>
                        </div>


                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="nz.png"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <Link to="#" class="block hover:underline font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                New Zealand
                            </Link>
                        </div>


                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="usa.png"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <Link to="#" class="block hover:underline font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                United States Of America
                            </Link>
                        </div>


                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="usa.png"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <Link to="#" class="block hover:underline font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                South Africa
                            </Link>
                        </div>



                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="pak.png"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <Link to="#" class="block hover:underline font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                Pakistan
                            </Link>
                        </div>


                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="nz.png"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <Link to="#" class="block hover:underline font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                New Zealand
                            </Link>
                        </div>


                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="usa.png"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <Link to="#" class="block hover:underline font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                United States Of America
                            </Link>
                        </div>


                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="usa.png"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <Link to="#" class="block hover:underline font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                South Africa
                            </Link>
                        </div>



                        <div class="flex gap-4 border-b pb-2.5 items-center">
                            <img
                                src="pak.png"
                                alt="Tania Andrew"
                                class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                            />

                            <Link to="#" class="block hover:underline font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                Pakistan
                            </Link>
                        </div>

                    </div>





                </div>

            <FbConnect />


            </div>


        </div>
    )
}

export default CricketTeams