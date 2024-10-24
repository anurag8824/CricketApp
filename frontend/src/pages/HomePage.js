import React from 'react'
import './CustomScrollbar.css';
import FbConnect from '../components/FbConnect';
import { Link } from 'react-router-dom';
import CricketNews from './test';
import HomeScroller from '../components/HomeScroller';
import HomePopularSeries from '../components/HomePopularSeries';
import HomeTopStories from '../components/HomeTopStories';
import HomePolls from '../components/HomePolls';
import HomeAllTeam from './HomeAllTeam';

const HomePage = () => {
  return (
    <div className='h-full md:mx-16 m-2'>

      <HomeScroller />



      <HomeAllTeam />
     

      {/* <div class="text-2xl font-medium"></div> */}





      <div className='md:flex grid-col-3 mx-auto grid md:justify-between gap-y-4'>


        <HomePopularSeries />

        <div class=" md:w-3/6 h-fit mx-auto space-y-6">

          <HomeTopStories />

          <HomePolls />

        </div>

        <FbConnect />


      </div>









    </div>




  )
}

export default HomePage