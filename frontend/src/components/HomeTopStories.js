import React from 'react'

const HomeTopStories = () => {
  return (
    <div><div className='rounded-xl border bg-white px-3 py-3'>
    <div class="text-2xl font-medium border-b pb-3">Top Stories</div>

    <div class="flex  items-center justify-between pb-3 pt-3 last:pb-0">
      <div class="grid items-center gap-x-3">


        <div class="text-blue-gray-900 block border-b py-4 leading-relaxed tracking-normal antialiased ">
          <div className="relative" style={{ paddingBottom: "56.25%", height: "0", overflow: "hidden" }}>
            <iframe
              class="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/_sztki-L7bg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen>
            </iframe>
          </div>

          <div class="font-medium hover:underline">IND vs NZ 1st Test: 4 Players OUT on 0 Before Lunch | KIWI Bowlers Sheer Dominance!</div>
          <div class="text-sm text-gray-500 font-normal">5 Hours Ago</div>


        </div>


        <div class="text-blue-gray-900  border-b py-4 grid grid-cols-2 gap-3 leading-relaxed tracking-normal antialiased ">
          <div className="relative" style={{ paddingBottom: "56.25%", height: "0", overflow: "hidden" }}>
            <iframe
              class="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/_sztki-L7bg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen>
            </iframe>
          </div>

          <div class="font-medium hover:underline">IND vs NZ 1st Test: 4 Players OUT on 0 Before Lunch | KIWI Bowlers Sheer Dominance!</div>
          <div class="text-sm text-gray-500 font-normal">5 Hours Ago</div>

        </div>


        <button class="items-center text-center text-violet-950 justify-between block tracking-normal antialiased hover:underline">
          Show More
        </button>



      </div>



    </div>



  </div></div>
  )
}

export default HomeTopStories