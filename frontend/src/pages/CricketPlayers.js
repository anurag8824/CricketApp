import React, { useEffect, useState } from 'react'

import FbConnect from "../components/FbConnect"
import axios from "axios"

import { Link } from 'react-router-dom'

const CricketPlayers = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8050/api/v1/allplayer")
            .then((res) => {
                console.log(res, "allplayers");
                setData(res.data.msg.items)
            })
    }, [])


    return (
        <div className='md:mx-20 mx-4 h-full'>

            <div className='flex px-1  py-10 justify-between'>
                <p className='text-2xl  font-medium'>Cricket Players</p>
                <input className=' bg-white rounded-full pr-6 pl-3 py-3 text-sm' placeholder='Search...' />
            </div>

            <div className='flex gap-x-8'>
                <div className='border mb-4 bg-white rounded-xl md:w-3/4 w-full h-full'>

                    <div className='grid gap-y-2.5 grid-flow-row p-8'>

                        {data.map((item, index) => (
                            item ? (




                                <div key={index} class="flex gap-4 border-b pb-2.5 items-center">
                                    <img
                                        src="/demoplayer.png"
                                        alt="Tania Andrew"
                                        class="relative border inline-block h-14 w-14 rounded-full object-cover object-center"
                                    />

                                    <p class=" grid font-sans text-base font-normal leading-relaxed tracking-normal  antialiased">
                                        <Link to="/cricket-player-detail" className='cursor-pointer hover:underline'>{item.title}</Link>
                                        <span>{item.nationality}</span>
                                    </p>
                                </div>

                            ) : null
                        ))}









                    </div>





                </div>

                <FbConnect />


            </div>


        </div>
    )
}

export default CricketPlayers