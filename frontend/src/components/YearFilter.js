import React from 'react'

const YearFilter = () => {
    return (
        <div className=' mt-6 ml-6 text-sm font-medium'>


            <form class="w-full mx-auto">

                <select id="countries" class="bg-gray-50 border pr-3 border-gray-300 text-gray-900 text-base rounded-sm ">
                    <option selected>Year</option>
                    <option value="US">2022 </option>
                    <option value="CA">2023</option>
                    <option value="FR">2024</option>
                    <option value="FR">2025</option>

                </select>
            </form>

        </div>
    )
}

export default YearFilter