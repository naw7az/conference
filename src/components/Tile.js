import React from 'react';
import './Tile.css'

const Tile = ({ image, startDate, endDate, name, place, link, entryType }) => {

  const imageExists = (image_src) => {

    while (image_src.includes('"')) {
      image_src = image_src.replace('"', '')
    }
    if (image_src.slice(0, 1) === 'h'){
      return image_src;
    }
    else {
      return 'https://image.freepik.com/free-photo/brick-wall-painted-white_1194-7526.jpg'
    }
  }

  return (
    <div className='tc grow bg-white br3 pa3 ma2 dib bw2 shadow-5 card'>
      <img alt='conference' src={imageExists(image)} width='100%' height='200px'/>
      <div>
        <h3> {name} </h3>
        <p> Starting Date: {startDate} </p>
        <p> Ending Date: {endDate} </p>
        <p> Place: {place? place: 'N/A'} </p>
        <p> Entry: <strong>{entryType}</strong> </p>
        <a href={link} target='_blank' rel="noopener noreferrer">Apply Here</a>
        
      </div>
    </div>
  );
}

export default Tile;
