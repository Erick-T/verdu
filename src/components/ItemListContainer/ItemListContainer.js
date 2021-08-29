import React from 'react'
import { ItemList } from './ItemList'
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';


export default function ItemListContainer() {


    return (
        <div className="ItemListContainer">
            {ItemList.map((item, index) => {
                return (
                    <div key={index} className="ItemList" data-id={index}>
                        <img className="imgSize" src={item.img} href="#" alt={item.title}></img>
                        <h2>{item.title}</h2>
                        <h3>Precio: ${item.price}</h3>
                        <h4>Stock: {item.stock}</h4>
                        <h5> {item.description}</h5>
                        <ItemCount stock={item.stock} initial={1} />
                    </div>
                )
            })}

        </div>
    )
}
