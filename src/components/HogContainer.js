import React from 'react';
import HogTile from './HogTile'; 

function HogContainer({ hogs, onHideHog }) {
  return (
    <div className="ui grid container"> 
      {hogs.map(hog => (
        <div className="ui eight wide column" key={hog.name}> 
          <HogTile hog={hog} onHide={() => onHideHog(hog.name)} />
        </div>
      ))}
    </div>
  );
}

export default HogContainer;
