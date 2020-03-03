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
                data:data
            });
            console.log('new props', this.state);
        })
    }


        // this.state = {
        //     productId: this.props.productInfo.id,
        //     name: this.props.name,
        //     type: this.props.type,
        //     imageURL: this.props.imageURL,
        //     flavorProfile: this.props.flavorProfile,
        //     category: this.props.category,
        //     size: this.props.size,
        //     price: this.props.price,
        //     description: this.props.description

        // };
      //  this.handleChange = this.handleChange.bind(this);
     //   this.handleSubmit = this.handleSubmit.bind(this);
   // }
    
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = async event => {
        event.preventDefault();

        const data = this.state.data;

        await updateProduct(data)
            
            this.setState({
                name: data.name,
                type: data.type,
                imageUrl: data.imageUrl,
                flavorProfile: data.flavorProfile,
                category: data.category,
                size: data.size,
                price: data.price,
                description: data.description
            });
        };
    
    render() {
        return (
            this.state.isLoading ? <div>I am loading</div> :
            <div className='container'>
                <h2 className='title'>Edit Product</h2>
                <form className='create-product-form' onSubmit={this.handleSubmit} >
                    <FormInput
                        type='text'
                        name='name'
                        value={this.state.data.name}
                        onChange={this.handleChange}
                        label='Product Name'
                        required
                    /> 
                
                    <FormInput
                        type='text'
                        name='type'
                        value={this.state.data.type}
                        onChange={this.handleChange}
                        label='Type'
                        required
                    /> 
                
                    <FormInput
                        type='text'
                        name='imageUrl'
                        value={this.state.data.imageUrl}
                        onChange={this.handleChange}
                        label='Image'
                        required
                    /> 

                    <FormInput
                        type='text'
                        name='flavorProfile'
                        value={this.state.data.flavorProfile}
                        onChange={this.handleChange}
                        label='Flavor Profile'
                        required
                    /> 

                    <FormInput
                        type='text'
                        name='category'
                        value={this.state.data.category}
                        onChange={this.handleChange}
                        label='Product Category'
                        required
                    /> 

                    {/* <FormInput
                        type='text'
                        name='size'
                        value={this.state.data.size}
                        onChange={this.handleChange}
                        label='Size'
                        required
                    /> */}
 
                    <FormInput
                        type='integer'
                        name='price'
                        value={this.state.data.price}
                        onChange={this.handleChange}
                        label='Price'
                        required
                    />

                    <FormInput
                        type='text'
                        name='description'
                        value={this.state.data.description}
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