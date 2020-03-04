import React from 'react';
//import { createProduct } from '../../store/actions/productActions';
// import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { updateProduct } from '../../firebase/firebase.utils';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

///import info like from ProductList to ProductDetail
//make submit function take EditProduct from firebase.utils.js

class EditProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            isLoading: true
        }
            console.log('edit', this.props)
    }

    componentDidMount() {
        console.log('edit here');
        const id = this.props.match.params.id;
        axios.get('/api/products/' + id)
        .then( ({data}) => {
            console.log('data', data)
           // data['id'] = this.props.match.params.id;
            this.setState( {
                isLoading: false, 
                productName: data.productName,
                type: data.type,
                imageUrl: data.imageUrl,
                flavorProfile: data.flavorProfile,
                category: data.category,
                size: data.size,
                price: data.price,
                description: data.description


            });
            console.log('new props', this.state);

        })
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);        
    }
    
    handleChange = (event) => {
        event.preventDefault();
        //const { name, value } = event.target
        this.setState({
            //[name]: value
                productName: this.state.productName,
                type: this.state.type,
                imageUrl: this.state.imageUrl,
                flavorProfile: this.state.flavorProfile,
                category: this.state.category,
                size: this.state.size,
                price: this.state.price,
                description: this.state.description
        })
        console.log('handle change state', this.state);
    }

    handleSubmit = async event => {
        event.preventDefault();

        const data = this.state.data;

        await updateProduct(data)
            
            this.setState({
                productName: data.productName,
                type: data.type,
                imageUrl: data.imageUrl,
                flavorProfile: data.flavorProfile,
                category: data.category,
                size: data.size,
                price: data.price,
                description: data.description
            });
            console.log('submit state', this.state)
        };
    
    render() {
        return (
            this.state.isLoading ? <div>I am loading</div> :
            <div className='container'>
                <h2 className='title'>Edit Product</h2>
                <form className='create-product-form' onSubmit={this.handleSubmit} >
                    <input
                        type='text'
                        name='productName'
                        defaultValue={this.state.productName}
                        onChange={this.handleChange}
                        label='Product Name'
                        required
                    /> 
                
                    <input
                        type='text'
                        name='type'
                        defaultValue={this.state.type}
                        onChange={this.handleChange}
                        label='Type'
                        required
                    /> 
                
                    <input
                        type='text'
                        name='imageUrl'
                        defaultValue={this.state.imageUrl}
                        onChange={this.handleChange}
                        label='Image'
                        required
                    /> 

                    <input
                        type='text'
                        name='flavorProfile'
                        defaultValue={this.state.flavorProfile}
                        onChange={this.handleChange}
                        label='Flavor Profile'
                        required
                    /> 

                    <input
                        type='text'
                        name='category'
                        defaultValue={this.state.category}
                        onChange={this.handleChange}
                        label='Product Category'
                        required
                    /> 

                    <input
                        type='text'
                        name='size'
                        defaultValue={this.state.size}
                        onChange={this.handleChange}
                        // onChange={data => this.setState({size: data})}
                        label='Size'
                        required
                    />

                    <input
                        type='integer'
                        name='price'
                        defaultValue={this.state.price}
                        onChange={this.handleChange}
                        label='Price'
                        required
                    />

                    <input
                        type='text'
                        name='description'
                        defaultValue={this.state.description}
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

export default withRouter(EditProduct);