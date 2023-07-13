import React from 'react'
import LineItem from './LineItem'


const ItemList = ({ items,handleCheck,handleDelete }) => {
  return (
    <ul>
    
    <LineItem 
    
    items={items}
    handleCheck={handleCheck}
    handleDelete={handleDelete}
     />
  
  </ul>
  )
}

export default ItemList
