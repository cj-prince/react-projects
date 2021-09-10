import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
const [name, setName] = useState('');
const [list, setList] = useState([]);
const [isEditing, setIsEditing] = useState(false);
const [alert, setAlert] = useState({show:false, msg:'', type: ''});
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return <section className='section-center'>
    <form className='grocery-form' onChange={handleSubmit}>
      {alert.show && <Alert />}
      <h3>grocery bub</h3>
      <div className="form-control">
        <input type="text" className='grocery' placeholder='eg. beans' 
         value={name} onChange={(e)=> setName(e.target.value)}/>
        <button className='submit-btn' type='submit'>{isEditing? 'edit' : 'submit'}</button>
      </div>
    </form>
    <div className='grocery-container'>
    <List />
    <button className='clear-btn'>Clear items</button>
    </div>
  </section>
}

export default App
