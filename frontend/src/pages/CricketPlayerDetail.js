import React, { useEffect, useState } from 'react'

import FbConnect from "../components/FbConnect"
import axios from "axios"

import { Link, useParams } from 'react-router-dom'



const PlayerDetail = () => {

    const [pdata, setPdata] = useState()

    const Pid = useParams().id;
    console.log(Pid, "player id")
    const backUrl = process.env.REACT_APP_BACK_URL;


    useEffect(() => {
        axios.post(`${backUrl}/api/v1/playerinfo`, { playerid: Pid })
            .then((res) => {
                console.log(res, "player infoooo")
                const pdata = res.data.response;
                setPdata(pdata);
            })
    }, [])



    // console.log(pdata, "opppppdatat")


    return (
        <div className='md:mx-20 mx-4 h-full'>

            <div className='flex px-1  py-10 justify-between'>
                <p className='text-2xl  font-medium'>Cricket Player Info</p>
            </div>

            <div className='flex gap-x-8'>
                <div className='border mb-4 bg-white rounded-xl md:w-3/4 w-full h-full'>

                    <div className=' md:p-8 p-2'>

                        <div class="md:flex w-full grid-cols-2 gap-x-12 pb-2.5 ">

                            {/* 1st portion  */}

                            <div className='md:w-1/4 w-full '>

                                <div className=' text-center'>
                                    <img
                                        src={pdata.player.logo_url ? pdata.player.logo_url : "/demoplayer.png"}

                                        alt="Tania Andrew"
                                        class="relative border inline-block h-full w-72 md:w-full rounded-full object-cover object-center"
                                    />

                                    <p className='text-lg font-medium'>{pdata.player.title}</p>
                                    <span>{pdata.player.nationality}</span>


                                </div>


                                <div className=' mt-6 mx-auto md:w-full'>
                                    <p className='text-lg font-medium'>Personal Information</p>

                                    <div className='mx-4 '>
                                        <p className='border-b w-full py-4'><strong>Born:</strong> {pdata.player.birthdate}</p>
                                        <p className='border-b py-4'><strong>Role:</strong> {pdata.player.playing_role}</p>
                                        <p className='border-b py-4'><strong>Batting Style:</strong> {pdata.player.batting_style}</p>
                                        <p className=' py-4'><strong>Bowling Style:</strong> {pdata.player.bowling_style}</p>


                                    </div>



                                </div>

                                <div className=' mt-6 w-full'>
                                    <p className='text-lg font-medium'>Cricket Rankings</p>

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
                            <div className='md:w-1/3  w-full'>

                                <div className='md:block hidden'>
                                    <p className='text-3xl font-medium'>{pdata.player.title}</p>
                                </div>

                                <div className=' mt-6'>
                                    <p className='text-lg font-medium'>Batting Career Summary</p>
                                    <div className='mt-2 '>
                                        <div class="relative   overflow-x-auto ">
                                            <table class=" w-full text-left  text-gray-950 ">
                                                <thead class="bg-gray-200   ">
                                                    <tr>
                                                        <th scope="col" class=" font-normal py-3">
                                                            Type
                                                        </th>


                                                        <th scope="col" class=" font-normal  py-3">
                                                            M
                                                        </th>

                                                        <th scope="col" class=" font-normal  py-3">
                                                            INN
                                                        </th>

                                                        <th scope="col" class=" font-normal  py-3">
                                                            NO
                                                        </th>

                                                        <th scope="col" class=" font-normal  py-3">
                                                            Runs
                                                        </th>

                                                        <th scope="col" class=" font-normal  py-3">
                                                            HS
                                                        </th>



                                                        <th scope="col" class=" font-normal  py-3">
                                                            Avg
                                                        </th>

                                                        <th scope="col" class=" font-normal  py-3">
                                                            SR
                                                        </th>

                                                        <th scope="col" class=" font-normal  py-3">
                                                            100s
                                                        </th>

                                                        <th scope="col" class=" font-normal  py-3">
                                                            50s
                                                        </th>


                                                        <th scope="col" class=" font-normal  py-3">
                                                            4s
                                                        </th>

                                                        <th scope="col" class=" font-normal  py-3">
6s
                                                        </th>

                                                    </tr>
                                                </thead>

                                                <tbody>

                                                    <tr className="border-b w-full border-gray-200   dark:border-gray-700">
                                                        <td scope='row'>ODI</td>
                                                        <td scope='row' class="">{pdata.batting.odi.matches}</td>
                                                        <td scope='row' class="">{pdata.batting.odi.innings}</td>
                                                        <td scope='row' class="">{pdata.batting.odi.notout}</td>
                                                        <td scope='row' class="">{pdata.batting.odi.runs}</td>
                                                        <td scope='row' class="">{pdata.batting.odi.highest}</td>
                                                        <td scope='row' class="">{pdata.batting.odi.average}</td>
                                                        <td scope='row' class="">{pdata.batting.odi.strike}</td>
                                                        <td scope='row' class="">{pdata.batting.odi.run100}</td>
                                                        <td scope='row' class="">{pdata.batting.odi.run50}</td>
                                                        <td scope='row' class="">{pdata.batting.odi.run4}</td>
                                                        <td scope='row' class="">{pdata.batting.odi.run6}</td>


                                                    </tr>

                                                    <tr className="border-b w-full border-gray-200   dark:border-gray-700">
                                                        <td scope='row'>T20I</td>
                                                        <td scope='row' class="">{pdata.batting.t20i.matches}</td>
                                                        <td scope='row' class="">{pdata.batting.t20i.innings}</td>
                                                        <td scope='row' class="">{pdata.batting.t20i.notout}</td>
                                                        <td scope='row' class="">{pdata.batting.t20i.runs}</td>
                                                        <td scope='row' class="">{pdata.batting.t20i.highest}</td>
                                                        <td scope='row' class="">{pdata.batting.t20i.average}</td>
                                                        <td scope='row' class="">{pdata.batting.t20i.strike}</td>
                                                        <td scope='row' class="">{pdata.batting.t20i.run100}</td>
                                                        <td scope='row' class="">{pdata.batting.t20i.run50}</td>
                                                        <td scope='row' class="">{pdata.batting.t20i.run4}</td>
                                                        <td scope='row' class="">{pdata.batting.t20i.run6}</td>
                                                    </tr>




                                                    <tr className="border-b w-full border-gray-200   dark:border-gray-700">
                                                        <td scope='row'>TEST</td>
                                                        <td scope='row' class="">{pdata.batting.test.matches}</td>
                                                        <td scope='row' class="">{pdata.batting.test.innings}</td>
                                                        <td scope='row' class="">{pdata.batting.test.notout}</td>
                                                        <td scope='row' class="">{pdata.batting.test.runs}</td>
                                                        <td scope='row' class="">{pdata.batting.test.highest}</td>
                                                        <td scope='row' class="">{pdata.batting.test.average}</td>
                                                        <td scope='row' class="">{pdata.batting.test.strike}</td>
                                                        <td scope='row' class="">{pdata.batting.test.run100}</td>
                                                        <td scope='row' class="">{pdata.batting.test.run50}</td>
                                                        <td scope='row' class="">{pdata.batting.test.run4}</td>
                                                        <td scope='row' class="">{pdata.batting.test.run6}</td>
                                                    </tr>

                                                    







                                                </tbody>
                                            </table>
                                        </div>


                                    </div>


                                </div>


                                <div className=' mt-6'>
                                    <p className='text-lg font-medium'>Bowling Career Summary</p>
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
                                    <p className='text-lg font-medium'>Career Information</p>

                                    <div className='mx-4 '>
                                        <p className='border-b w-full py-4'><strong>Test debut:</strong>  vs Australia at Vidarbha Cricket Association Stadium</p>
                                        <p className='border-b py-4'><strong>ODI debut:</strong> vs Sri Lanka at R.Premadasa Stadium</p>
                                        <p className='border-b py-4'><strong>T20 debut: </strong> vs England at Narendra Modi Stadium</p>
                                        <p className=' py-4'><strong>IPL debut:</strong>  vs Pune Warriors at Wankhede Stadium</p>


                                    </div>



                                </div>

                                <div className=' mt-6 w-full'>
                                    <p className='text-lg font-medium'>About Suryakumar Yadav</p>

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