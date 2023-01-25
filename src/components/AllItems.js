import Item from "./Item"

const AllItems = ({allProducts, addToBasket}) => {
    const pizzas = allProducts.map((pizza) => {
        return <Item key={pizza.id} pizza={pizza} addToBasket={addToBasket}></Item>
    })

    return(
        <ul>
        {pizzas}
        </ul>
    )
}

export default AllItems