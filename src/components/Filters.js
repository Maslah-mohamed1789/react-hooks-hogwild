function Filters({ onToggleGreased, onChangeSort }) {
    return (
      <div>
        <button onClick={onToggleGreased}>Toggle Greased</button>
        <button onClick={() => onChangeSort('name')}>Sort by Name</button>
        <button onClick={() => onChangeSort('weight')}>Sort by Weight</button>
      </div>
    );
  }
  
  export default Filters;
  