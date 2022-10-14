import React from "react"

export default class App extends React.Component {
    state = {
        character: {}
    }
    
    /*
     * Save the Star Wars character object in state! Then,
     * display the `name` property of the character on the
     * screen.
     */
    
    componentDidMount() {
        console.log("componentDidMount")
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => {
                this.setState({character: data})
            })
    }
    /*componentDidMount() lifecycle method in class base componenets is similar
    to useEffect() hook in functional components when dependencies array is empty

    React.useEffect(() => {
        // Your code here
    }, [])
    */
    
    render() {
        console.log("render")
        return (
            <h1>{this.state.character.name}</h1>
        )
    }
}
/*
Console:
›render
›componentDidMount
---delay as data is being fetched---
›render

Note: 2nd time render method was triggred because state was updated.
      And componentDidMount was not called 2nd time as it runs only once 
      whenever the component is painted first on the UIEvent.
*/