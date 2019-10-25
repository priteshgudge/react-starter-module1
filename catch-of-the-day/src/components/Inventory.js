import React from 'react';
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import fish from "./Fish";
class Inventory extends React.Component{
    render(){
        const fishes = this.props.fishes;
        return(
            <div className="inventory">
                Inventory!!!
                {fishes && Object.keys(fishes).map((key) => <EditFishForm key={key} fish={fishes[key]}/>)}
                <AddFishForm addFish={this.props.addFish}/>
                <button className="load-sample-fishes" onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>
        )
    }
}
export default Inventory;