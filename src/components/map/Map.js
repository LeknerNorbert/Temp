import Barrier from "../barrier/Barrier";
import BuildingArea from "../building-area/BuildingArea";
import Church from "../church/Church";
import Factory from "../factory/Factory"
import "./Map.css"

const { Component } = require("react");

class Map extends Component {
    
    constructor() {
        super();
        this.state = {
            tiles: [
                [{type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}],
                [{type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}],
                [{type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}],
                [{type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}],
                [{type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}],
                [{type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}],
                [{type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}],
                [{type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}],
                [{type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}],
                [{type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}, {type: 'BA'}],
            ],
            selected: 'C'
        };
    }

    onChangeTile = (x, y, selected) => {
        this.setState(state => {
            return state.tiles[x][y] = {type: selected};
        });
    }

    onChangeSelected(selected) {
        this.setState({selected: selected});
    }

    render() {
        return (
            <div>
                <div className="map">
                    {
                        this.state.tiles.map((row, x) => (
                            row.map((column, y) => (
                                (column.type == 'B') ? <Barrier /> :
                                (column.type == 'BA') ? <BuildingArea onChangeTile={this.onChangeTile} coordX={x} coordY={y} selected={this.state.selected}/> :
                                (column.type == 'C') ? <Church /> :
                                <Factory />
                            ))
                        ))
                    }
                </div>
                <div>
                    <button 
                        onClick={() => this.onChangeSelected('C')} 
                        style={{ backgroundColor: this.state.selected == 'C' ? '#FFA400' : 'white' }}>
                        Church
                    </button>
                    <button 
                        onClick={() => this.onChangeSelected('F')} 
                        style={{ backgroundColor: this.state.selected == 'F' ? '#FFA400' : 'white' }}>
                        Factory
                    </button>
                </div>
            </div>
        );
    }
}

export default Map;