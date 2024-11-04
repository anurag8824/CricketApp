import React from 'react'
import { Link } from 'react-router-dom'

const Info = ({data}) => {
  return (
    <div>
      <div className='border-b pb-2 flex justify-between    w-full '>
        <div className='w-full  text-center flex flex-col  items-center  '>
          <img src='/ind.png' className='w-12 h-12 border rounded-full' />
          <p className='pt-3 text-center'>South Africa Women {data}  </p>

        </div>

        <div>
          <p className='border bg-black w-8 h-8 mt-3 rounded-full text-white flex items-center justify-center'>Vs</p>
        </div>

        <div className='w-full text-center flex flex-col  items-center  '>
          <img src='/ban.png' className='w-12 h-12 border rounded-full' />
          <p className='pt-3 text-center  '>New Zealand Women</p>

        </div>


      </div>

      <div>

        <div className='border-b mt-4 flex justify-between  w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Series:</p>
          <Link to="/cricket-series" className='font-normal text-base text-blue-500 py-3 pl-3 hover:underline  w-full md:w-1/2'>South Africa tour of Bangladesh 2024</Link>

        </div>

        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Match:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>
            Bangladesh vs South Africa, 1st Test Match</p>

        </div>

        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Date & Time:</p>
          <p className='font-normal text-base  py-3 pl-3   w-full md:w-1/2'>

            Mon, 21 Oct, 09:30 AM your time</p>

        </div>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Venue:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>

            Sher-e-Bangla Stadium</p>

        </div>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Toss:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>

            Bangladesh opt to bat</p>

        </div>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Umpires:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>

            Joel Wilson,Nitin Menon</p>

        </div>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Third Umpire:</p>
          <p className='font-normal text-base  pl-3   py-3  w-full md:w-1/2'>

            Langton Rusere</p>

        </div>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Match Referee:</p>
          <p className='font-normal text-base pl-3   py-3  w-full md:w-1/2'>

            Andy Pycroft</p>

        </div>




      </div>

      <div>

        <p className='font-normal   py-3 font-m text-xl   w-full md:w-1/2'>

          Recent Performance - Last 5 Matches</p>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Bangladesh</p>
          <div className='font-normal md:flex grid grid-cols-4 gap-x-2 gap-y-2 text-base  py-3 pl-3   w-full md:w-1/2'>

            <p className='border-2 font-medium bg-gray-100 w-8 h-8  border-gray-400 rounded-sm text-gray-400 flex items-center justify-center'>*</p>

            <p className='border-2 font-medium bg-red-100 w-8 h-8  border-red-400 rounded-sm text-red-400 flex items-center justify-center'>L</p>

            <p className='border-2 font-medium bg-green-100 w-8 h-8  border-green-400 rounded-sm text-green-400 flex items-center justify-center'>W</p>

            <p className='border-2 font-medium bg-red-100 w-8 h-8  border-red-400 rounded-sm text-red-400 flex items-center justify-center'>L</p>

            <p className='border-2 font-medium bg-green-100 w-8 h-8  border-green-400 rounded-sm text-green-400 flex items-center justify-center'>W</p>

            <p className='border-2 font-medium bg-red-100 w-8 h-8  border-red-400 rounded-sm text-red-400 flex items-center justify-center'>L</p>
          </div>

        </div>



        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Bangladesh</p>
          <div className='font-normal md:flex grid grid-cols-4 gap-x-2 gap-y-2 text-base  py-3 pl-3   w-full md:w-1/2'>

            <p className='border-2 font-medium bg-gray-100 w-8 h-8  border-gray-400 rounded-sm text-gray-400 flex items-center justify-center'>*</p>

            <p className='border-2 font-medium bg-red-100 w-8 h-8  border-red-400 rounded-sm text-red-400 flex items-center justify-center'>L</p>

            <p className='border-2 font-medium bg-green-100 w-8 h-8  border-green-400 rounded-sm text-green-400 flex items-center justify-center'>W</p>

            <p className='border-2 font-medium bg-red-100 w-8 h-8  border-red-400 rounded-sm text-red-400 flex items-center justify-center'>L</p>

            <p className='border-2 font-medium bg-green-100 w-8 h-8  border-green-400 rounded-sm text-green-400 flex items-center justify-center'>W</p>

            <p className='border-2 font-medium bg-red-100 w-8 h-8  border-red-400 rounded-sm text-red-400 flex items-center justify-center'>L</p>
          </div>

        </div>





      </div>


      <div>
        <p className='font-normal   py-3 font-m text-xl   w-full md:w-1/2'>

          Venue Details</p>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Stadium:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>

            Sher-e-Bangla Stadium</p>

        </div>



        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>City:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>


            Dhaka</p>
        </div>



        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Capacity:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>


            26000</p>
        </div>

      </div>



      <div>
        <p className='font-normal   py-3 font-m text-xl   w-full md:w-1/2'>

          Venue Weather</p>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Weather:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>

            Hazy</p>

        </div>



        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Temperature:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>


            28 °C</p>
        </div>



        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Rain Forecast:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>



            17%</p>
        </div>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Humid:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>




            85%</p>
        </div>



        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Wind:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>





            8 km/h</p>
        </div>


        <div className='border-b mt-3 flex justify-between   w-full   '>
          <p className='font-medium text-base py-3 pl-3 w-1/2 md:w-1/3 '>Updated at:</p>
          <p className='font-normal text-base  py-3 pl-3  w-full md:w-1/2'>





            23 Oct, 08:23 AM</p>
        </div>

      </div>
















    </div>
  )
}

export default Info