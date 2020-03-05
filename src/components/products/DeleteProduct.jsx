import React from 'react';
import { auth } from '../../firebase/firebase.utils';
import '../sign-up/sign-up.styles.css';
import axios from 'axios';

class DeleteProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            isLoading: true
        }
           // console.log('edit', this.props)
    }

    handleDelete = async event => {
        console.log('hit delete');
        event.preventDefault();

        const id = this.props.match.params.id;
        
        axios.delete('http://localhost:3001/api/products/delete/' + id, {

        })
        .then((response) => {
            console.log(response, 'sent to db');
        })
    
        };

    render() {

        return (
        <form onSubmit={this.handleDelete} >
            <input type='submit' value='delete product' />
        </form> 
        )
    
    }
}

export default DeleteProduct;