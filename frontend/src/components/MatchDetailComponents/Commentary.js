import React, { useState } from 'react'

import { Link } from 'react-router-dom'

const Commentary = ({ data }) => {


  const [view, setView] = useState('%');

  // Click handlers for switching views
  const handleViewChange = (viewType) => {
    setView(viewType);
  };

  var Data = [...(data?.response.live.commentaries || [])].reverse()
  return (
    <div className=''>
      <div className='md:w-full justify-between bg-red-50  pl-3'>

        <div>

          <div class="md:flex items-center justify-between gap-4 pb-3 pt-3 last:pb-0">
            <div class="flex items-center gap-x-3">
              <img
                src={data?.response.match_info.teama.logo_url}
                alt="Tania Andrew"
                class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
              />
              <div>
                <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                  {data?.response.match_info.teama.short_name}
                </p>

              </div>
            </div>
            <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              {data?.response.match_info.teama.scores_full}
            </p>
          </div>

          <div class="md:flex items-center justify-between gap-4 pb-3 pt-3 last:pb-0">
            <div class="flex items-center gap-x-3">
              <img
                src={data?.response.match_info.teamb.logo_url}
                alt="John Micheal"
                class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
              />
              <div>
                <p class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                  {data?.response.match_info.teamb.short_name}
                </p>

              </div>
            </div>
            <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              {data?.response.match_info.teamb.scores_full}
            </h6>
          </div>


        </div>









      </div>

      <div className='pl-3 '>


        <div className='w-full '>

          <div className="flex flex-col   items-center  mt-8 p-4 bg-gray-200 md:full mx-auto">

            <div className=' w-full flex justify-between'>

              {/* Probability Section */}
              <div className="  font-medium text-lg w-1/2 ">
                Probability

              </div>

              {/* Buttons for toggling views */}
              <div className=" font-medium text-base gap-4  flex">
                <button
                  onClick={() => handleViewChange('%')}
                  className={`px-4 py-1 rounded   ${view === '%' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-white'
                    }`}
                >
                  % View
                </button>

                <button
                  onClick={() => handleViewChange('odds')}
                  className={`px-4 py-2 rounded ${view === 'odds' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-white'
                    }`}
                >
                  Odds View
                </button>

              </div>


            </div>



            {/* The view content below the buttons */}
            <div className="  w-full  p-4 rounded-md">
              <p className="text-lg">
                {view === '%' ?

                  <div className='flex font-medium justify-between'>

                    <div>
                      <p>Team A</p>
                      <p>% State</p>


                    </div>

                    <div>
                      <p>Team B</p>
                      <p>% State</p>


                    </div>




                  </div> :

                  <div>
                    <div className='flex   justify-between'>




                    </div>



                    <div className='flex font-medium  items-center justify-between'>

                      <p>Team Name A </p>
                      <p className='px-4 font-medium py-1 items-center flex justify-center bg-red-700 text-white border'>6</p>




                    </div>

                    <div className='flex mt-2 font-medium  items-center justify-between'>

                      <p>Team Name B </p>
                      <p className='px-4 font-medium py-1 items-center flex justify-center bg-red-700 text-white border'>6</p>




                    </div>

                  </div>







                }
              </p>
            </div>

          </div>

        </div>



        <p className=' font-medium text-lg mt-6 text-red-600 '>{data?.response.live.status_note}  </p>

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

      </div>

      {/* batting */}

      <div className=' mt-6 md:w-fit w-full border'>

        <div class="relative  overflow-x-auto ">
          <table class=" w-full text-left rtl:text-right text-gray-950 ">
            <thead class="bg-blue-950 text-white   ">
              <tr>
                <th scope="col" class="px-6  font-normal w-1/3 py-3">
                  Batter
                </th>


                <th scope="col" class="px-6 font-normal w-1/4 py-3">
                  R
                </th>

                <th scope="col" class="px-6 font-normal w-1/4 py-3">
                  B
                </th>

                <th scope="col" class="px-6 font-normal w-1/4 py-3">
                  4s
                </th>

                <th scope="col" class="px-6 font-normal w-1/4 py-3">
                  6s
                </th>


                <th scope="col" class="px-6 font-normal w-1/4 py-3">
                  SR
                </th>

              </tr>
            </thead>

            <tbody>

              {data?.response.live.batsmen.map((item, index) => (

                item ? (


                  <tr key={index} className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                    <td scope='row' className=' text-blue-600'>
                      <Link className='hover:underline text-sm'>{item.name} </Link>

                    </td>

                    <td scope='row' class="">
                      {item.runs}
                    </td>

                    <td className=''>
                      {item.balls_faced}
                    </td>

                    <td className=''>
                      {item.fours}
                    </td>

                    <td className=''>
                      {item.sixes}
                    </td>

                    <td className=''>
                      {item.strike_rate}
                    </td>



                  </tr>

                ) : null

              ))}


            </tbody>
          </table>
        </div>


        {/* 2nd table  */}
        <div class="relative mt-6  overflow-x-auto ">
          <table class=" w-full text-left rtl:text-right text-gray-950 ">
            <thead class="bg-blue-950 text-white   ">
              <tr>
                <th scope="col" class="px-6  font-normal w-1/4 py-3">
                  Bowler
                </th>


                <th scope="col" class="px-6 font-normal w-1/4 py-3">
                  O
                </th>

                <th scope="col" class="px-6 font-normal w-1/4 py-3">
                  M
                </th>

                <th scope="col" class="px-6 font-normal w-1/4 py-3">
                  R
                </th>

                <th scope="col" class="px-6 font-normal w-1/4 py-3">
                  W
                </th>


                <th scope="col" class="px-6 font-normal w-1/4 py-3">
                  ECO
                </th>

              </tr>
            </thead>

            <tbody>

              <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                <td scope='row' className='  text-blue-600'>
                  <Link className='hover:underline text-sm'>{data?.response.live.bowlers[0].name}</Link>

                </td>

                <td scope='row' class="">
                  {data?.response.live.bowlers[0].overs}
                </td>

                <td className=''>
                  {data?.response.live.bowlers[0].maidens}
                </td>

                <td className=''>
                  {data?.response.live.bowlers[0].runs_conceded}
                </td>

                <td className=''>
                  {data?.response.live.bowlers[0].wickets}
                </td>

                <td className=''>
                  {data?.response.live.bowlers[0].econ}
                </td>



              </tr>











            </tbody>
          </table>
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

      {/* {Data = [...(data?.response.live.commentaries || [])].reverse()} */}

      {/* { console.log("Data", data?.response.live.commentaries)} */}




      {Data.map((item, index) => (

        item.event == "overend" ? (


          <div key={index} className='mt-6 bg-gray-100  border w-full p-4'>

            <div className='flex border-b font-medium pb-4 '>
              <p className='w-72'>Over-{item.over} </p>
              <p>{item.commentary}</p>


            </div>

            <div className='flex mt-4 '>
              <p className='md:w-72 w-fit pr-4 border-r font-medium '></p>

              <div className='ml-4'>

                <p>Mehidy Hasan Miraz <span className='pl-4'>55(107)</span></p>
                <p>Mehidy Hasan Miraz <span className='pl-4'>55(107)</span></p>

                <p>Mehidy Hasan Miraz <span className='pl-4'>55(107)</span></p>


              </div>





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