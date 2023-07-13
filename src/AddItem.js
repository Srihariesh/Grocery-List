import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItems,handlesubmit,setNewItems}) => {
  const inputRef=useRef();
  return (
    <form className='addForm' onSubmit={handlesubmit}>
    <label htmlFor='addItem'>AddItem</label>
    <input
    autoFocus
    ref={inputRef}
    id='addItem'
    type='text' 
    placeholder='AddItem'
      required 
      value={newItems}
      onChange={(e)=>{
      
        setNewItems(e.target.value)
      }}
      
      />
      <button
      type='submit'
       aria-label='Add Item' 
       onClick={()=> inputRef.current.focus()}
       >
         <FaPlus />
       
         </button>
    </form>
  )
}

export default AddItem
