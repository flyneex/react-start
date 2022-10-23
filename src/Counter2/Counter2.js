import { ClickedContext } from "../App"
const Counter2 = props => {
    return (
        <div>
            <h3>Counter2</h3>
            <ClickedContext.Consumer>
                {clicked => clicked ? <p>Clicked</p> : null}
            </ClickedContext.Consumer>
        </div>
    )
}

export default Counter2