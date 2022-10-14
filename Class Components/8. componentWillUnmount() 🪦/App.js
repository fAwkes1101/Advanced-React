import React from "react"

export default class WindowTracker extends React.Component {
    state = {
        windowWidth: window.innerWidth
    }
    
    watchWidth = () => {
        this.setState({windowWidth: window.innerWidth})
    }
    
    componentDidMount() {
        window.addEventListener("resize", this.watchWidth)
    }
    

    /*
    When we unmout a component from the UI and if some subscriptions were attached to it left un-removed
    then this type of warning will come. To avoid such warning we have to remove the side effects in 
    componentWillUnmount() as it runs whenever component is removed from the UI.
    
    !Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates 
    a memory leak in your application. To fix, cancel all subscriptions and asynchronous 
    tasks in the componentWillUnmount method. at WindowTracker (exe1.bundle.js:73:5)
    */

    componentWillUnmount() {
        window.removeEventListener("resize", this.watchWidth)
        // Disconnect any subscriptions
    }
    
    render() {
        return (
            <h1>Window width: {this.state.windowWidth}px</h1>
        )
    }
}
