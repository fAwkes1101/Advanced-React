import React from "react"
import Example from "./Example"

function App() {
    return (
        <div>
            <Example render={
                function(number) {
                    return (
                        <h1>{number >=0 ? "Positive" : "Negative"}</h1>
                    )
                }
            }/>
        </div>
    )
}

export default App