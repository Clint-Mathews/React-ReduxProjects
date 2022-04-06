import { useSelector } from "react-redux";
import CartListView from "../CartListView";

const CartView = () =>{
    const cartList = useSelector((state:any) => state.cart.itemList);
    return <>
    {cartList.map((item:any) => <CartListView item={item}/>)}
    </>
}

export default CartView;