import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['All', ...new Set (items.map((item)=>
  item.category))];

function App() {
const [menuItems, setMenuItems] = useState(items)
const [categories, setCategories] = useState(allCategories)

const filterItems = (category) => {
  if (category === 'All'){
    setMenuItems(items);
    return;
  }
  const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
};
  return <main>
    <section className='menu section'>
      <div className='title'>
        <h2>Our Menu</h2>
         <button className='underline'></button>
      </div>
      <Categories cat={categories} filterItem = {filterItems} items={menuItems}/>
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
