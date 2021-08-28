import React from 'react'
import { ItemList } from './ItemList'
import './ItemListContainer.css'



export default function ItemListContainer() {


    return (
        <div className="ItemListContainer">
            {ItemList.map((item, index) => {
                return (
                    <div key={index} className="ItemList">
                        <img className="imgSize" src={item.img} href="#" alt={item.title}></img>
                        <h2>{item.title}</h2>
                        <h3>Precio: ${item.price}</h3>
                        <h5> {item.description}</h5>
                    </div>
                )
            })}
        </div>
    )
}
