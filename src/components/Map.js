import EmptyField from "./EmptyField";
import Church from "./Church";
import "./Map.css"

const { Component } = require("react");

class Map extends Component {
    
    constructor() {
        super()
        this.state = {
            tiles: [
                [{type: 'E'}, {type: 'E'}, {type: 'E'}, {type: 'E'}, {type: 'E'}],
                [{type: 'E'}, {type: 'E'}, {type: 'E'}, {type: 'E'}, {type: 'E'}],
                [{type: 'E'}, {type: 'E'}, {type: 'E'}, {type: 'E'}, {type: 'E'}],
                [{type: 'E'}, {type: 'E'}, {type: 'E'}, {type: 'E'}, {type: 'E'}],
                [{type: 'E'}, {type: 'E'}, {type: 'E'}, {type: 'E'}, {type: 'E'}],
            ]
        }
    }

    onChangeTile = (x, y) => {
        this.setState(state => {
            return state.tiles[x][y] = {type: 'C'}
        })
    }

    render() {
        return (
            <div>
                <div className="map">
                    {this.state.tiles.map((tile, x) => (
                        tile.map((column, y) => (
                            column.type == 'E' ? <EmptyField onChangeTile={this.onChangeTile} coordX={x} coordY={y}/> : <Church />
                        ))
                    ))}
                </div>
            </div>
        )
    }
}

export default Map;