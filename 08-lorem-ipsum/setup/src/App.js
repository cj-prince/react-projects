import React, { useState } from 'react';
import data from './data';
function App() {
  
  const [count, setCount] = useState(0);
  const [text, setText] = useState([])

  const handleSubmit =((e) => {
    e.preventDefault();
  })
  
  return (
    <section className='section-center'>
      <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='lorem-form'> paragraphs</label>
        <input type="text" name='amount' id='amount'  
        value={count} onChange={(e) => setCount(e.target.value)}/>
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, 
          quo ipsum? Suscipit quis facere deserunt enim optio porro,
           illum temporibus cum accusantium sit! Beatae ipsam voluptatem architecto quo eos. Tempora!</p>
      </article>

    </section>
    )
}

export default App;
