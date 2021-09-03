import React,{useState} from 'react';


const Categories = ({cat, filterItem }) => {
  
  return (
    <div className="btn-container">
      {cat.map((category,index) => {
        return <button type='button' className='filter-btn' 
        key={index} onClick={()=>filterItem(category)}>
          {category}</button>
      })}
    </div>
  );
};

export default Categories;
