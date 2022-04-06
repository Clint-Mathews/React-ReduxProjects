import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import notify from "../../utils/toast.service";

const CartListView = ({item} : any) => {
    const dispatch = useDispatch();
    return <div className="flex place-content-between p-4 my-4 mx-8 border-2 rounded-md">
        <div className="flex">
        <img src={item.img} alt={item.name} className="h-10 w-10 mr-5"/>
        <div className="flex flex-col">
        <label>{item.name}</label>
        <label>Total price : ${item.totalPrice}, Qty : {item.qty}, Price : {item.price}</label>
        </div>
        </div>
        <div>
        <button
    onClick={()=> {dispatch(cartActions.addQty(item.id));notify("Quantity increased").success();}}
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    className="mr-2 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
  >+</button>
   <button
    onClick={()=>{dispatch(cartActions.removeQty(item.id));notify("Quantity decreased").success();}}
    disabled={item.qty === 1}
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    className={`mr-2 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  ${item.qty === 1 ? 'pointer-events-none opacity-60' : ''}`}
  >-</button>
        <button
        onClick={()=>{dispatch(cartActions.removeFromCart(item.id));notify("Product deleted").success();}}
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
  >x</button>
  </div>
    </div>
}

export default CartListView;