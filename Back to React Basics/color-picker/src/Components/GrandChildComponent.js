// import { useContext } from "react"
import { colorContext } from "../Context"
function GrandChildComponent(props) {
    // const value = useContext(colorContext)
    return (
        <colorContext.Consumer>
            {(value)=><p style={{ color: value.color }}>Color:{value.color}</p>}
        </colorContext.Consumer>
    )
}
export default GrandChildComponent