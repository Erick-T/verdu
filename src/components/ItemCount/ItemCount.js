import { useState } from 'react'
import './ItemCount.css'
export default function ItemCount(stock, initial) {



    let [contador, setContador] = useState(initial)

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        setContador(contador - 1)
    }

    const agregar = () => {
        if (stock > 0) {
            console.log("agregado")
        }
    }

    return (

        <div>
            <label>{contador}</label>
            <button disabled={contador > stock ? true : false} onClick={sumar}>+</button>
            <button disabled={contador = 1 ? true : false} onClick={restar}>-</button>
            <br />
            <button disabled={stock > 0 ? false : true} onClick={agregar}>Agregar al carrito</button>
        </div>
    )

}
