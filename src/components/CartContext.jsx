import {createContext, useState} from 'react';

export const CartContext = createContext ();

const CartContextProvider = ({children}) => {
    const [cartList, setCarlist] = useState([])

    const addItem = (item, cantidad) => {
        let found = cartList.find(product => product.idItem === item.id)
        if (found === undefined){
            setCarlist([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.image,
                    nameItem: item.name,
                    priceItem: item.price,
                    cantItem: cantidad
                }
            ]);
        } else {
            found.cantItem += cantidad;
        }
    }

    const clear = () => {
        setCarlist([]);
    }

    const removeItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCarlist (result);
    }

    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;