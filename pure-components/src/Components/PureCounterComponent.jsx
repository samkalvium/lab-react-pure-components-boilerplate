import React, { PureComponent } from 'react'

class PureCounterComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            toggle: false
        }
    }

    toggleChange = () => {
        this.setState((prevstate) => {
            return {
                toggle: !prevstate.toggle
            }
        })

    }

    increase = () => {
        if (this.state.toggle == true) {
            this.setState((prevstate) => {
                return {
                    count: prevstate.count + 1
                }
            })
        }
    }

    render() {
        const count = this.state.count
        return (
            <div>
                <h1>Pure Component</h1>
                <h3>{count}</h3>
                <button onClick={this.toggleChange}>Set toggle</button>
                <button onClick={this.increase}>Counter</button>
            </div>
        )
    }
}

export default PureCounterComponent
