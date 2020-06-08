import React, { useEffect, useState } from 'react';
import './App.scss';

function App() {
  // name
  const [name, setName] = useState('');
  return (
    <div className="App">
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="text" id="name" onChange={(e) => setName(e.target.value)} />
      </form>
    </div>
  );
}

export default App;
