import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

  } 
  return <>
    <section className='container'>
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" value={color}
         onChange={(e) => setColor(e.target.value)} placeholder='#f15025' />
         <button type='submit' >Submit</button>
      </form>
    </section>
    <section>
      <p>list go here</p>
    </section>
  </>
}

export default App
