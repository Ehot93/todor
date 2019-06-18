import React from 'react'

const Products = (props)=>{
return(
    <div className="products">
        <h2>{props.name}</h2>
        <p>Цена: {props.price.toLocaleString("en-US",{style:"currency", currency: "USD"})}</p>
        <p>Описание: {props.description}</p>
    </div>
)
}
export default Products;