import { useParams } from "react-router-dom"
import { ITEMS } from "../Data/itemsData"
function ItemDetails() {
    const { itemId } = useParams()
    const item = ITEMS.find((item) => item.id === itemId)
    return (
        <>
            <main><h1>Item Details</h1></main>
            <h2>{item.title}</h2>
            <h3>{item.description}</h3>
        </>
    )
}

export default  ItemDetails