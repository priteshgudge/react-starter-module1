import React from 'react';

class EditFishForm extends React.Component{
    render() {
        const fish = this.props.fish;
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" type="text"  defaultValue={fish.name}/>
                <input name="price"  type="text"  placeholder="Price" defaultValue={fish.price}/>
                <select name="status"  placeholder="Status" defaultValue={fish.status}>
                    <option defaultValue="available">Fresh!</option>
                    <option defaultValue="unavailable">Sold Out!</option>
                </select>
                <textarea  name="description"   placeholder="Description" defaultValue={fish.desc}/>
                <input  name="image" type="text"  placeholder="Image" defaultValue={fish.image}/>
                <button name="submit" type="submit"> Submit </button>
            </form>
        );
    }
}

export default EditFishForm;