import React from 'react'
import ItemList from './ItemList'



const Contant = ({items,handleCheck,handleDelete}) => {
    
  return (
    <>
    {items.length ?(
        <ItemList 
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}/>           
            ):(
        <p style={{marginTop:'rem'}}>list is empty</p>
    )}
    </>
  )
}

export default Contant
