import React from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from "../helpers";
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class Order extends React.Component{

    static propTypes = {
        fishes: PropTypes.object.isRequired,
        removeFromOrder: PropTypes.func.isRequired,
        order: PropTypes.object,
    };

    renderOrder = (key) => {
        const fish = this.props.fishes[key];
        // Fixing Sorry Fish not available issue
        // Making sure fish is loaded before we continue
        if (!fish){
            return null;
        }
        const count = this.props.order[key];
        if (fish && fish.status === "available"){
            return (
                <CSSTransition classNames="order" key={key} timeout={{enter:250, exit:250}}>
                <li key={key}>{this.props.order[key]} {fish.name} {formatPrice(fish.price * count)}
                     <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
                </li>
                </CSSTransition>)
        }else{
            return (
        <CSSTransition classNames="order" key={key} timeout={{enter:250, exit:250}}>
            <li key={key}>Sorry {fish?fish.name:'fish'} is not available
        </li></CSSTransition>);
        }
        };
    render(){
        const orderIds = Object.keys(this.props.order);
        const orderTotal = orderIds.length >= 1 && orderIds.reduce((prevTotal,key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish['status'] === 'available';
            const price = fish && fish['price'];
            if (isAvailable){
                return count * price + prevTotal;
            }else{
                return prevTotal;
            }
        },0);

        return(
            <div className="order-wrap">
                <h2>Order </h2>

                <TransitionGroup component="ul" className="order">
                    {orderIds.map(key =>this.renderOrder(key))}
                </TransitionGroup>
                <div className="total">
                    Total: <strong> {formatPrice(orderTotal)} </strong>
                </div>
            </div>
        )
    }
}
export default Order;