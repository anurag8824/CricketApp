import React from 'react'

const UpcomingFilter = () => {
  return (
    <div className=' my-6 md:flex gap-4 grid grid-row-2 mx-auto gap-y-2 text-sm font-normal'>

    <form class="">
        <select id="countries" class="bg-gray-50 w-full mx-auto border px-6 py-3 items-center border-gray-300 text-gray-900 text-base rounded-sm ">
            <option selected>All Format</option>
            <option value="US">T20 </option>
            <option value="CA">ODI</option>
            <option value="FR">Test</option>

        </select>
    </form>

  

    <form class="">
        <select id="countries" class="bg-gray-50 w-full mx-auto border px-6 py-3 items-center border-gray-300 text-gray-900 text-base rounded-sm ">
            <option selected>All Team</option>
            <option value="US">Team name 1 </option>
            

            <option value="CA">Team name 2</option>
            <option value="FR">Team name 3</option>
        </select>
    </form>

</div>
  )
}

export default UpcomingFilter