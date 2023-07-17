// import React from 'react'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import Home from './Home'
// import College from './College'
// const name=createBrowserRouter([
//   {
//     path:"/",
//     element:<Home/>
//   },
//   {
//     path:"/College",
//     element:<College />
//   }
// ])
// const App = () => {
//   return (
//     <div>
//       <RouterProvider router={name}/>
//     </div>
//   )
// }

// export default App
import React from 'react'
import Header from './Header'

import Contant from './Contant'
import Footer from './Footer'
import { useState ,useEffect} from 'react'
import AddItem from './AddItem'
import SearchItem from './SearchItem'
import apiRequest from './apiRequest'
import axios from 'axios'



const App = () => {
  const API_URL='https://64af74c1c60b8f941af418b1.mockapi.io/api/items';
  const [items,setItems]= useState([]); 
  const [newItems,setNewItems]=useState('');
  const [search,setSearch]=useState('');
  const[fetchError,setFetchError]=useState(null);
  const[isLoading,setIsLoading]=useState(true);
  

  useEffect(()=>
  {const fetchItems=async()=>
  {
   
    try{
      const response =await fetch(API_URL);
      if(!response.ok) throw Error("not as expected");
      const listItems =await response.json();
      //console.log(listItems);
      setItems(listItems);
      setFetchError(null);
    }catch(err)
    {
      setFetchError(err.message);
    }
    finally {
       setIsLoading(false);
    }
  }
  setTimeout(()=>
  {
    (async()=> await fetchItems())();
  },200)
},[])
const addItem = async (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = { id, checked: false, item };
  const listItems = [...items, myNewItem];
  setItems(listItems);

  const postOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(myNewItem)
  }
  const result = await apiRequest(API_URL, postOptions);
  if (result) setFetchError(result);
}
const handleCheck= async(id)=>{
    const listItems= items.map((item)=> item.id=== id? 
    {...item,checked:!item.checked}:item);
    setItems(listItems);
    const myItem=listItems.filter((item)=>item.id===id);
    const updateOptions={
      method: 'PUT',
      headers: {
        'Content-Type' :'application/json'
      },
    //   const response = await axios.get('https://mockapi.com/api/endpoint'); // Replace with your mock API endpoint
    // setData(response.data);
      body:JSON.stringify({checked:myItem[0].checked })
    };
    const reqUrl =`${API_URL}/${id}`;
    const result = await apiRequest(reqUrl,updateOptions);
    if(result) setFetchError(result);
}
const handleDelete= async(id)=>
{
    const listItems=items.filter((item)=>item.id!==id);
    setItems(listItems);
    const deleteOptions={method:'DELETE'};
    const reqUrl =`${API_URL}/${id}`;
    const result = await apiRequest(reqUrl,deleteOptions);
    if(result) setFetchError(result);
}
const handlesubmit=(e)=>{
    e.preventDefault()
    // console.log("vanten")
    if(!newItems) return;
    console.log(newItems)
    addItem(newItems);
    console.log(items)
    setNewItems('')
    // apiRequest()
    }

    return (
    <div className="App">
    <Header title="Grocery list" />   
    <AddItem 
        newItems={newItems}
        handlesubmit={handlesubmit}
        setNewItems={setNewItems}
   />
   <SearchItem 
        search={search}
        setSearch={setSearch}
   />
   <main>
   {isLoading && <p> Loading Items...</p>}
   {fetchError && <p style={{color:"red"}}>{`Error: ${fetchError}`}</p>}
    {!fetchError && !isLoading &&<Contant
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />}
      </main>
    <Footer 
        length= {items.length}
    />
   
      
    </div>
  )
}

export default App
