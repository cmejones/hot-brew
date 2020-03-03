import React from 'react';
import { createProduct } from '../../store/actions/productActions';
// import { connect } from 'react-redux';
import { createNewProduct} from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import axios from 'axios';

//import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';


class CreateProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            type: '',
            imageUrl: '',
            flavorProfile: '',
            category: '',
            size: '',
            price: '',
            description: ''

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange = (event) => {
        event.preventDefault();
        
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
                type: '',
                imageUrl: '',
                flavorProfile: '',
                category: '',
                size: '',
                price: '',
                description: ''
            });
        };
    



    render() {
       // const { title, description, price, image } = this.state;
        return (
            <div className='container'>
                <h2 className='title'>Add a new Product</h2>
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
                        name='imageUrl'
                        value={this.state.imageUrl}
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

                    <CustomButton type='submit'>Create Product</CustomButton>
                </form>
            </div>
        )
    
    }
}

export default CreateProduct;