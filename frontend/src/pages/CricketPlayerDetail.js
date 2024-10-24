import React from 'react'

import FbConnect from "../components/FbConnect"

import { Link } from 'react-router-dom'

const PlayerDetail = () => {
    return (
        <div className='md:mx-20 mx-4 h-full'>

            <div className='flex px-1  py-10 justify-between'>
                <h1 className='text-2xl  font-medium'>Cricket Player Info</h1>
            </div>

            <div className='flex gap-x-8'>
                <div className='border mb-4 bg-white rounded-xl md:w-3/4 w-full h-full'>

                    <div className=' md:p-8 p-2'>

                        <div class="md:flex w-full grid-cols-2 gap-x-12 pb-2.5 ">

                            {/* 1st portion  */}

                            <div className='md:w-1/4 w-full '>

                                <div className=' text-center'>
                                    <img
                                        src="suryakumar.png"
                                        alt="Tania Andrew"
                                        class="relative border inline-block h-full w-72 md:w-full rounded-full object-cover object-center"
                                    />

                                    <h1 className='text-lg font-medium'>Suryakumar yadav</h1>
                                    <span>India</span>


                                </div>


                                <div className=' mt-6 mx-auto md:w-full'>
                                    <h1 className='text-lg font-medium'>Personal Information</h1>

                                    <div className='mx-4 '>
                                        <p className='border-b w-full py-4'><strong>Born:</strong> Sep 14, 1990</p>
                                        <p className='border-b py-4'><strong>Role:</strong> Batter</p>
                                        <p className='border-b py-4'><strong>Batting Style:</strong> Right Handed Bat</p>
                                        <p className=' py-4'><strong>Bowling Style:</strong> Right-arm off-break</p>


                                    </div>



                                </div>

                                <div className=' mt-6 w-full'>
                                    <h1 className='text-lg font-medium'>Cricket Rankings</h1>

                                    <div className=' '>
                                        <div class="relative  overflow-x-auto ">
                                            <table class=" w-full text-left rtl:text-right text-gray-950 ">
                                                <thead class="bg-gray-200   ">
                                                    <tr>
                                                        <th scope="col" class="px-6 font-normal w-1/4 py-3">
                                                            Type
                                                        </th>


                                                        <th scope="col" class="px-6 font-normal w-1/4 py-3">
                                                            Test
                                                        </th>

                                                        <th scope="col" class="px-6 font-normal w-1/4 py-3">
                                                            ODI
                                                        </th>

                                                        <th scope="col" class="px-6 font-normal w-1/4 py-3">
                                                            T20
                                                        </th>

                                                    </tr>
                                                </thead>

                                                <tbody>

                                                    <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                                                        <td scope='row'>
                                                            All

                                                        </td>

                                                        <td scope='row' class="">
                                                            22
                                                        </td>

                                                        <td className=''>
                                                            44
                                                        </td>

                                                        <td className=''>
                                                            44
                                                        </td>



                                                    </tr>

                                                    {/* 2nd row  */}

                                                    <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                                                        <td scope='row'>
                                                            Batting

                                                        </td>

                                                        <td scope='row' class="">
                                                            44
                                                        </td>

                                                        <td className=''>
                                                            2
                                                        </td>

                                                        <td className=''>
                                                            2
                                                        </td>


                                                    </tr>


                                                    <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                                                        <td scope='row'>
                                                            Bowling

                                                        </td>

                                                        <td scope='row' class="">
                                                            44
                                                        </td>

                                                        <td className=''>
                                                            2
                                                        </td>

                                                        <td className=''>
                                                            2
                                                        </td>


                                                    </tr>






                                                </tbody>
                                            </table>
                                        </div>


                                    </div>



                                </div>

                            </div>


                            {/* 2nd protion  */}
                            <div className='md:w-1/2  w-full'>

                                <div className='md:block hidden'>
                                    <h1 className='text-3xl font-medium'>Suryakumar yadav</h1>
                                </div>

                                <div className=' mt-6'>
                                    <h1 className='text-lg font-medium'>Batting Career Summary</h1>
                                    <div className='mt-2 '>
                                        <div class="relative  overflow-x-auto ">
                                            <table class=" w-full text-left rtl:text-right text-gray-950 ">
                                                <thead class="bg-gray-200   ">
                                                    <tr>
                                                        <th scope="col" class="px-6 font-normal w-1/4 py-3">
                                                            Type
                                                        </th>


                                                        <th scope="col" class="px-6 font-normal w-1/4 py-3">
                                                            Test
                                                        </th>

                                                        <th scope="col" class="px-6 font-normal w-1/4 py-3">
                                                            ODI
                                                        </th>

                                                        <th scope="col" class="px-6 font-normal w-1/4 py-3">
                                                            T20
                                                        </th>

                                                    </tr>
                                                </thead>

                                                <tbody>

                                                    <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                                                        <td scope='row'>
                                                            All

                                                        </td>

                                                        <td scope='row' class="">
                                                            22
                                                        </td>

                                                        <td className=''>
                                                            44
                                                        </td>

                                                        <td className=''>
                                                            44
                                                        </td>



                                                    </tr>

                                                    {/* 2nd row  */}

                                                    <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                                                        <td scope='row'>
                                                            Batting

                                                        </td>

                                                        <td scope='row' class="">
                                                            44
                                                        </td>

                                                        <td className=''>
                                                            2
                                                        </td>

                                                        <td className=''>
                                                            2
                                                        </td>


                                                    </tr>


                                                    <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                                                        <td scope='row'>
                                                            Bowling

                                                        </td>

                                                        <td scope='row' class="">
                                                            44
                                                        </td>

                                                        <td className=''>
                                                            2
                                                        </td>

                                                        <td className=''>
                                                            2
                                                        </td>


                                                    </tr>






                                                </tbody>
                                            </table>
                                        </div>


                                    </div>


                                </div>


                                <div className=' mt-6'>
                                    <h1 className='text-lg font-medium'>Bowling Career Summary</h1>
                                    <div className='mt-2 '>
                                        <div class="relative  overflow-x-auto ">
                                            <table class=" w-full text-left rtl:text-right text-gray-950 ">
                                                <thead class="bg-gray-200   ">
                                                    <tr>
                                                        <th scope="col" class="px-6 font-normal w-1/4 py-3">
                                                            Type
                                                        </th>


                                                        <th scope="col" class="px-6 font-normal w-1/4 py-3">
                                                            Test
                                                        </th>

                                                        <th scope="col" class="px-6 font-normal w-1/4 py-3">
                                                            ODI
                                                        </th>

                                                        <th scope="col" class="px-6 font-normal w-1/4 py-3">
                                                            T20
                                                        </th>

                                                    </tr>
                                                </thead>

                                                <tbody>

                                                    <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                                                        <td scope='row'>
                                                            All

                                                        </td>

                                                        <td scope='row' class="">
                                                            22
                                                        </td>

                                                        <td className=''>
                                                            44
                                                        </td>

                                                        <td className=''>
                                                            44
                                                        </td>



                                                    </tr>

                                                    {/* 2nd row  */}

                                                    <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                                                        <td scope='row'>
                                                            Batting

                                                        </td>

                                                        <td scope='row' class="">
                                                            44
                                                        </td>

                                                        <td className=''>
                                                            2
                                                        </td>

                                                        <td className=''>
                                                            2
                                                        </td>


                                                    </tr>


                                                    <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                                                        <td scope='row'>
                                                            Bowling

                                                        </td>

                                                        <td scope='row' class="">
                                                            44
                                                        </td>

                                                        <td className=''>
                                                            2
                                                        </td>

                                                        <td className=''>
                                                            2
                                                        </td>


                                                    </tr>






                                                </tbody>
                                            </table>
                                        </div>


                                    </div>


                                </div>


                                <div className=' mt-6 w-full'>
                                    <h1 className='text-lg font-medium'>Career Information</h1>

                                    <div className='mx-4 '>
                                        <p className='border-b w-full py-4'><strong>Test debut:</strong>  vs Australia at Vidarbha Cricket Association Stadium</p>
                                        <p className='border-b py-4'><strong>ODI debut:</strong> vs Sri Lanka at R.Premadasa Stadium</p>
                                        <p className='border-b py-4'><strong>T20 debut: </strong> vs England at Narendra Modi Stadium</p>
                                        <p className=' py-4'><strong>IPL debut:</strong>  vs Pune Warriors at Wankhede Stadium</p>


                                    </div>



                                </div>

                                <div className=' mt-6 w-full'>
                                    <h1 className='text-lg font-medium'>About Suryakumar Yadav</h1>

                                    <div className=''>
                                        <p className='border-b w-full py-4'>   vs Australia at Vidarbha Cricket Association Stadium</p>





                                    </div>



                                </div>


                            </div>



                        </div>

















                    </div>





                </div>

                <FbConnect />


            </div>


        </div>
    )
}

export default PlayerDetail