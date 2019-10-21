import React from 'react';
import {getFunName} from '../helpers'

class StorePicker extends React.Component {
    storeNameInput = React.createRef()
    goToStore = (event) =>{
        event.preventDefault()
        console.log(this.storeNameInput.current.value)
        const storeValue = this.storeNameInput.current.value;
        this.props.history.push(`/store/${storeValue}`)

    }


    render() {
        return (
          <form className='store-selector' onClick={this.goToStore}>
              <h2> Please enter a store</h2>
              <input type="text"
                     required
                     ref={this.storeNameInput}
                     placeholder="Store Name"
                     defaultValue={getFunName()}/>
              <button type="submit">Visit Store</button>
          </form>
        )
    }
}

export default StorePicker;