import React from 'react'

import {Link} from 'react-router-dom'

const Commentary = () => {
  return (
    <div className=''>
      <div className='w-72 pl-3'>

        <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
          <div class="flex items-center gap-x-3">
            <img
              src="/ind.png"
              alt="Tania Andrew"
              class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
            />
            <div>
              <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                India
              </h6>

            </div>
          </div>
          <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
            222/3 (20.0)
          </h6>
        </div>

        <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
          <div class="flex items-center gap-x-3">
            <img
              src="/engw.png"
              alt="John Micheal"
              class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
            />
            <div>
              <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                England
              </h6>

            </div>
          </div>
          <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
            89-0 (10.1)
          </h6>
        </div>
      </div>

      <div className='pl-3 '>

        <p className=' font-medium text-lg mt-6 text-red-600 '>Team won by 5 wickets/run  </p>

        <div className='flex mt-4 w-full border'>
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


      <div className=' mt-6 md:w-fit w-full border'>

        <div class="relative  overflow-x-auto ">
          <table class=" w-full text-left rtl:text-right text-gray-950 ">
            <thead class="bg-blue-950 text-white   ">
              <tr>
                <th scope="col" class="px-6  font-normal w-1/4 py-3">
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

              <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                <td scope='row' className=' text-blue-600'>
                 <Link className='hover:underline'>Player1</Link> 

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

                <td className=''>
                  44
                </td>

                <td className=''>
                  44
                </td>



              </tr>

              {/* 2nd row  */}

              <tr className="border-b border-gray-200 text-center  align-text-top dark:border-gray-700">

                <td scope='row' className=' text-blue-600'>
                <Link className='hover:underline'>Player2</Link> 

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

                <td className=''>
                  44
                </td>

                <td className=''>
                  44
                </td>



              </tr>









            </tbody>
          </table>
        </div>


        {/* 2nd table  */}
        <div class="relative mt-6  overflow-x-auto ">
          <table class=" w-full text-left rtl:text-right text-gray-950 ">
            <thead class="bg-blue-950 text-white   ">
              <tr>
                <th scope="col" class="px-6 font-normal w-1/4 py-3">
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

                <td scope='row' className=' text-blue-600'>
                <Link className='hover:underline'>Bowler name</Link> 

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

                <td className=''>
                  44
                </td>

                <td className=''>
                  44
                </td>



              </tr>











            </tbody>
          </table>
        </div>




      </div>


      <div className='mt-2 flex gap-x-1 ml-4'>

        <p>Recent :</p>
        <p>1</p>
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
        <p>0</p>





      </div>

      <div className='mt-6 bg-gray-100  border w-full p-4'>
        <div className='flex border-b font-medium pb-4 '>
          <p className='w-72'>Over-63 </p>
          <p>0 0 0 0 0 1 (1 RUNS)</p>


        </div>

        <div className='flex mt-4 '>
          <p className='md:w-72 w-fit pr-4 border-r font-medium '>BAN 201-6 </p>

          <div className='ml-4'>

            <p>Mehidy Hasan Miraz <span className='pl-4'>55(107)</span></p>
            <p>Mehidy Hasan Miraz <span className='pl-4'>55(107)</span></p>

            <p>Mehidy Hasan Miraz <span className='pl-4'>55(107)</span></p>


          </div>





        </div>




      </div>




      {/* highlights scores with commentary */}

      <div className='mt-6'>
        {/* 1st commentary  */}

        <div className='mt-6 flex   gap-x-3  border-b  px-4 pt-4'>
          <div className=' font-medium pb-4 '>
            <p className='mb-2'>63.2 </p>
            <p className='border bg-blue-500 w-8 h-8 rounded-full text-white flex items-center justify-center'>3</p>

          </div>

          <div className='flex w-full '>
            <p className='   '>Dane Piedt to Mehidy Hasan Miraz: Three Runs. Chase for the fielders, Trail is now just of 3 runs. Dane slice a length ball on the off-side and Mehidy with an edge send ball towards third man to grab three runs. </p>
          </div>

        </div>

        {/* 2nd commentary  */}

        <div className='mt-6 flex   gap-x-3  border-b  px-4 pt-4'>
          <div className=' font-medium pb-4 '>
            <p className='mb-2'>63.2 </p>
            <p className='border bg-blue-500 w-8 h-8 rounded-full text-white flex items-center justify-center'>3</p>

          </div>

          <div className='flex w-full '>
            <p className='   '>Dane Piedt to Mehidy Hasan Miraz: Three Runs. Chase for the fielders, Trail is now just of 3 runs. Dane slice a length ball on the off-side and Mehidy with an edge send ball towards third man to grab three runs. </p>
          </div>

        </div>

      </div>










    </div>
  )
}

export default Commentary