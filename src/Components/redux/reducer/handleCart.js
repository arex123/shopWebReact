const cart = []

const handleCart = (state=cart,action)=>{
    const product = action.payload;
    switch(action.type){
        case "ADDITEM":
            //checking if item is already in the cart
            const isPresent = state.find((itm)=> itm.id===product.id);
            if(isPresent){
                return state.map((itm)=>
                itm.id===product.id ? { ...itm,qty:itm.qty+1}:itm);
            }else{
                const product = action.payload;
                return[
                    ...state,{...product,qty:1}
                ]
            }
            break;

        case "DELITEM":
            const exist = state.find((item)=> item.id===product.id)
            if(exist.qty===1){
                return state.filter((item)=>item.id!==exist.id);
            }else{
                return state.map((item)=>
                    item.id === product.id ? {...item,qty:item.qty-1}:item
                );
            }
            break;

        default:
            return state;
            break;
            
    }

}
export default handleCart