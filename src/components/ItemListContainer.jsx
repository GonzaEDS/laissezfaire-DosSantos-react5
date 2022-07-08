import React from 'react'
import ItemCount from './ItemCount' 


function ItemListContainer(props) {
    // Function to collect data
  return (
    <>

    <div className='greeting'>{props.greeting}</div>
    <ItemCount stock={5} initial={1} unit={1}/>
    <ItemCount stock={50} initial={5} unit={5}/>
    </>
    
  )
}

export default ItemListContainer