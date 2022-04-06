const ShopMeLogo = ({isHeading = false}:any) => {
    return <div className="flex flex-col ml-4 my-2">
        <img className="h-12 w-12" src="https://img.icons8.com/cotton/64/000000/shopping-cart--v1.png"/>
        <label  className="inline-block text-gray-700">Shop Me</label>
        </div>
}

export default ShopMeLogo;