import React from 'react';

class AddFishForm extends React.Component{
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef =  React.createRef();
    descriptionRef =  React.createRef();
    imageRef =  React.createRef();
    createFish = (event) => {
        //1 Stop the form from submitting
        event.preventDefault();
        console.log(this.nameRef.current.value);
        //this.setState(
        const fish = {
            name : this.nameRef.current.value,
            price : parseFloat(this.priceRef.current.value),
            status : this.statusRef.current.value,
            description :  this.descriptionRef.current.value,
            image: this.imageRef.current.value,
    };
    this.props.addFish(fish);
    // Refresh Form
        event.currentTarget.reset();
    };
    render(){
        return(
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
                <input name="price" ref={this.priceRef} type="text"  placeholder="Price"/>
                <select name="status" ref={this.statusRef}  placeholder="Status">
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea ref={this.descriptionRef} name="description"   placeholder="Description"/>
                <input ref={this.imageRef} name="image" type="text"  placeholder="Image"/>
                <button name="submit" type="submit"> Submit </button>
            </form>
        )
    }
}
export default AddFishForm;