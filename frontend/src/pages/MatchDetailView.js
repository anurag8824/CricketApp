import React, { useState } from 'react'
import FbConnect from '../components/FbConnect';

import Commentary from '../components/MatchDetailComponents/Commentary';
import Scorecard from '../components/MatchDetailComponents/Scorecard';
import Info from '../components/MatchDetailComponents/Info';
import Squad from '../components/MatchDetailComponents/Squad';
import Highlights from '../components/MatchDetailComponents/Highlights';
import { Link, useNavigate } from 'react-router-dom';



const MatchDetailView = () => {

    const [activeTab, setActiveTab] = useState("commentary");
    const navigate = useNavigate();

    // const scrollRef = useRef(null)

    const tabs = ["commentary", "scorecard", "info", "squad", "highlights"]

    const activeIndex = tabs.indexOf(activeTab);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        navigate(`/match-detail/${tab}`)

    };

    return (
        <div className='md:mx-20 mx-4 '>

            <div className='flex px-1  py-10 justify-between'>
                <h1 className='text-2xl  font-medium'>India tour of England 2025</h1>
                {/* <input className=' bg-white rounded-full pr-6 pl-3 py-3 text-sm' placeholder='Search...' /> */}
            </div>

            <div className='flex gap-x-8'>
                <div className='border mb-4 bg-white rounded-xl md:w-3/4 w-full'>



                    <div className="w-full max-w-4xl mx-auto mt-8">

                        {/* Tab Buttons */}
                        <div className="relative overflow-x-scroll scrollbar-hide gap-3 flex-shrink-0 flex px-3">
                            {/* Render each tab button */}
                            {tabs.map((tab, index) => (
                                <button


                                    key={tab}
                                    className={`w-1/3  text-center py-2 text-lg font-normal ${activeTab === tab ? "text-black" : "text-gray-500"
                                        }`}
                                    onClick={() => handleTabClick(tab)}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}

                            {/* Underline */}
                            <div
                                className="absolute bottom-0 h-1 bg-blue-800 transition-transform duration-300 ease-in-out rounded-lg"
                                style={{
                                    width: `${100 / tabs.length}%`, // The underline width is dynamically set based on the number of tabs
                                    transform: `translateX(${activeIndex * 100}%)`, // Move underline based on the active tab index
                                }}
                            ></div>
                        </div>

                        {/* {activeTab === "current" ? <SeriesFilter /> : null} */}
                        {/* {activeTab === "archive" ? <YearFilter /> : null} */}






                        {/* Content Sections */}
                        <div className="relative mt-6 mb-6  px-3">
                            {activeTab === "commentary" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Commentary />
                                </div>
                            )}

                            {activeTab === "scorecard" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Scorecard />
                                </div>
                            )}


                            {activeTab === "info" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Info />
                                </div>
                            )}

                            {activeTab === "squad" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Squad />
                                </div>
                            )}

                            {activeTab === "highlights" && (
                                <div className="transition-opacity duration-500 ease-in-out opacity-100">
                                    <Highlights />
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

export default MatchDetailView