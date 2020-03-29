import React, { Component } from 'react';
import Products from './Products';
import '../components/products/products.css';

class Dashboard extends Component {
    render() {
        return (

            <div className="dashboard">
                <div className="">
                    <h2>Shop for your favorite coffees and coffee accessories!</h2>
                    <Products />
                </div>
            </div>
        )
    }
}

export default Dashboard;