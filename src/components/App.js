import React, { useState } from 'react';
import hogs from '../porkers_data';
import Nav from './Nav';
import Filters from './Filters';
import HogContainer from './HogContainer';
import HogForm from './HogForm';
import 'semantic-ui-css/semantic.min.css';


function App() {
  const [greasedOnly, setGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [hiddenHogs, setHiddenHogs] = useState([]);
  const [hogList, setHogList] = useState(hogs);

  // Filtered and sorted hog list based on current state
  const displayedHogs = hogList
    .filter(hog => !greasedOnly || hog.greased)
    .filter(hog => !hiddenHogs.includes(hog.name))
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'weight') return a.weight - b.weight;
      return 0;
    });

  function toggleGreased() {
    setGreasedOnly(prev => !prev);
  }

  function changeSort(newSort) {
    setSortBy(newSort);
  }

  function hideHog(name) {
    setHiddenHogs(prev => [...prev, name]);
  }

  function addHog(newHog) {
    setHogList(prev => [...prev, newHog]);
  }

  return (
    <div>
      <Nav />
      <Filters onToggleGreased={toggleGreased} onChangeSort={changeSort} />
      <HogContainer hogs={displayedHogs} onHideHog={hideHog} />
      <HogForm addHog={addHog} />
      
    </div>
  );
}

export default App;
