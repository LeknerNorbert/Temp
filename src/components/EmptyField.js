import { Component } from "react";
import './EmptyField.css'

class EmptyField extends Component {
    render() {
        return (
            <div className="empty-field" onClick={() => this.props.onChangeTile(this.props.coordX, this.props.coordY)}>
                
            </div>
        )
    }
}

export default EmptyField;