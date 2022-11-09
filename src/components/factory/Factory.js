import { Component } from "react"
import './Factory.css'

class Factory extends Component {
    constructor() {
        super()
        this.state = {
            level: 1
        }
    }
    
    onLevelUp = () => {
        this.setState(previous => {
            return {level: previous.level < 3 ? previous.level + 1 : previous.level}
        })
    }

    render() {
        return (
            <div className="factory" onClick={this.onLevelUp}>
                Factory<br />
                Level: {this.state.level}
            </div>
        )
    }
}

export default Factory;