import React from 'react';

class EditFishForm extends React.Component{
    handleChange = (event) =>{
        console.log(event.currentTarget.value);
        // 1. Update the current fish
        const updatedFish = {...this.props.fish,
                [event.currentTarget.name]: event.currentTarget.value
        };
        // 2. Update the fish in the state
        this.props.updateFish(this.props.index, updatedFish);

    };
    render() {
        const fish = this.props.fish;
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" type="text"  placeholder="Name" onChange={this.handleChange} defaultValue={fish.name}/>
                <input name="price"  type="text" onChange={this.handleChange} placeholder="Price" defaultValue={fish.price}/>
                <select name="status"  placeholder="Status" onChange={this.handleChange} defaultValue={fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea  name="description"   placeholder="Description" onChange={this.handleChange} defaultValue={fish.desc}/>
                <input  name="image" type="text"  placeholder="Image" onChange={this.handleChange} defaultValue={fish.image}/>
                <button name="submit" type="submit"> Submit </button>
            </form>
        );
    }
}

export default EditFishForm;