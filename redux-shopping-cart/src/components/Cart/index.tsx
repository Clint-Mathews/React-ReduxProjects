import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { cartActions } from "../../store/cart-slice";
import notify from "../../utils/toast.service";

const Cart = () => {
    const count = useSelector((state : any) => state.cart.totalQuantity);
    const dispatch = useDispatch();
    return <div className="">
    <button onClick={()=> dispatch(cartActions.setShowHideCart())} type="button" className="mr-4 my-2 inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Cart{count ? " - " + count : ""}</button>
    <button
    onClick={()=>{dispatch(authActions.logout());notify("Logged out").success();}}
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    className="mr-4 my-2 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
  >Logout</button>
    </div>
}

export default Cart;