import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>

            <footer class="bg-black dark:bg-gray-900">

                <div class="mx-auto md:w-full max-w-screen-xl p-4 py-6 md:py-8">
                    <div class="md:flex md:justify-between grid grid-col-2  gap-6 ">

                        {/* Logo */}
                        <div class="mb-6 w-full   md:mb-0">
                            <a href="/" class="">
                                <img src="/logoc.png" class="h-28 me-3" alt="Crick Logo" />
                            </a>
                        </div>

                        {/* 1st Column - Get the App */}
                        <div class="text-base    text-white font-medium w-full rounded-xl overflow-hidden">
                            <p class="mb-4">GET THE APP ON</p>

                            <div class="flex w-full items-center gap-x-6 mb-4">
                                <img
                                    src="/android.png"
                                    alt="Android App"
                                    class="h-auto w-auto"
                                />
                                <h6 class="text-base font-normal text-blue-gray-900">
                                    Android App
                                </h6>
                            </div>

                            <div class="flex w-full items-center gap-x-6">
                                <img
                                    src="/ios.png"
                                    alt="iOS App"
                                    class="h-auto w-auto"
                                />
                                <h6 class="text-base font-normal text-blue-gray-900">
                                    iOS
                                </h6>
                            </div>
                        </div>

                        {/* 2nd Column - Follow Us */}
                        <div class="text-base   text-white font-medium w-full rounded-xl px-3 overflow-hidden">
                            <p class="mb-4">FOLLOW US ON</p>

                            <div class="flex items-center gap-x-3 mb-4">
                                <img
                                    src="/youtube.png"
                                    alt="YouTube"
                                    class="h-auto w-auto"
                                />
                                <a href='#' class="text-base font-normal text-blue-gray-900">
                                    YouTube
                                </a>
                            </div>

                            <div class="flex items-center gap-x-6 mb-4">
                                <img
                                    src="/facebook.png"
                                    alt="Facebook"
                                    class="h-auto w-auto"
                                />
                                <h6 class="text-base font-normal text-blue-gray-900">
                                    Facebook
                                </h6>
                            </div>

                            <div class="flex items-center gap-x-6">
                                <img
                                    src="/instagram.png"
                                    alt="Instagram"
                                    class="h-auto w-auto"
                                />
                                <h6 class="text-base font-normal text-blue-gray-900">
                                    Instagram
                                </h6>
                            </div>
                        </div>

                        {/* 3rd Column - Quick Links */}
                        <div className=' w-full'>
                            <h2 class="mb-6  text-base uppercase  text-white font-semibold">Quick Links</h2>
                            <ul class="text-white  font-normal space-y-6">
                                <li>
                                    <a href="/" class="hover:underline">Home</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Schedule</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Series</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">News</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Videos</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Polls</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <hr class="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

                    <div className='lg:flex grid grid-row-3 mx-auto justify-center'>
                        <div className='text-white px-4 mx-auto'>Love. Play. Cricket. Repeat 🏏</div>
                        <div className=' justify-between '>
                            <Link to="#" className='hover:underline text-white  md:no-underline md:border-r px-2 md:px-6'>About Us</Link>
                            <Link to="#" className='hover:underline text-white md:border-r  md:px-6'>Privacy Policy</Link>
                            <Link to="#" className='hover:underline text-white md:border-r px-2 md:px-6'>Terms of Use</Link>
                            <Link to="#" className='hover:underline text-white md:border-r md:px-6'>Grievance</Link>
                        </div>
                        <div className='text-white mx-auto px-4'>Version 3.4.1</div>
                    </div>
                </div>


            </footer>
        </div>
    )
}

export default Footer