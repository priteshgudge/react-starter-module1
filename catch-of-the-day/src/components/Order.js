import React from 'react';

class Order extends React.Component{

    render(){
        const orderIds = Object.keys(this.props.order);
        const orderTotal = orderIds.length >= 1 && orderIds.reduce((prevTotal,key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish['status'] === 'available';
            const price = fish['price'];
            if (isAvailable){
                return count * price + prevTotal;
            }else{
                return prevTotal;
            }
        })

        return(
            <div className="order-wrap">
                <h2>Order </h2>
                {orderTotal}
                <p></p>
            </div>
        )
    }
}
export default Order;