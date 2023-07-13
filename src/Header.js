import React from 'react'

const Header = ({title}) => {
  return (

    <header style={
      {backgroundColor:'black',
      color:'#fff',
      
    }}>

    <section style={{display:"flex"}}>
    <img src={'logo.png'} height="30px" width="30" />
         <section > {title}
      </section>
      </section>
    </header>
    
  )
}
Header.defaultProps={
  title:'hello'
}

export default Header
