import React from 'react';
//import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
//import { updateProduct } from '../../firebase/firebase.utils';
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
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
                productName: this.state.productName,
                type: this.state.type,
                imageUrl: this.state.imageUrl,
                flavorProfile: this.state.flavorProfile,
                category: this.state.category,
                size: this.state.size,
                price: this.state.price,
                description: this.state.description
        })
        //console.log('handle change state', this.state);
    }

    handleSubmit = async event => {
        event.preventDefault();

        const id = this.props.match.params.id;
            
            let data = {
                productId: id, 
                productName: this.state.productName,
                type: this.state.type,
                imageUrl: this.state.imageUrl,
                flavorProfile: this.state.flavorProfile,
                category: this.state.category,
                size: this.state.size,
                price: this.state.price,
                description: this.state.description
            }
            axios.put('http://localhost:3001/api/products/update/' + id, {
                data
            })
            .then( (response) => {
                console.log(response);
            this.setState(data);

        })
        console.log('sent to db', data);
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
                        onChange={event => this.setState({productName: event.target.value})}
                        label='Product Name'
                        required
                    /> 
                
                    <input
                        type='text'
                        name='type'
                        defaultValue={this.state.type}
                        onChange={event => this.setState({type: event.target.value})}
                        label='Type'
                        required
                    /> 
                
                    <input
                        type='text'
                        name='imageUrl'
                        defaultValue={this.state.imageUrl}
                        onChange={event => this.setState({imageUrl: event.target.value})}
                        label='Image'
                        required
                    /> 

                    <input
                        type='text'
                        name='flavorProfile'
                        defaultValue={this.state.flavorProfile}
                        onChange={event => this.setState({flavorProfile: event.target.value})}
                        label='Flavor Profile'
                        required
                    /> 

                    <input
                        type='text'
                        name='category'
                        defaultValue={this.state.category}
                        onChange={event => this.setState({category: event.target.value})}
                        label='Product Category'
                        required
                    /> 

                    <input
                        type='text'
                        name='size'
                        defaultValue={this.state.size}
                        onChange={event => this.setState({size: event.target.value})}
                        label='Size'
                        required
                    /> 

                    <input
                        type='integer'
                        name='price'
                        defaultValue={this.state.price}
                        onChange={event => this.setState({price: event.target.value})}
                        label='Price'
                        required
                    /> 

                    <input
                        type='text'
                        name='description'
                        defaultValue={this.state.description}
                        onChange={event => this.setState({description: event.target.value})}
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