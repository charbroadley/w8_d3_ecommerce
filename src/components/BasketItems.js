import BasketItem from "./BasketItem"

const BasketItems = ({basket}) => {
    const basketItems = basket.map((item) => {
        return <BasketItem key={item.id} item={item}/>
    })
    return(
        <ul>
        {basketItems}
        </ul>
    )
}

export default BasketItems