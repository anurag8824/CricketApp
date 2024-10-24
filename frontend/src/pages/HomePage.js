import React from 'react'
import './CustomScrollbar.css';
import FbConnect from '../components/FbConnect';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='h-full md:mx-16'>

      <div class="md:flex grid space-x-4 md:overflow-x-scroll custom-scrollbar  overflow-x-hidden">
        <div class="relative flex-shrink-0 flex w-96 flex-col m-2 bg-clip-border text-gray-700 ">
          <Link
            to="cricket-series/overview"
            class="block  px-2 text-sm font-medium py-2 text-left text-slate-700 transition-all hover:underline"
          >
            Womens T20 World Cup 2024, 20th Match, Group B
          </Link>


          <Link to="match-detail/commentary">

            <div class="p-4 pb-1 bg-white border rounded-xl ">
              <p class="block text-red-600 mb-1 text-sm font-bold   antialiased">
                <span className="animate-blink">●</span> Live
              </p>
              <div class="mb-4 flex items-center justify-between">
                <h5 class="block font-sans text-sm font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                  14th Match 04:30 AM, 16-Oct ● Sydney, Australia
                </h5>

              </div>
              <div class="">
                <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
                  <div class="flex items-center gap-x-3">
                    <img
                      src="ind.png"
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
                      src="engw.png"
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
                <hr />
                <div class="flex items-center justify-between pb-1 pt-3 last:pb-0">
                  <div class="flex items-center gap-x-3">

                    <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
                      Series
                    </a>

                    <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
                      Schedule
                    </a>

                    <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
                      News
                    </a>


                  </div>

                </div>

              </div>
            </div>
          </Link>

          <p className='block mt-1  px-2 text-sm font-medium  text-left text-slate-700 transition-all'>Upcoming</p>
        </div>


        <div class="relative flex-shrink-0 flex w-96 flex-col m-2 bg-clip-border text-gray-700 ">
          <a

            href="#"
            class="block  px-2 text-sm font-medium py-2 text-left text-slate-700 transition-all"
          >
            Womens T20 World Cup 2024, 20th Match, Group B
          </a>
          <div class="p-4 pb-1 bg-white border rounded-xl ">
            <p href="#" class="block text-red-600 mb-1 text-sm font-bold   antialiased">
              <span className="animate-blink">●</span> Live
            </p>
            <div class="mb-4 flex items-center justify-between">
              <h5 class="block font-sans text-sm font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                14th Match 04:30 AM, 16-Oct ● Sydney, Australia
              </h5>

            </div>
            <div class="">
              <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
                <div class="flex items-center gap-x-3">
                  <img
                    src="ind.png"
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
                    src="engw.png"
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
              <hr />
              <div class="flex items-center justify-between pb-1 pt-3 last:pb-0">
                <div class="flex items-center gap-x-3">

                  {/* <div className='flex gap-2'> */}
                  <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
                    Series
                  </a>

                  <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
                    Schedule
                  </a>

                  <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
                    News
                  </a>


                  {/* </div> */}
                </div>

              </div>

            </div>
          </div>

          <p className='block mt-1  px-2 text-sm font-medium  text-left text-slate-700 transition-all'>Upcoming</p>
        </div>




        <div class="relative flex-shrink-0 flex w-96 flex-col m-2 bg-clip-border text-gray-700 ">
          <a

            href="#"
            class="block  px-2 text-sm font-medium py-2 text-left text-slate-700 transition-all"
          >
            Womens T20 World Cup 2024, 20th Match, Group B
          </a>
          <div class="p-4 pb-1 bg-white border rounded-xl ">
            <p href="#" class="block text-red-600 mb-1 text-sm font-bold   antialiased">
              <span className="animate-blink">●</span> Live
            </p>
            <div class="mb-4 flex items-center justify-between">
              <h5 class="block font-sans text-sm font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                14th Match 04:30 AM, 16-Oct ● Sydney, Australia
              </h5>

            </div>
            <div class="">
              <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
                <div class="flex items-center gap-x-3">
                  <img
                    src="ind.png"
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
                    src="engw.png"
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
              <hr />
              <div class="flex items-center justify-between pb-1 pt-3 last:pb-0">
                <div class="flex items-center gap-x-3">

                  {/* <div className='flex gap-2'> */}
                  <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
                    Series
                  </a>

                  <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
                    Schedule
                  </a>

                  <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
                    News
                  </a>


                  {/* </div> */}
                </div>

              </div>

            </div>
          </div>

          <p className='block mt-1  px-2 text-sm font-medium  text-left text-slate-700 transition-all'>Upcoming</p>
        </div>






        <div class="relative flex-shrink-0 flex w-96 flex-col m-2 bg-clip-border text-gray-700 ">
          <a

            href="#"
            class="block  px-2 text-sm font-medium py-2 text-left text-slate-700 transition-all"
          >
            Womens T20 World Cup 2024, 20th Match, Group B
          </a>
          <div class="p-4 pb-1 bg-white border rounded-xl ">
            <p href="#" class="block text-red-600 mb-1 text-sm font-bold   antialiased">
              <span className="animate-blink">●</span> Live
            </p>
            <div class="mb-4 flex items-center justify-between">
              <h5 class="block font-sans text-sm font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                14th Match 04:30 AM, 16-Oct ● Sydney, Australia
              </h5>

            </div>
            <div class="">
              <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
                <div class="flex items-center gap-x-3">
                  <img
                    src="ind.png"
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
                    src="engw.png"
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
              <hr />
              <div class="flex items-center justify-between pb-1 pt-3 last:pb-0">
                <div class="flex items-center gap-x-3">

                  {/* <div className='flex gap-2'> */}
                  <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
                    Series
                  </a>

                  <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
                    Schedule
                  </a>

                  <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
                    News
                  </a>


                  {/* </div> */}
                </div>

              </div>

            </div>
          </div>

          <p className='block mt-1  px-2 text-sm font-medium  text-left text-slate-700 transition-all'>Upcoming</p>
        </div>







        <div class="relative flex-shrink-0 flex w-96 flex-col m-2 bg-clip-border text-gray-700 ">
          <a

            href="#"
            class="block  px-2 text-sm font-medium py-2 text-left text-slate-700 transition-all"
          >
            Womens T20 World Cup 2024, 20th Match, Group B
          </a>
          <div class="p-4 pb-1 bg-white border rounded-xl ">
            <p href="#" class="block text-red-600 mb-1 text-sm font-bold   antialiased">
              <span className="animate-blink">●</span> Live
            </p>
            <div class="mb-4 flex items-center justify-between">
              <h5 class="block font-sans text-sm font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                14th Match 04:30 AM, 16-Oct ● Sydney, Australia
              </h5>

            </div>
            <div class="">
              <div class="flex items-center justify-between pb-3 pt-3 last:pb-0">
                <div class="flex items-center gap-x-3">
                  <img
                    src="ind.png"
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
                    src="engw.png"
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
              <hr />
              <div class="flex items-center justify-between pb-1 pt-3 last:pb-0">
                <div class="flex items-center gap-x-3">

                  {/* <div className='flex gap-2'> */}
                  <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
                    Series
                  </a>

                  <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
                    Schedule
                  </a>

                  <a href='#' class="block font-sans text-sm font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased hover:underline">
                    News
                  </a>


                  {/* </div> */}
                </div>

              </div>

            </div>
          </div>

          <p className='block mt-1  px-2 text-sm font-medium  text-left text-slate-700 transition-all'>Upcoming</p>
        </div>






      </div>

      <div className='relative  bg-white grid grid-flow-col auto-cols-max gap-4 m-4 border rounded-2xl mx-auto py-2 px-4 overflow-x-auto'>

        <div class="flex border rounded-full w-fit py-1 px-6  items-center gap-x-3">
          <img
            src="ind.png"
            alt="Tania Andrew"
            class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
          />
          <div>
            <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              India
            </h6>

          </div>
        </div>


        <div class="flex border rounded-full w-fit py-1 px-6  items-center gap-x-3">
          <img
            src="ind.png"
            alt="Tania Andrew"
            class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
          />
          <div>
            <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              India
            </h6>

          </div>
        </div>



        <div class="flex border rounded-full w-fit py-1 px-6  items-center gap-x-3">
          <img
            src="ind.png"
            alt="Tania Andrew"
            class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
          />
          <div>
            <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              India
            </h6>

          </div>
        </div>


        <div class="flex border rounded-full w-fit py-1 px-6  items-center gap-x-3">
          <img
            src="ind.png"
            alt="Tania Andrew"
            class="relative inline-block h-9 w-9 rounded-full object-cover object-center"
          />
          <div>
            <h6 class="block font-sans text-base font-semibold leading-relaxed tracking-normal text-blue-gray-900 antialiased">
              India
            </h6>

          </div>
        </div>

      </div>

      {/* <div class="text-2xl font-medium"></div> */}





      <div className='md:flex grid-col-3 mx-auto grid md:justify-between gap-y-4'>


        <div class="md:w-72 md:block   w-fit  mx-auto md:mx-0   ">

          <div class="grid items-center justify-between space-y-6 pb-3  ">

            <div class="grid h-full w-full top-0 rounded-xl px-3 py-3 border bg-white  overflow-hidden ">
              <span className='text-2xl font-medium'>POPULAR SERIES</span>

              <div class="flex items-center justify-between pb-3 pt-3  last:pb-0">
                <div class="grid items-center gap-x-3 ">




                  <div class="text-blue-gray-900 block border-b py-2.5 leading-relaxed tracking-normal antialiased hover:underline">Nepal tour of United States of America 2024</div>



                  <div class="text-blue-gray-900 block border-b py-2.5  leading-relaxed tracking-normal antialiased hover:underline">Womens T20 World Cup 2024 🏆</div>



                  <div class="text-blue-gray-900 block border-b py-2.5  leading-relaxed tracking-normal antialiased hover:underline">Womens T20 World Cup 2024 🏆</div>
                </div>
              </div>

              <div class=" items-center text-center text-violet-950 justify-between block tracking-normal antialiased hover:underline ">
                Show More
              </div>



            </div>



            <div class="grid text-2xl font-medium w-full top-0 rounded-xl px-3 py-3 border bg-white  overflow-hidden ">
              Download The App

              <div class="flex  pb-2 pt-4 border-b w-full object-cover    items-center gap-x-6">
                <img
                  src="android.png"
                  alt="Tania Andrew"
                  class="relative inline-block h-fit w-fit  object-center"
                />
                <div>
                  <h6 class="block font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                    Android App
                  </h6>

                </div>
              </div>

              <div class="flex  py-2 w-full object-cover    items-center gap-x-6">
                <img
                  src="ios.png"
                  alt="Tania Andrew"
                  class="relative inline-block h-fit w-fit  object-center"
                />
                <div>
                  <h6 class="block font-sans text-base font-normal leading-relaxed tracking-normal text-blue-gray-900 antialiased">
                    iOS
                  </h6>

                </div>
              </div>

            </div>




            <div class="grid text-2xl font-medium w-full top-0 rounded-xl px-3 py-3 border bg-white  overflow-hidden ">
              Top Rankings

              <div>



                <div class="flex  pb-2 pt-4 border-b w-full object-cover    items-center gap-x-4">
                  <img
                    src="batter.png"
                    alt="Tania Andrew"
                    class="relative inline-block h-10 w-8  object-center"
                  />
                  <div>
                    <p class="block  text-base font-medium leading-relaxed tracking-normal  antialiased">
                      No.1 Batter
                    </p>

                    <p class="block  text-base font-medium leading-relaxed tracking-normal text-blue-900 antialiased">
                      Rohit Sharma
                    </p>

                  </div>
                </div>


                <div class="flex  pb-2 pt-4 border-b w-full object-cover    items-center gap-x-4">
                  <img
                    src="wicket.png"
                    alt="Tania Andrew"
                    class="relative inline-block h-10 w-8  object-center"
                  />
                  <div>
                    <p class="block  text-base font-medium leading-relaxed tracking-normal  antialiased">
                      No.1 Bowler
                    </p>

                    <p class="block  text-base font-medium leading-relaxed tracking-normal text-blue-900 antialiased">
                      Jasprit Bumrah
                    </p>

                  </div>
                </div>



                <div class="flex  pb-2 pt-4 border-b w-full object-cover    items-center gap-x-4">
                  <img
                    src="cricket-ball.png"
                    alt="Tania Andrew"
                    class="relative inline-block h-10 w-8  object-center"
                  />
                  <div>
                    <p class="block  text-base font-medium leading-relaxed tracking-normal  antialiased">
                      No.1 All Rounder
                    </p>

                    <p class="block  text-base font-medium leading-relaxed tracking-normal text-blue-900 antialiased">
                      Hardik Pandya
                    </p>

                  </div>
                </div>


                <div class="flex  pb-2 pt-4 border-b w-full object-cover    items-center gap-x-4">
                  <img
                    src="team.png"
                    alt="Tania Andrew"
                    class="relative inline-block h-10 w-8  object-center"
                  />
                  <div>
                    <p class="block  text-base font-medium leading-relaxed tracking-normal  antialiased">
                      No.1 Team
                    </p>

                    <p class="block  text-base font-medium leading-relaxed tracking-normal text-blue-900 antialiased">
                      India
                    </p>

                  </div>
                </div>


              </div>


              <div class=" items-center text-center  mt-2 font-normal text-base text-violet-950 justify-between block tracking-normal antialiased hover:underline ">
                Show More
              </div>




            </div>







          </div>

        </div>



        <div class=" md:w-3/6 h-fit mx-auto space-y-6">

          <div className='rounded-xl border bg-white px-3 py-3'>
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



          </div>


          <div className='rounded-xl border bg-white px-3 py-3'>
            <div class="text-2xl font-medium border-b pb-3">Latest Polls</div>


            <div className="md:grid grid-cols-2 gap-6 mt-3 w-full justify-items-center">
              {/* First Column */}
              <div class="h-96 w-full max-w-xs rounded-lg border bg-white">
                <div class="w-full rounded-lg rounded-b-none bg-blue-950 text-center">
                  <h5 class="truncate p-3 text-sm tracking-tight text-white dark:text-white">
                    T20 Spring Challenge 2024
                  </h5>
                  <h5 class="text-sm pb-2 tracking-tight text-white dark:text-white">
                    <span>28th Match </span>|<span> 19 Oct 2024 </span>|<span> 09:30 PM</span>
                  </h5>
                </div>
                <div class="mt-4 items-center text-center">
                  Who will win ?
                  <div class="my-4 pl-12 flex items-center ">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      North west
                    </label>
                  </div>
                  <div class="flex items-center pl-12  ">
                    <input
                      checked
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label
                      for="default-radio-2"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Lions
                    </label>
                  </div>
                  <button class="my-5 rounded-lg bg-violet-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800">
                    Submit
                  </button>
                </div>
              </div>

              {/* Second Column */}
              <div class="h-96 w-full max-w-xs rounded-lg border bg-white">
                <div class="w-full rounded-lg rounded-b-none bg-blue-950 text-center">
                  <h5 class="truncate p-3 text-sm tracking-tight text-white dark:text-white">
                    T20 Spring Challenge 2024
                  </h5>
                  <h5 class="text-sm pb-2 tracking-tight text-white dark:text-white">
                    <span>28th Match </span>|<span> 19 Oct 2024 </span>|<span> 09:30 PM</span>
                  </h5>
                </div>
                <div class="mt-4 items-center  text-center">
                  Who will win ?
                  <div class="my-4 pl-12  flex items-center ">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label
                      for="default-radio-1"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Default
                    </label>
                  </div>
                  <div class="flex items-center pl-12">
                    <input
                      checked
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      class="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                    />
                    <label
                      for="default-radio-2"
                      class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Checked state
                    </label>
                  </div>
                  <button class="my-5 rounded-lg bg-violet-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800">
                    Submit
                  </button>
                </div>
              </div>






            </div>


            <div className=' text-center'>
              <button class="mt-5 rounded-lg  bg-violet-900 px-3 py-2  text-sm font-medium text-white hover:bg-blue-800">
                Load More
              </button>


            </div>

            <div className=' text-center'>
              <button class=" mt-2 rounded-lg px-3 py-2 text-fuchsia-950  text-sm font-medium hover:underline">
                See More
              </button>


            </div>








          </div>







        </div>



        <FbConnect />











      </div>







    </div>




  )
}

export default HomePage