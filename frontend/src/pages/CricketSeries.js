import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FbConnect from '../components/FbConnect'
import SeriesFilter from '../components/SeriesFilter';
import YearFilter from '../components/YearFilter';

const CricketSeries = () => {
    const [activeTab, setActiveTab] = useState("current");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        
    };


    

    return (
        <div className='md:mx-20 mx-4 '>

            <div className='flex px-1  py-10 justify-between'>
                <h1 className='text-2xl  font-medium'>Seasons/Series</h1>
                {/* <input className=' bg-white rounded-full pr-6 pl-3 py-3 text-sm' placeholder='Search...' /> */}
            </div>

            <div className='flex gap-x-8'>
                <div className='border mb-4 bg-white rounded-xl md:w-3/4 w-full'>







                    <div className="w-full max-w-4xl mx-auto mt-8">
                        {/* Tab Buttons */}
                        <div className="relative flex px-3">
                            <button
                                className={`w-1/3 text-center py-2 text-lg font-normal ${activeTab === "current" ? "text-black" : "text-black"
                                    }`}
                                onClick={() => handleTabClick("current")}
                            >
                                Current & Future Series
                            </button>
                            <button
                                className={`w-1/3 text-center py-2 text-lg font-normal ${activeTab === "archive" ? "text-black" : "text-black"
                                    }`}
                                onClick={() => handleTabClick("archive")}
                            >
                                Series Archive
                            </button>

                            {/* Underline */}
                            <div
                                className={`absolute bottom-0   rounded-lg h-1 bg-blue-800 transition-transform duration-300 ease-in-out ${activeTab === "current" ? "translate-x-0" : "translate-x-full"
                                    }`}
                                style={{ width: "33.33%" }}
                            ></div>
                        </div>

                           {activeTab ==="current" ? <SeriesFilter /> : null } 
                           {activeTab ==="archive" ? <YearFilter /> : null } 

                       


                        {/* Content Sections */}
                        <div className="relative mt-6  px-3">
                            {activeTab === "current" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">

                                    {/* table starts  */}

                                    <div class="relative  overflow-x-auto ">
                                        <table class=" text-sm w-full text-left rtl:text-right text-white ">
                                            <thead class="text-lg font-medium bg-blue-950   ">
                                                <tr>
                                                    <th scope="col" class="px-6 w-96 py-3">
                                                        Month
                                                    </th>
                                                    <th scope="col" class="px-6 w-full py-3">
                                                        Series
                                                    </th>

                                                </tr>
                                            </thead>

                                            <tbody>

                                                <tr class="border-b border-gray-200 dark:border-gray-700">

                                                    <th scope="row" class=" text-blue-950 font-medium text-lg text-center align-text-top py-3 px-3 bg-gray-200 whitespace-nowrap">
                                                        December 2024
                                                    </th>




                                                    <td class="list-none py-2.5 text-blue-950">

                                                        <li class="px-6 py-1  grid">
                                                            <Link to="overview" className='font-medium text-base hover:underline'>India tour of England 2025</Link>
                                                            <span>21 Nov - 08 Jan 2026</span>
                                                        </li>


                                                        <li class="px-6 py-1  grid">
                                                            <Link to="#" className='font-medium text-base hover:underline'>India tour of England 2025</Link>
                                                            <span>21 Nov - 08 Jan 2026</span>
                                                        </li>








                                                    </td>


                                                </tr>


                                                <tr class="border-b border-gray-200 dark:border-gray-700">

                                                    <th scope="row" class=" text-blue-950 font-medium text-lg text-center align-text-top py-3 px-3 bg-gray-200 whitespace-nowrap">
                                                        December 2024
                                                    </th>




                                                    <td class="list-none py-2.5 text-blue-950">

                                                        <li class="px-6 py-1 grid">
                                                            <Link to="#" className='font-medium text-base hover:underline'>India tour of England 2025</Link>
                                                            <span>21 Nov - 08 Jan 2026</span>
                                                        </li>


                                                        <li class="px-6 py-1  grid">
                                                            <Link to="#" className='font-medium text-base hover:underline'>India tour of England 2025</Link>
                                                            <span>21 Nov - 08 Jan 2026</span>
                                                        </li>








                                                    </td>


                                                </tr>




                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            )}

                            {activeTab === "archive" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    {/* table starts  */}

                                    <div class="relative  overflow-x-auto ">
                                        <table class=" text-sm w-full text-left rtl:text-right text-white ">
                                            <thead class="text-lg font-medium bg-blue-950   ">
                                                <tr>
                                                    <th scope="col" class="px-6 w-96 py-3">
                                                        Month
                                                    </th>
                                                    <th scope="col" class="px-6 w-full py-3">
                                                        Series
                                                    </th>

                                                </tr>
                                            </thead>

                                            <tbody>

                                                <tr class="border-b border-gray-200 dark:border-gray-700">

                                                    <th scope="row" class=" text-blue-950 font-medium text-lg text-center align-text-top py-3 px-3 bg-gray-200 whitespace-nowrap">
                                                        October 2023
                                                    </th>




                                                    <td class="list-none py-2.5 text-blue-950">

                                                        <li class="px-6 py-1  grid">
                                                            <Link to="#" className='font-medium text-base hover:underline'>India tour of England 2025</Link>
                                                            <span>21 Nov - 08 Jan 2026</span>
                                                        </li>


                                                        <li class="px-6 py-1  grid">
                                                            <Link to="#" className='font-medium text-base hover:underline'>India tour of England 2025</Link>
                                                            <span>21 Nov - 08 Jan 2026</span>
                                                        </li>








                                                    </td>


                                                </tr>


                                                <tr class="border-b border-gray-200 dark:border-gray-700">

                                                    <th scope="row" class=" text-blue-950 font-medium text-lg text-center align-text-top py-3 px-3 bg-gray-200 whitespace-nowrap">
                                                        December 2023
                                                    </th>




                                                    <td class="list-none py-2.5 text-blue-950">

                                                        <li class="px-6 py-1 grid">
                                                            <Link to="#" className='font-medium text-base hover:underline'>India tour of England 2025</Link>
                                                            <span>21 Nov - 08 Jan 2026</span>
                                                        </li>


                                                        <li class="px-6 py-1  grid">
                                                            <Link to="#" className='font-medium text-base hover:underline'>India tour of England 2025</Link>
                                                            <span>21 Nov - 08 Jan 2026</span>
                                                        </li>








                                                    </td>


                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>







                </div>

                <FbConnect />


            </div>


        </div>
    )
}

export default CricketSeries