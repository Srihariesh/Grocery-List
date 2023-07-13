import React from 'react'

const Footer = ({length}) => {
   
  return (
    <footer style={{ backgroundColor:'black',
      color:'#fff',
      
      textAlign:'center',
      
        
    }}>
        <p>{length} list {length===1?'item':'items'}</p>
      
    </footer>
  )
}

export default Footer
