import React , { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import Router from 'next/router'
import {connect} from 'react-redux';

class Checkout extends Component {
    
    checkoutContinuedHandler = () => {
        Router.replace('/checkout/contact-data');
    }

    checkoutCancelledHandler = () => {
        Router.back();
    }

    render()
    {   
        return (
            <div>
                <CheckoutSummary 
                    checkoutContinued={this.checkoutContinuedHandler}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    ingredients={this.props.ings} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings : state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);