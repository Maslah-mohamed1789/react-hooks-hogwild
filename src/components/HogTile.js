import React, { useState } from 'react';

function HogTile({ hog, onHide }) {
  const [showDetails, setShowDetails] = useState(false);
  const { name, specialty, weight, greased, image, 'highest medal achieved': highestMedal } = hog;

  const toggleDetails = () => setShowDetails(prev => !prev);

  return (
    <div className="ui card" onClick={toggleDetails}> 
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="content">
        <div className="header">{name}</div>
        {showDetails && (
          <div className="extra content">
            <p>Specialty: {specialty}</p>
            <p>Weight: {weight}</p>
            <p>Greased: {greased ? 'Yes' : 'No'}</p>
            <p>Highest Medal Achieved: {highestMedal}</p>
            <button className="ui button" onClick={(e) => { e.stopPropagation(); onHide(); }}>
              Hide
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default HogTile;
