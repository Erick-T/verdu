import { useState, useEffect } from 'react'
import './ItemCount.css'
export default function ItemCount(props) {

    const { stock } = props;


    const [cantidad, setCantidad] = useState(1);
    const [controlStock, setcontrolStock] = useState(!true);
    const [minimo, setminimo] = useState(true)

    useEffect(() => { console.log("Componente montado") }, [])

    const sumar = (stock) => {
        if (cantidad < stock) {
            setminimo(false)
            setCantidad(cantidad + 1)
        }
        else {
            setcontrolStock(true)
        }
    }
    const restar = (stock) => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)

        } else {
            setcontrolStock(true)
            setminimo(true)
        }
        if (cantidad < stock) {
            setcontrolStock(false)
        }

    }

    return (
        <div className="listContainer">
            <div>
                <button disabled={controlStock} onClick={() => sumar(stock)} className="botones" >+</button>
                <h3>{cantidad}</h3>
                <button disabled={minimo} onClick={() => restar(stock)} className="botones">-</button>
            </div>
            <div>
                <button disabled={controlStock} onClick={() => setCantidad(1)} className="botones">Agregar al carrito</button>
            </div>
        </div>
    )

}
