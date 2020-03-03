import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createNewReview } from '../../firebase/firebase.utils';

import '../sign-up/sign-up.styles.css';

let userId = window.localStorage.getItem('userID');
let displayName= window.localStorage.getItem('displayName');

class AddReview extends React.Component {
    constructor(props) {
        super(props);
        console.log('this props',this.props);
        this.state = {
            userId: userId,
            displayName: displayName,
            productId: this.props.productInfo.id,
            review: ''
        }
        console.log(this.state, 'add review');
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target

        this.setState({ 
            [name]: value 
        });
        console.log('change', this.state);
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const data = this.state;
        createNewReview(data)
        this.setState({
            review:''
        });

        console.log('submit', data);
    
    };



    render() {

        const { userId, displayName, review, productId } = this.state;
        return (
        this.state.userId ?
            <div className='addReview'><strong>Tell us what you think about this product!</strong>
    
                <form className='review-form' onSubmit={this.handleSubmit} >
                    <FormInput
                        type='text'
                        name='review'
                        value={review}
                        onChange={this.handleChange}
                        label='Review'
                        required
                    />
                
                    <CustomButton type='submit'>Submit Review</CustomButton>
                </form>
            </div> : <div>You must log in to post a review.</div>
        )
    
    }
}

export default AddReview;