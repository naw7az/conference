import React from 'react';
import Tile from './Tile';
import './TileList.css'

const TileList = ({ conference }) => {
  return (
    <div className='tiles'>
      {
        conference.map((conf, i) => {
          return (
            <Tile
              image={conf.imageURL}
              startDate={conf.confStartDate}
              endDate = {conf.confEndDate}
              key={i}
              name={conf.confName}
              place={conf.city}
              link={conf.confRegUrl}
              entryType={conf.entryType}
              />
          );
        })

      }
    </div>
  );
}

export default TileList;