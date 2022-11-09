import { Component } from "react";
import './Church.css'

class Church extends Component {
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
            <div className="church" onClick={this.onLevelUp}>
                Church<br />
                Level: {this.state.level}
            </div>
        )
    }
}

export default Church;