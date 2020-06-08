import React, { useEffect, useState } from 'react';
import './App.scss';

function App() {
  // name
  const [name, setName] = useState('');
  // email
  const [email, setEmail] = useState('');

  return (
    <div className="App">
      <form>
        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)} />
          </li>
          <li>
            <label htmlFor="email">Name</label>
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
          </li>
        </ul>
      </form>
    </div>
  );
}

export default App;
