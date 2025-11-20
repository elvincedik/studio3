function CartPage ({cartItems, removeCart}) {

    console.log("cart items", cartItems);
    

    return(
        <>
        {cartItems.length === 0 ? (<p>your cart is empty</p>): cartItems.map((item)=> (
            <div className="flex items-center" key={item.id}>
                <img 
                    src={item.images} 
                    alt="" 
                    style={{width: "100px", height : "100px"}}
                />
                <span>{item.price}</span>
                <button 
                    className="ms-3 bg-red-100 p-1 rounded-xl hover:cursor-pointer"
                    onClick={ ()=> removeCart(item.id)}
                >
                    remove
                </button>
            </div> 
        ))}
        
        </>
    )

} export default CartPage