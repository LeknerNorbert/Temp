import { Component } from "react";
import './BuildingArea.css'

class BuildingArea extends Component {
    
    
    render() {
        return (
            <div
                className="building-area" 
                onClick={() => this.props.onChangeTile(this.props.coordX, this.props.coordY, this.props.selected)}>
            </div>
        )
    }
}

export default BuildingArea;