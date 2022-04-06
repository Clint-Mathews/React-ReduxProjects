import { useDispatch } from "react-redux";
import ProductModel from "../../models/ProductModel";
import { cartActions } from "../../store/cart-slice";
import notify from "../../utils/toast.service";

const Product = ({img, name, id, price} : ProductModel) => {
    const dispatch = useDispatch();
    const addToCart = () => {
        const prodData : ProductModel = {
            id : id,
            name : name,
            img : img,
            price : price
        };
        dispatch(cartActions.addToCart(prodData));
        notify("Added to cart").success();
    }
    return <>
        <div className="flex flex-col items-center m-2 p-1 shadow-lg">
        <img className="w-40 h-40" alt="Ha" src={img} />
        <label  className="inline-block text-gray-700">{name}</label>
        <label  className="text-sm inline-block text-gray-700">Price - ${price}</label>
        <button onClick={addToCart} type="button" className="mr-4 my-2 inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Add to cart</button>
    </div>
    </>
}

export default Product;
