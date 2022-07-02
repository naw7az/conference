import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox';
import TileList from '../components/TileList';
import Particles from 'react-tsparticles';
import './App.css';

const App = () => {

  
  
  
     const [conference, setConference] = useState([])
  const [searchfield, setSearchfield] = useState('')

  const particlesOptions = {
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          value_area: 800
        }
      }
    }
  }

  useEffect(() => {
    fetch('https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences')
      .then(response => response.json())
      .then(data => {
        const allConference = data.free.concat(data.paid)
        console.log(data.free)
        setConference(allConference)
      })
      .catch(err => console.log(err, "Something's not working"))
  
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const filteredConference = conference.filter(conf =>{
    return conf.confName.toLowerCase().includes(searchfield.toLowerCase());
  })

  return (
    <div className='app'>
      <Particles className='particles'
        params={particlesOptions}
      />

      {!conference.length ?
        <h1 className='f1'>Loading...</h1> :
      (
        <div className='tc'>
          <div className='sticky'>
            <h1 className='f1'>Upcoming Technical Conferences</h1>
            <SearchBox searchChange={onSearchChange}/>
          </div>
          <TileList conference={filteredConference} />
        </div>
      )
      }
    </div>
  );
}

export default App;