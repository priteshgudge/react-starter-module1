import React from 'react';
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from './Fish'
import base from "../base";

class App extends React.Component{
    state = {
        fishes: {},
        order: {}
    };
    componentDidMount() {
        const {params} = this.props.match;
        // 1. First reinstate localStorage
        const localStorageRef = localStorage.getItem(`store:${params.storeId}`);
        if (localStorageRef){
            this.setState({order: JSON.parse(localStorageRef)});
        };
        this.ref = base.syncState(`${params.storeId}/fishes`,{
            context: this,
            state:'fishes'
            });
    }

    componentDidUpdate(){
        localStorage.setItem(
            `store:${this.props.match.params.storeId}`,
            JSON.stringify(this.state.order)
        );
    }

    componentWillUnmount() {
       base.removeBinding(this.ref)
    }

    addFish = (fish) =>{
        console.log("Adding a fish");
        // 1. Take a copy of the existing state
        const fishes = {...this.state.fishes};
        // 2. Add New fish to fishes varaiable
        fishes[`Fish${Date.now()}`] = fish;
        // 3. Set new fishes object to state
        this.setState({fishes:fishes})
    };

    updateFish = (key, fish) => {
        // 1. Take copy of the current state
        const fishes = {...this.state.fishes};
        // 2. Update the state with the fish
        fishes[key] = fish;
        // 3. Set the state back
        this.setState({fishes: fishes});
    };
    deleteFish = (key) => {
        // 1. Take copy of the current state
        const fishes = {...this.state.fishes};
        // 2. Update the state with the fish
        delete fishes[key];
        // 3. Set the state back
        this.setState({fishes: fishes});
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
            <Order fishes={this.state.fishes} order={this.state.order}/>
            <Inventory addFish={this.addFish}
                       updateFish={this.updateFish}
                       deleteFish={this.deleteFish}
                       loadSampleFishes={this.loadSampleFishes}
                        fishes={this.state.fishes}
            />

            </div>
                );
    }
}

export default App;
