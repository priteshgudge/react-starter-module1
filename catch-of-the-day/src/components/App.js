import React from 'react';
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";

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
        alert("Loading Samples");
        this.setState({fishes: sampleFishes})

    }
    render() {
        return(
            <div className="catch-of-the-day">

                    <Header tagline="Fresh SeaFood Market"/>
                    <Order/>
                    <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>

            </div>);
    }
}

export default App;
