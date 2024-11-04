import React, { useState } from 'react'
import FbConnect from '../components/FbConnect';
import { Link, useNavigate } from 'react-router-dom';

const CricketSchedule = () => {

    const [activeTab, setActiveTab] = useState("all");
    const navigate = useNavigate();

    // const scrollRef = useRef(null)

    const tabs = ["all", "t20", "odi", "test", "t10", "100-balls"]

    const activeIndex = tabs.indexOf(activeTab);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        navigate(`/cricket-schedule`)

    };

    return (
        <div className='md:mx-20 mx-4 '>

            {/* <div className='flex px-1  py-10 justify-between'>
                <p className='text-2xl  font-medium'>India tour of England 2025</p>
                <input className=' bg-white rounded-full pr-6 pl-3 py-3 text-sm' placeholder='Search...' />
            </div> */}

            <div className='flex py-10 gap-x-8'>
                <div className='border mb-4 bg-white rounded-xl md:w-3/4 w-full'>



                    <div className="w-full max-w-4xl mx-auto mt-8">


                        {/* Tab Buttons */}
                        <div className="relative overflow-x-scroll scrollbar-hide gap-2 flex-shrink-0 flex px-3">




                            {/* Render each tab button */}
                            {tabs.map((tab, index) => (
                                <button

                                    key={tab}
                                    className={`md:w-1/6 w-1/4  gap-2 flex-shrink-0 text-center py-2 text-lg font-normal ${activeTab === tab ? "text-black" : "text-gray-500"
                                        }`}
                                    // style={{width:"14.28%"}}
                                    // style={{ width: `${100 / tabs.length}%`}}
                                    onClick={() => handleTabClick(tab)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}

                            {/* Underline */}
                            <div
                                className="absolute md:w-1/6  w-1/4  bottom-0 h-1 bg-blue-800 transition-transform duration-300 ease-in-out rounded-lg"
                                style={{
                                    // width:'20%',
                                    // width: `${100 / tabs.length}%`, // The underline width is dynamically set based on the number of tabs
                                    transform: `translateX(${activeIndex * 100}%)`, // Move underline based on the active tab index
                                }}
                            ></div>
                        </div>



                        {/* {activeTab === "current" ? <SeriesFilter /> : null} */}
                        {/* {activeTab === "archive" ? <YearFilter /> : null} */}




                        {/* Content Sections */}
                        <div className="relative mt-6  px-3">
                            {activeTab === `all` && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    {/* content starts  */}
                                    <div>
                                        <div class="relative  overflow-x-auto ">
                                            <table class="  w-full text-left rtl:text-right  ">
                                                <thead class=" bg-gray-100   ">
                                                    <th scope="col" class="px-6 w-96 py-3">
                                                        Date
                                                    </th>
                                                    <th scope="col" class="px-6 w-full py-3">
                                                        Match Details
                                                    </th>

                                                </thead>

                                                <tbody>

                                                    <tr class="border-b border-gray-200 dark:border-gray-700">

                                                        <th scope="row" class=" text-blue-950 font-medium text-lg text-center align-text-top py-3 px-3 whitespace-nowrap">
                                                            Fri, 21 Nov 2025
                                                        </th>




                                                        <td class="list-none py-2.5 text-blue-950">

                                                            <li class="px-6 py-1  grid">
                                                                <Link to="#" className='font-medium text-base hover:underline'>
                                                                    The Ashes 2025-26, 1st Test Match </Link>
                                                                <span className=''>8:00 am your time (2:30 am GMT)</span>

                                                                <span>Perth Stadium, Perth, Australia</span>
                                                            </li>


                                                            <li class="px-6 py-1  grid">
                                                                <div className=' md:w-full w-72 items-center grid grid-rows-2 gap-y-2 px-3 py-2 justify-start bg-gray-200'>
                                                                    {/* <div className='w-full bg-red-50 flex  gap-2   '>
                                                                        <img src='/ind.png' className='w-12 h-12  rounded-full' />
                                                                        <p className='pt-3 text-sm font-normal uppercase '>IND</p>
                                                                    </div>

                                                                    <div className='w-full bg-red-50 flex  gap-2   '>
                                                                        <img src='/nz.png' className='w-12 h-12 rounded-full' />
                                                                        <p className='pt-3  text-sm font-normal uppercase '>NZ</p>
                                                                    </div> */}

                                                                    <div class="flex items-center md:justify-between   gap-4 pb-3 pt-3 last:pb-0">
                                                                        <div class="flex items-center gap-x-3">
                                                                            <img
                                                                                src="ind.png"
                                                                                alt="Tania Andrew"
                                                                                class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                                                                            />
                                                                            <div>
                                                                                <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                                                                    {/* {data?.response.match_info.teama.short_name} */}
                                                                                    IND
                                                                                </p>

                                                                            </div>
                                                                        </div>
                                                                        <p class="block font-sans md:text-base text-sm  font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                                                            {/* {data?.response.match_info.teama.scores_full} */}
                                                                            259-10 (79.1)
                                                                            & 255-10 (69.4)
                                                                        </p>
                                                                    </div>

                                                                    <div class="flex items-center md:justify-between   gap-4 pb-3 pt-3 last:pb-0">
                                                                        <div class="flex items-center gap-x-3">
                                                                            <img
                                                                                src="nz.png"
                                                                                alt="Tania Andrew"
                                                                                class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                                                                            />
                                                                            <div>
                                                                                <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                                                                    {/* {data?.response.match_info.teama.short_name} */}
                                                                                    NZ
                                                                                </p>

                                                                            </div>
                                                                        </div>
                                                                        <p class="block font-sans md:text-base text-sm  font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                                                            {/* {data?.response.match_info.teama.scores_full} */}
                                                                            259-10 (79.1)
                                                                            & 255-10 (69.4)
                                                                        </p>
                                                                    </div>





                                                                    <p className='text-red-500 text-sm'>Stumps</p>





                                                                </div>
                                                            </li>








                                                        </td>


                                                    </tr>












                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}


                            {activeTab === `t20` && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    {/* content starts  */}
                                    <div>
                                        <div class="relative  overflow-x-auto ">
                                            <table class="  w-full text-left rtl:text-right  ">
                                                <thead class=" bg-gray-100   ">
                                                    <th scope="col" class="px-6 w-96 py-3">
                                                        Date
                                                    </th>
                                                    <th scope="col" class="px-6 w-full py-3">
                                                        Match Details
                                                    </th>

                                                </thead>

                                                <tbody>

                                                    <tr class="border-b border-gray-200 dark:border-gray-700">

                                                        <th scope="row" class=" text-blue-950 font-medium text-lg text-center align-text-top py-3 px-3 whitespace-nowrap">
                                                            Fri, 21 Nov 2025
                                                        </th>




                                                        <td class="list-none py-2.5 text-blue-950">

                                                            <li class="px-6 py-1  grid">
                                                                <Link to="#" className='font-medium text-base hover:underline'>
                                                                    The Ashes 2025-26, 1st Test Match </Link>
                                                                <span className=''>8:00 am your time (2:30 am GMT)</span>

                                                                <span>Perth Stadium, Perth, Australia</span>
                                                            </li>


                                                            <li class="px-6 py-1  grid">
                                                                <div className=' md:w-full w-72 items-center grid grid-rows-2 gap-y-2 px-3 py-2 justify-start bg-gray-200'>
                                                                    {/* <div className='w-full bg-red-50 flex  gap-2   '>
                                                                        <img src='/ind.png' className='w-12 h-12  rounded-full' />
                                                                        <p className='pt-3 text-sm font-normal uppercase '>IND</p>
                                                                    </div>

                                                                    <div className='w-full bg-red-50 flex  gap-2   '>
                                                                        <img src='/nz.png' className='w-12 h-12 rounded-full' />
                                                                        <p className='pt-3  text-sm font-normal uppercase '>NZ</p>
                                                                    </div> */}

                                                                    <div class="flex items-center md:justify-between   gap-4 pb-3 pt-3 last:pb-0">
                                                                        <div class="flex items-center gap-x-3">
                                                                            <img
                                                                                src="ind.png"
                                                                                alt="Tania Andrew"
                                                                                class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                                                                            />
                                                                            <div>
                                                                                <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                                                                    {/* {data?.response.match_info.teama.short_name} */}
                                                                                    IND
                                                                                </p>

                                                                            </div>
                                                                        </div>
                                                                        <p class="block font-sans md:text-base text-sm  font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                                                            {/* {data?.response.match_info.teama.scores_full} */}
                                                                            259-10 (79.1)
                                                                            & 255-10 (69.4)
                                                                        </p>
                                                                    </div>

                                                                    <div class="flex items-center md:justify-between   gap-4 pb-3 pt-3 last:pb-0">
                                                                        <div class="flex items-center gap-x-3">
                                                                            <img
                                                                                src="nz.png"
                                                                                alt="Tania Andrew"
                                                                                class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
                                                                            />
                                                                            <div>
                                                                                <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                                                                    {/* {data?.response.match_info.teama.short_name} */}
                                                                                    NZ
                                                                                </p>

                                                                            </div>
                                                                        </div>
                                                                        <p class="block font-sans md:text-base text-sm  font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                                                                            {/* {data?.response.match_info.teama.scores_full} */}
                                                                            259-10 (79.1)
                                                                            & 255-10 (69.4)
                                                                        </p>
                                                                    </div>





                                                                    <p className='text-red-500 text-sm'>Stumps</p>





                                                                </div>
                                                            </li>








                                                        </td>


                                                    </tr>












                                                </tbody>
                                            </table>
                                        </div>
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

export default CricketSchedule