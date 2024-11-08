import React, { useEffect, useRef, useState } from 'react'

// import myAudio from '/FOUR.mp3'

import { Link } from 'react-router-dom'
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";



const Commentary = ({ data, balldata }) => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);
  const [userInteracted, setUserInteracted] = useState(false);
  const [matchData, setMatchData] = useState(null);
  const [ballEvent, setBallEvent] = useState(null);

  // Define a mapping from ball event string to audio file
  const audioMap = {
    'Ball Chalu': '/BALL START BALL.mp3',
    "dot": '/ZERO RUN.mp3',
    '1': '/SINGLE ONE RUN.mp3',
    '2': '/DOUBLE 2 RUN.mp3',
    '3': '/tHREE RUN.mp3',
    'four': '/FOUR.mp3',
    'six': '/SIX.mp3',
    "Caught": '/WICKET.mp3',
    'Bowled': '/WICKET.mp3',
    "LBW": '/WICKET.mp3',
    'wide': '/WIDEE.mp3',
    'no ball': '/NO BALL.mp3',
    'Over': '/OVER.mp3',
    'New Batter': "",
    'Ball in Air': "",
    'Match End': "",
    "bye + 1 run": "",
    "Innings Break": "",
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (audioRef.current) {
          audioRef.current.pause();
        }
      } else {
        if (!isMuted && userInteracted && audioRef.current) {
          audioRef.current.play().catch((err) => console.error('Audio playback error:', err));
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (audioRef.current) {
        audioRef.current.pause(); // Cleanup audio on component unmount
      }
    };
  }, [isMuted, userInteracted]);

  // Play audio based on ball event response after user interaction
  useEffect(() => {
    if (userInteracted && balldata?.response.ball_event) {
      const audioSrc = audioMap[balldata.response.ball_event];
      if (audioSrc) {
        if (audioRef.current) {
          audioRef.current.pause(); // Stop any currently playing audio
        }
        const newAudio = new Audio(audioSrc);
        newAudio.muted = isMuted; // Set mute state
        audioRef.current = newAudio; // Save current audio instance
        newAudio.play().catch((err) => console.error('Audio playback error:', err));
      }
    }
  }, [balldata, isMuted, userInteracted]);



  const handleClick = () => {
    setIsMuted((prev) => !prev);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted; // Toggle mute state for current audio
    }
  };

  const handleUserInteraction = () => {
    setUserInteracted(true);
  };







  const [view, setView] = useState('odds');

  // Click handlers for switching views
  const handleViewChange = (viewType) => {
    setView(viewType);
  };


  var Data = [...(data?.response.live.commentaries || [])].reverse()
  return (
    <div className=''>

      <div className='md:w-full md:flex grid grid-cols-1 md:grid-cols-2 gap-4 '>

        <div className='justify-between md:order-1 order-2  w-full md:w-1/2'>

          <div class="flex items-center md:justify-between   gap-4 pb-4 last:pb-0">
            <div class="flex items-center gap-x-5">
              <img
                src={data?.response.match_info.teama.logo_url}
                alt="Tania Andrew"
                class="relative inline-block h-10 w-10 border rounded-full object-cover object-center"
              />
              <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                {data?.response.match_info.teama.short_name}
              </p>

            </div>
            <p class="block font-sans md:text-base text-sm  font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              {data?.response.match_info.teama.scores_full}

            </p>
          </div>

          <div class="flex items-center md:justify-between  gap-4  pt-4 last:pb-0">
            <div class="flex items-center gap-x-5">
              <img
                src={data?.response.match_info.teamb.logo_url}
                alt="John Micheal"
                class="relative inline-block h-10 w-10 border rounded-full object-cover object-center"
              />
              <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                {data?.response.match_info.teamb.short_name}
              </p>

            </div>
            <p class="block font-sans md:text-base text-sm font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              {data?.response.match_info.teamb.scores_full}


            </p>
          </div>



        </div>

        <div className=' md:w-1/2 py-5 md:order-2 order-1 md:py-0 text-3xl font-bold  flex items-center justify-center bg-gray-800 text-amber-200 text-center'>
          <div className='' onClick={handleUserInteraction}>
            <div className='absolute top-2 right-4 text-white text-base cursor-pointer' onClick={handleClick}>
              {isMuted ? <FaVolumeMute style={{ fontSize: '16px' }} /> : <FaVolumeUp style={{ fontSize: '16px' }} />}
            </div>
            {balldata?.response.ball_event ? balldata?.response.ball_event : data?.response.live.game_state_str}
          </div>
        </div>







      </div>

      <p className=' font-medium text-md mt-2  text-red-600 '>{data?.response.live.status_note}</p>



      {/* odds from here  */}
      <div className="flex flex-col  items-center  mt-4 py-2 px-1 bg-gray-100 md:w-full">

        <div className=' w-full flex border-b items-center pb-2 justify-between'>
          <div className=" pl-4 font-medium md:text-lg md:w-1/2 ">
            Probability
          </div>

          {/* Buttons for toggling views */}
          <div className=" font-medium md:text-base text-xs gap-4  flex">

            <button
              onClick={() => handleViewChange('odds')}
              className={`md:px-4 px-2 md:py-2 rounded ${view === 'odds' ? 'bg-blue-950 text-white' : 'bg-gray-300 text-blue-950'
                }`}
            >
              Odds View
            </button>

            <button
              onClick={() => handleViewChange('%')}
              className={`md:px-4 px-2 md:py-1 py-1 rounded   ${view === '%' ? 'bg-blue-950 text-white' : 'bg-gray-300 text-blue-950'
                }`}
            >
              % View
            </button>



          </div>


        </div>



        {/* The view content below the buttons */}
        <div className="  w-full  p-4 rounded-md">
          <p className="text-lg">
            {view === '%' ?
              <div>



                <div className='flex font-medium text-base justify-between'>
                  <div>
                    <p>{data?.response.match_info.teama.short_name}</p>
                    <p>{Math.round(data?.response.teamwinpercentage.team_a_win)}%</p>
                  </div>
                  <div>
                    <p>{data?.response.match_info.teamb.short_name}</p>
                    <p>{Math.round(data?.response.teamwinpercentage.team_b_win)}%</p>
                  </div>
                </div>

                <div className='flex w-full'>
                  <p style={{ width: `${data?.response.teamwinpercentage.team_a_win}%` }} className='bg-green-500 h-2 '></p>
                  <p style={{ width: `${data?.response.teamwinpercentage.team_b_win}%` }} className='bg-red-500 h-2'></p>
                </div>

              </div>



              :

              <div>
                <div className='flex   justify-between'>




                </div>




                <div className=' font-medium  text-base items-center '>
                  {data?.response.teamwinpercentage.team_a_win > data?.response.teamwinpercentage.team_b_win ?

                    <div className='flex  items-center justify-between'>

                      <p>{data?.response.match_info.teama.short_name} </p>

                      <div className='flex gap-2'>

                        <p className='px-4 font-medium py-1 items-center flex justify-center bg-green-700 text-white border'> {Math.max(0, Math.round((parseFloat(data?.response.live_odds.matchodds.teama.back) * 100) - 100)).toString().padStart(2, '0')}</p>
                        <p className='px-4 font-medium py-1 items-center flex justify-center bg-red-700 text-white border'>
                          {data?.response.live_odds.matchodds.teama.lay ? Math.max(0, Math.round((parseFloat(data?.response.live_odds.matchodds.teama.lay) * 100) - 100))
                            .toString()
                            .padStart(2, '0')
                            : "0"}

                        </p>

                      </div>

                    </div>

                    :

                    <div className='flex items-center justify-between'>

                      <p>{data?.response.match_info.teamb.short_name} </p>

                      <div className='flex gap-2' >
                        <p className='px-4 font-medium py-1 items-center flex justify-center bg-green-700 text-white border'>
                          {Math.max(0, Math.round((parseFloat(data?.response.live_odds.matchodds.teamb.back) * 100) - 100)).toString().padStart(2, '0')}
                        </p>



                        <p className='px-4 font-medium py-1 items-center flex justify-center bg-red-700 text-white border'>

                          {data?.response.live_odds.matchodds.teamb.lay ? Math.max(0, Math.round((parseFloat(data?.response.live_odds.matchodds.teamb.lay) * 100) - 100)).toString().padStart(2, '0') : "0"}

                        </p>

                      </div>




                    </div>

                  }

                </div>

                {/* <div className='flex mt-2 font-medium  text-base items-center justify-between'>

                  <p>Team Name B </p>
                  <p className='px-4 font-medium py-1 items-center flex justify-center bg-red-700 text-white border'>6</p>




                </div> */}

              </div>







            }
          </p>
        </div>



      </div>


      <div className='hidden mt-4 w-full border'>
        <img src='/playerofmatch.png' className='w-24  h-24' />
        <div className=' pl-4 bg-gray-100 items-center grid w-full'>
          <p>Player of the match</p>

          <div class="flex items-center pl-4  gap-4">
            <img
              src="/viratkohli.png"
              alt="John Micheal"
              class="relative inline-block h-10 w-10 rounded-full object-cover object-center"
            />

            <Link class="block font-sans hover:underline text-blue-600 text-lg font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              Virat Kohli
            </Link>


          </div>


        </div>






      </div>



      {/* batting */}

      <div className='md:flex w-full mt-6'>


        <div className='md:w-2/3 w-full'>

          <div class="relative  overflow-x-auto ">
            <table class="w-full text-center  rtl:text-right text-gray-950 ">
              <thead class="bg-blue-950 text-white   ">
                <tr>
                  <th scope="col" class=" px-2 py-2  font-normal">
                    Batter
                  </th>


                  <th scope="col" class=" font-normal  ">
                    R
                  </th>

                  <th scope="col" class=" font-normal  ">
                    B
                  </th>

                  <th scope="col" class=" font-normal ">
                    4s
                  </th>

                  <th scope="col" class="font-normal ">
                    6s
                  </th>


                  <th scope="col" class=" font-normal  ">
                    SR
                  </th>

                </tr>
              </thead>

              <tbody>

                {data?.response.live?.batsmen.map((item, index) => (

                  item ? (


                    <tr key={index} className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                      <td scope='row' className=' text-blue-600'>
                        <Link className='hover:underline text-left text-sm '>{item.name} </Link>

                      </td>

                      <td scope='row' class="">
                        {item.runs}
                      </td>

                      <td scope='row' className=''>
                        {item.balls_faced}
                      </td>

                      <td scope='row' className=''>
                        {item.fours}
                      </td>

                      <td scope='row' className=''>
                        {item.sixes}
                      </td>

                      <td scope='row' className=''>
                        {item.strike_rate}
                      </td>

                    </tr>

                  ) : null

                ))}


              </tbody>

            </table>
          </div>

          {/* 2nd table  */}
          <div class="relative  overflow-x-auto ">
            <table class=" w-full text-center   rtl:text-right text-gray-950 ">
              <thead class="bg-blue-950 text-white   ">
                <tr>
                  <th scope="col" class="px-2  py-2 font-normal ">
                    Bowler
                  </th>


                  <th scope="col" class="font-normal ">
                    O
                  </th>

                  <th scope="col" class="font-normal ">
                    M
                  </th>

                  <th scope="col" class="font-normal ">
                    R
                  </th>

                  <th scope="col" class="font-normal ">
                    W
                  </th>


                  <th scope="col" class="font-normal ">
                    ECO
                  </th>

                </tr>
              </thead>

              <tbody>

                {data?.response.live.bowlers ?

                  <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                    <td scope='row' className='  text-blue-600'>
                      <Link className='hover:underline text-sm'>{data?.response.live.bowlers ? data?.response.live.bowlers[0].name : ""}</Link>

                    </td>

                    <td scope='row' class="">
                      {data?.response.live.bowlers[0]?.overs}
                    </td>

                    <td className=''>
                      {data?.response.live.bowlers[0]?.maidens}
                    </td>

                    <td className=''>
                      {data?.response.live.bowlers[0]?.runs_conceded}
                    </td>

                    <td className=''>
                      {data?.response.live.bowlers[0]?.wickets}
                    </td>

                    <td className=''>
                      {data?.response.live.bowlers[0]?.econ}
                    </td>



                  </tr>

                  : ""}











              </tbody>
            </table>
          </div>

        </div>

        <div className=' border-l mx-4 bg-white '>

        </div>

        <div className='w-full md:w-1/3 text-sm border bg-gray-100'>

          <p className='bg-blue-950 font-normal text-white py-2  px-2  '>Key Stats</p>

          <p className='py-2 gap-2 px-2'><span className='font-medium text-sm'>Partership:</span> {data?.response.live.live_inning.current_partnership.runs}({data?.response.live.live_inning.current_partnership.balls})</p>

          {data?.response.live.live_inning.last_wicket.name ?

            <p className='pb-2 px-2'><span className='font-medium text-sm'>Last Wickets:</span> {data?.response.live.live_inning.last_wicket.name}{data?.response.live.live_inning.last_wicket.how_out}{data?.response.live.live_inning.last_wicket.runs}({data?.response.live.live_inning.last_wicket.balls}) ‐ {data?.response.live.live_inning.last_wicket.score_at_dismissal}/{data?.response.live.live_inning.last_wicket.number} in {data?.response.live.live_inning.last_wicket.overs_at_dismissal}ov</p> : null

          }

          <p className='pb-2 px-2'><span className='font-medium text-sm'>Toss:</span> {data?.response.match_info.toss.text}</p>


        </div>




      </div>









      <div className='mt-2 flex gap-x-1 ml-4'>

        <p>Recent :</p>
        <p>{data?.response.live.live_inning.recent_scores}</p>



        {/* <p>1</p>
        <p>0</p>
        <p>1</p>
        <p>6</p>
        <p>1</p>
        <p>0</p>
        <p>|</p>
        <p>1</p>
        <p>1</p>
        <p>0</p>
        <p>3</p>
        <p>1</p>
        <p>0</p> */}





      </div>






      {Data.map((item, index) => (

        item.event == "overend" ? (


          <div key={index} className='mt-6 bg-gray-100  border w-full p-4'>

            <div className='flex border-b font-medium pb-4 '>
              <p className='w-72'>Over-{item.over} </p>
              <p>{item.commentary}</p>


            </div>

            <div className='flex mt-4 '>
              <p className='md:w-72 w-fit pr-4 border-r font-medium '></p>

              {/* 
              <div className='ml-4'>

                <p>Mehdi <span className='pl-4'>55(107)</span></p>
                <p>Mehidy Hasan Miraz <span className='pl-4'>55(107)</span></p>

                <p>Mehidy Hasan Miraz <span className='pl-4'>55(107)</span></p>


              </div> */}





            </div>




          </div>


        ) :


          <div className='mt-6'>


            <div key={index} className='mt-6 flex   gap-x-3  border-b  px-4 pt-4'>
              <div className=' font-medium pb-4 '>
                <p className='mb-2'>{item.over}.{item.ball} </p>
                <p className='border bg-blue-500 w-8 h-8 rounded-full text-white flex items-center justify-center'>{item.score}</p>

              </div>

              <div className='flex w-full '>
                <p className='   '>{item.commentary}</p>
              </div>

            </div>


          </div>

      ))}


    </div>
  )
}

export default Commentary