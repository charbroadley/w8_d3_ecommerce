const Item = ({pizza, addToBasket}) => {
    const handleClick = (evt) => {
        addToBasket(evt.target.value)
    }
    return(
        <>
        <li>Pizza name: {pizza.name}<br/>
            Price: {pizza.price}
            <button onClick={handleClick} value={pizza.id}>Add to basket</button>
        
        </li>
        </>
    )
}

export default Item