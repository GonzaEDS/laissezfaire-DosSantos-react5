import React, { useState, useEffect } from 'react'
import ItemCount from './ItemCount' 
import ItemList from './ItemList';


function ItemListContainer(props) {
    let itemsDatabase = []
    const [items, setItems] = useState([]);
    console.log(items)

    useEffect(
        () => {
        let promiseItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
    
                    fetch('https://fakestoreapi.com/products')
                    // fetch('https://api.storerestapi.com/products')
                    .then(res => res.json())
                    .then(json => itemsDatabase = [...json])
                    // .then(json => itemsDatabase = json['data'])
                    // .then(data => console.log(data))
                )
                   
            }, 1000);
        })

        promiseItems.then(
            (respuesta) => {
                setItems(respuesta)
            }
        )
    
    
    
    }, [])
    

   
    



    // Function to collect data
  return (
    <>

    <div className='greeting'>{props.greeting}</div>
    <div className='cards-container'>
        <ItemList data={items}/>
    </div>
    
    {/* <ItemCount stock={5} initial={1} unit={1}/>
    <ItemCount stock={50} initial={5} unit={5}/> */}
    </>
    
  )
}

export default ItemListContainer