import React from 'react';
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from './Fish'

class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    };

    addFish = (fish) =>{
        console.log("Adding a fish");
        // 1. Take a copy of the existing state
        const fishes = {...this.state.fishes};
        // 2. Add New fish to fishes varaiable
        fishes[`Fish${Date.now()}`] = fish;
        // 3. Set new fishes object to state
        this.setState({fishes:fishes})
    };

    loadSampleFishes = () => {
        //alert("Loading Samples");
        this.setState({fishes: sampleFishes})
    };

    addToOrder = (key) => {
        // 1. take copy of state
        const order = {...this.state.order};
        // 2. Add/Update Quantity to State
        order[key] = order[key]?order[key] + 1: 1;
        // 3 Set State
        this.setState({order});
    }
    render() {
        return(
            <div className="catch-of-the-day">
             <div className="menu">
                <Header tagline="Fresh SeaFood Market"/>

                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key =>
                            <Fish
                                key={key}
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}/>)}
                    </ul>
             </div>
            <Order/>
            <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>

            </div>
                );
    }
}

export default App;
