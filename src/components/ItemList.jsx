import React from "react";

function ProductCard(props){
    const title = props.title
    const price = props.price
    const image = props.image

    return (
        <div className="product-card">
            
            <div className="product-card-image">
                <img src={image} alt={ title + ' ' + 'image'} />

            </div>
            <div className="product-card-body">
                <div className="product-card-price">
                    <p>
                        {price}
                    </p>
                </div>
                <div className="product-card-title">
                    <h3>{title}</h3>
                </div>
                <button className="buy-btn">Buy</button>

            </div>
            


        </div>
    )

}

function ItemList(props) {

    const productsArray = props.data
    const testItem = props.data[0]
    return (
        <>  
        {/* <div>{ testItem.image }</div> */}
        {/* <ProductCard title={testItem.title} image={testItem.image} description={testItem.description}/> */}

        { productsArray.map(product =>{

            return <ProductCard title={product.title} image={product.image} price={product.price}/>
            
            }) 
        }

        {/* <div>{JSON.stringify(props.data)}</div> */}
        </>

    )
}

export default ItemList