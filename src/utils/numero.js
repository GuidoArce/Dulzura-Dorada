const Numero = ({number}) => {
    return <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)}</p>
}

export default Numero;