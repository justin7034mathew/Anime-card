import React from 'react'
import './App.css'
import HomeCard from './components/HomeCard'
import Navbar from './components/Navbar'
import AnimeImage from './accet/-5889777563579035679_120.jpg'
import AnimeImagetwo from './accet/-6057778348983169205_121.jpg'
import AnimeImagethree from './accet/-6188408967542191636_121.jpg'


const App = () => {
  return (
    <div>
        <Navbar />
        <HomeCard AnimeImage={AnimeImage}
            tittle='Naruto'
            AnimeImagetwo={AnimeImagetwo}
            Cardtittle='Attack on tittan'
            AnimeImagethree={AnimeImagethree}
            Cardtittlethree='Saga'
         />
    </div>
  )
}

export default App