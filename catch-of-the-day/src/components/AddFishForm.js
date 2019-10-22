import React from 'react';

class AddFishForm extends React.Component{
    createFish = (event) => {
        //1 Stop the form from submitting
        event.preventDefault()
        console.log("Making a Fish +fish")
        //this.setState(
            

    }
    render(){
        return(
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" type="text" placeholder="Name"/>
                <input name="price" type="text"  placeholder="Price"/>
                <select name="status"   placeholder="Status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="description"   placeholder="Description"/>
                <input name="image" type="text"  placeholder="Image"/>
                <button name="submit" type="submit"> Submit </button>
            </form>
        )
    }
}
export default AddFishForm;