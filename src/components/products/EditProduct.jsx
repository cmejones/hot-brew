import React from 'react';
import { createProduct } from '../../store/actions/productActions';
// import { connect } from 'react-redux';
import { createNewProduct} from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import axios from 'axios';

///import info like from ProductList to ProductDetail
//make submit function take EditProduct from firebase.utils.js

class EditProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            type: this.props.type,
            imageURL: this.props.imageURL,
            flavorProfile: this.props.flavorProfile,
            category: this.props.category,
            size: this.props.size,
            price: this.props.price,
            description: this.props.description

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

    handleSubmit = async event => {
        event.preventDefault();

        const data = this.state;

        await createNewProduct(data)
            
            this.setState({
                name: '',
                category: '',
                imageURL: '',
                description: ''
            });
        };
    
    render() {
        return (
            <div className='container'>
                <h2 className='title'>Edit Product</h2>
                <form className='create-product-form' onSubmit={this.handleSubmit} >
                    <FormInput
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        label='Product Name'
                        required
                    />
                
                    <FormInput
                        type='text'
                        name='type'
                        value={this.state.type}
                        onChange={this.handleChange}
                        label='Type'
                        required
                    />
                
                    <FormInput
                        type='text'
                        name='imageURL'
                        value={this.state.imageURL}
                        onChange={this.handleChange}
                        label='Image'
                        required
                    />

                    <FormInput
                        type='text'
                        name='flavorProfile'
                        value={this.state.flavorProfile}
                        onChange={this.handleChange}
                        label='Flavor Profile'
                        required
                    />

                    <FormInput
                        type='text'
                        name='category'
                        value={this.state.category}
                        onChange={this.handleChange}
                        label='Product Category'
                        required
                    />

                    <FormInput
                        type='text'
                        name='size'
                        value={this.state.size}
                        onChange={this.handleChange}
                        label='Size'
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
                        name='description'
                        value={this.state.description}
                        onChange={this.handleChange}
                        label='Description'
                        required
                    />

                    <CustomButton type='submit'>Save Changes</CustomButton>
                </form>
            </div>
        )
    
    }
}

export default EditProduct;