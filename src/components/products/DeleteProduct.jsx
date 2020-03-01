import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth } from '../../firebase/firebase.utils';
import {deleteProduct} from '../../firebase/firebase.utils';
import '../sign-up/sign-up.styles.css';


class DeleteProduct extends React.Component {
    constructor(props) {
        super(props);
        console.log('this props',this.props);
        this.state = {
            productId: this.props.productInfo.id,
        }
        console.log(this.state, 'delete state');
    }

    handleDelete = async event => {
        console.log('hit delete');
        event.preventDefault();

        const data = this.state.productId;

        await deleteProduct(data)
    
        };

    render() {

        return (
        <form onSubmit={this.handleDelete} >
            <CustomButton type='submit'>Delete Product</CustomButton>
        </form> 
        )
    
    }
}

export default DeleteProduct;