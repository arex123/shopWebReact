//for adding and deleting items from cart

export const addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}


export const deleteCart = (product) =>{
    return {
        type:"DELITEM",
        payload:product
    }
}