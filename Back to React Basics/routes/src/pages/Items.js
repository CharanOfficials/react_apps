import { Link } from "react-router-dom"
import {ITEMS} from '../Data/itemsData'
function Items() {
    return (
        <>
            <main><h1>Items Page</h1></main>
            <ul>
                {ITEMS.map((item, i) => (
                    <Link to={`/items/${item.id}`}>
                        <li key={i}>{item.title}</li>
                    </Link>
                ))}
            </ul>
        </>
    )
}
export default Items