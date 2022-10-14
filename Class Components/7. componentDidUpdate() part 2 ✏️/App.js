import React from "react"

export default class App extends React.Component {
    state = {
        count: 1,
        character: {}
    }
    
    add = () => {
        this.setState(prevState => ({count: prevState.count + 1}))
    }
    
    subtract = () => {
        this.setState(prevState => ({count: prevState.count - 1}))
    }
    
    getStarWarsCharacter = (id) => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => res.json())
            .then(data => this.setState({character: data}))
    }
    
    componentDidMount() {
        this.getStarWarsCharacter(this.state.count)
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("Updated")
        if(prevState.count !== this.state.count) {
            this.getStarWarsCharacter(this.state.count)
        }
    }
    
/*console:
    If prvState condition was not used on line 29.
    componentDidMount() calls getStarWarsCharacter() that updates state, that leads to
    componentDidUpdate() run, which updates state (without checking prevState) that again
    calls to getStarWarsCharacter() updates state -> componentDidUpdate -> getStarWarsCharacter()..so on
    ›Updated
    ›Updated
    ›Updated
    ...infinte
    --------------------------------------------------------------------------------------------
    To prevent this infitine loop componentDidUpdate(prevProps, prevState) receives the prevProps and
    prevState as parameters using them we can check if prevState and prevProp was changed or not.
    On that basis we can control the call to state update method  getStarWarsCharacter().
    ›Updated

*/

    render() {
        return (
            <>
                <div className="counter">
                    <button className="counter--minus" onClick={this.subtract}>–</button>
                    <div className="counter--count">
                        <h1>{this.state.count}</h1>
                    </div>
                    <button className="counter--plus" onClick={this.add}>+</button>
                </div>
                <h1>{this.state.character.name || "Loading..."}</h1>
            </>
        )
    }
}
