import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import fish from "./Fish";
class Inventory extends React.Component{
    static propTypes = {
        loadSampleFishes: PropTypes.func.isRequired,
        fishes: PropTypes.object,
        updateFish: PropTypes.func.isRequired,
        deleteFish: PropTypes.func.isRequired,
    };
    render(){
        const fishes = this.props.fishes;

        return(
            <div className="inventory">
                Inventory!!!
                {fishes && Object.keys(fishes).map((key) => <EditFishForm key={key}
                                                                          index={key}
                                                                          fish={fishes[key]}
                                                                          updateFish={this.props.updateFish}
                                                                          deleteFish={this.props.deleteFish}
                />)}
                <AddFishForm addFish={this.props.addFish}/>
                <button className="load-sample-fishes" onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
            </div>
        )
    }
}
export default Inventory;