import React from "react"

function Example(props) {
    return (
        <div>
            {props.render(42)}
        </div>
    )
}

export default Example