
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import Cart from "../../components/Cart";
import CartView from "../../components/CartView";
import Product from "../../components/Product";
import ShopMeLogo from "../../components/ShopMeLogo";
import ProductModel from "../../models/ProductModel";
import { cartActions } from "../../store/cart-slice";
import notify from "../../utils/toast.service";
const Landing = () => {
    const products : ProductModel[] = useSelector((state : any) => state.products.products);
    const totalPrice = useSelector((state : any) => state.cart.totalPrice);
    const showCart = useSelector((state : any) => state.cart.showCart);
    const totalQty = useSelector((state : any) => state.cart.totalQuantity);
    const dispatch = useDispatch();
    const placeOrder = () => {
        notify("Order placed").success();
        dispatch(cartActions.placeOrder());
    }
    return <div className="flex flex-col">
    <div className="flex space-x-2 justify-between items-center border-b-2 ">
    <ShopMeLogo />
    <Cart />
    </div>
    <div className="grid grid-cols-4 gap-4">
    {
        products.map((item) =>
            <Product key={item.id} name={item.name} id={item.id} img = {item.img} price={item.price}/>
    )
    }
    </div>
    <div className="flex flex-col place-items-end border-y-2 my-2 py-2">
        <h3 className="mr-6">Total: ${totalPrice}</h3>
        <button onClick={placeOrder} disabled={totalQty === 0} type="button" className={`mr-4 my-2 inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out ${totalQty === 0 ? "pointer-events-none opacity-60" : ""}`}>Place Order</button>
    </div>
    {showCart && <CartView />}
    </div>
}
export default Landing;