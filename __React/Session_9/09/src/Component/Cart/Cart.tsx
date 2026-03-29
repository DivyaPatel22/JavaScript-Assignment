import { useDispatch, useSelector } from "react-redux"
import type { product } from "../Products/Products"
import { clear_cart, remove_to_cart } from "../01_React-Redux/action"


type RootState = {
    cart : product[]
}

export default function Cart() {

    const cart_val = useSelector((state :RootState) => state.cart)

    const dispatch = useDispatch()

  return (
    <div>
        <p>Cart Products : </p>
        {
            cart_val.map(val => (
                <div key={val.id} style={{border:'1px solid black'}}>
                    <p>{val.id}</p>
                    <p>{val.title}</p>
                    <p>{val.category}</p>
                    <img src={val.thumbnail} alt={val.title} height='100px' width='100px'/>
                    <button type="button" onClick={()=>{dispatch(remove_to_cart(val.id))}}>Remove item</button>
                </div>
            ))
        }
        <button type="button" onClick={()=>{dispatch(clear_cart())}}>Clear Cart</button>
    </div>
  )
}
