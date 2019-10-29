import React from 'react';
import PropTypes from 'prop-types';
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import fish from "./Fish";
import Login from "./Login";
import firebase from "firebase";
import base, {firebaseApp} from "../base";
class Inventory extends React.Component{
    static propTypes = {
        loadSampleFishes: PropTypes.func.isRequired,
        fishes: PropTypes.object,
        updateFish: PropTypes.func.isRequired,
        deleteFish: PropTypes.func.isRequired,
    };
    state = {
        uid: null,
        owner: null
    };
    authHandler = async (authData) => {
        console.log(authData)
        // 1) Look up the store in the firebase database
        const store = await base.fetch(this.props.storeId,{context: this})
        console.log(store)
        // 2) Claim it if there is no owner
        if (!store.owner){
            //Save owner
            await base.post(`${this.props.storeId}/owner`,
                {data: authData.user.uid});
        }
        // 3) Set the state of the inventory component to reflect current user4
        this.setState({
            uid: authData.user.uid,
            owner: store.owner || authData.user.uid
        })
    };
    authenticate = (provider) => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.authHandler);
    }
    render(){
        // 1. Check if logged in
        if (!this.state.uid){
            return <Login authenticate={this.authenticate}/>;
        }
        if (this.state.uid !== this.state.owner){
            return <div>
                Sorry! You don't have access to this section
            </div>
        }
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