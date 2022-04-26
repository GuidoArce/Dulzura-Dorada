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
            setCarlist([
                ...setCarlist
            ]);
        }
    }

    const clear = () => {
        setCarlist([]);
    }

    const removeItem = (id) => {
        let result = cartList.filter(item => item.idItem != id);
        setCarlist (result);
    }

    const totalItem = (idItem) => {
        let total = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[total].priceItem * cartList[total].cantItem;
    }

    const subTotal = () => {
        let sub = cartList.map(item => totalItem(item.idItem));
        return sub.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const impuestos = () => {
        return subTotal() * 0.21;
    }

    const total = () => {
        return subTotal();
    }

    const cantItems = () => {
        let cantidad = cartList.map(item => item.cantItem);
        return cantidad.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }

    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, cantItems, totalItem, subTotal, impuestos, total}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;