import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import CricketTeams from './pages/CricketTeams';
import CricketPlayers from './pages/CricketPlayers';
import CricketNews from './pages/CricketNews';
import CricketVideos from './pages/CricketVideos';
import LatestPolls from './pages/LatestPolls';
import CricketSeries from './pages/CricketSeries';
import SeriesView from './pages/SeriesView';
import Fixtures from './components/CricketSeriesComponents/Fixtures';
import CricketPlayerDetail from './pages/CricketPlayerDetail';
import MatchDetailView from './pages/MatchDetailView';




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cricket-teams" element={<CricketTeams />} />
          <Route path="cricket-players" element={<CricketPlayers />} />
          <Route path="cricket-player-detail" element={<CricketPlayerDetail />} />
          <Route path="cricket-news" element={<CricketNews />} />
          <Route path="cricket-videos" element={<CricketVideos />} />
          <Route path="polls" element={<LatestPolls />} />

          <Route path="cricket-series" element={<CricketSeries />} />
          {/* Cricket Series Routes  */}
          <Route path="cricket-series/overview" element={<SeriesView />} />
          <Route path="cricket-series/fixtures" element={<SeriesView />} />
          <Route path="cricket-series/news" element={<SeriesView />} />
          <Route path="cricket-series/videos" element={<SeriesView />} />
          <Route path="cricket-series/squads" element={<SeriesView />} />
          <Route path="cricket-series/stats" element={<SeriesView />} />
          <Route path="cricket-series/venues" element={<SeriesView />} />


          <Route path="match-detail/:id/commentary" element={<MatchDetailView />} />
          <Route path="match-detail/:id/scorecard" element={<MatchDetailView />} />

          <Route path="match-detail/:id/info" element={<MatchDetailView />} />

          <Route path="match-detail/:id/squad" element={<MatchDetailView />} />
          <Route path="match-detail/:id/highlights" element={<MatchDetailView />} />







         














          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;