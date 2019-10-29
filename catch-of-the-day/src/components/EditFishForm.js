import React from 'react';
import PropTypes from 'prop-types';

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
    static propTypes = {
        fish: PropTypes.shape(
            {
                image: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                desc: PropTypes.string.isRequired,
                status: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired
            }),
        index: PropTypes.string.isRequired,
        updateFish: PropTypes.func.isRequired,
        deleteFish: PropTypes.func.isRequired
    };
    render() {
        const fish = this.props.fish;
        return (
            <div className="fish-edit">
                <input name="name" type="text"  placeholder="Name" onChange={this.handleChange} defaultValue={fish.name}/>
                <input name="price"  type="text" onChange={this.handleChange} placeholder="Price" defaultValue={fish.price}/>
                <select name="status"  placeholder="Status" onChange={this.handleChange} defaultValue={fish.status}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea  name="description"   placeholder="Description" onChange={this.handleChange} defaultValue={fish.desc}/>
                <input  name="image" type="text"  placeholder="Image" onChange={this.handleChange} defaultValue={fish.image}/>
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        );
    }
}

export default EditFishForm;