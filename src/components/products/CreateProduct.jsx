import React from 'react';
import { createProduct } from '../../store/actions/productActions';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class CreateProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            price: '', 
            image: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
       // console.log('state', this.state);
       this.props.createProduct(this.state);

    };


    render() {
       // const { title, description, price, image } = this.state;
        return (
            <div className='container'>
                <h2 className='title'>Add a new Product</h2>
                <form className='create-product-form' onSubmit={this.handleSubmit} >
                     <FormInput
                        type='text'
                        name='title'
                        value={this.state.title}
                        onChange={this.handleChange}
                        label='Product Name'
                        required
                    />
                   
                    <FormInput
                        type='text'
                        name='description'
                        value={this.state.description}
                        onChange={this.handleChange}
                        label='Product Description'
                        required
                    />
                
                    <FormInput
                        type='text'
                        name='price'
                        value={this.state.price}
                        onChange={this.handleChange}
                        label='Price'
                        required
                    />

                    <FormInput
                        type='text'
                        name='image'
                        value={this.state.image}
                        onChange={this.handleChange}
                        label='Product Image'
                        required
                    />

                    <CustomButton type='submit'>Create Product</CustomButton>
                </form>
            </div>
        )
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProduct: (product) => dispatch(createProduct(product))
    }
}

export default connect(null, mapDispatchToProps)(CreateProduct);