import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
const [menuItems, setMenuItems] = useState(items)
const [categories, setCategories] = useState([])

const filterItems = (category) => {
  const newItems = items.filter((item) => item.category === category)
  setMenuItems(newItems)
};
  return <main>
    <section className='menu section'>
      <div className='title'>
        <h2>Our Menu</h2>
         <button className='underline'></button>
      </div>
      <Categories filterItem = {filterItems}/>
       < Menu items={menuItems}/>
    </section>
      
     
      {/* <section>
        {display.map ((display) =>{
          return < Menu key = {display.id} {...display}/>
        })}
        
      </section> */}
     
    </main>
    
  ;
}

export default App;
