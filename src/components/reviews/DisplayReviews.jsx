import React from 'react';
import '../products/products.css';
import axios from 'axios';

class DisplayReviews extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewsByItem: [],
            productId: this.props.productInfo.id, 
            isLoading: true
        }
        //console.log('review state', this.state);
    }
        componentDidMount() {
            const id = this.state.productId;
            axios.get('/api/reviews/' + id)      
            .then(response => {
                this.setState({
                    isLoading: false, 
                    reviewsByItem: response.data
                });
                console.log('did mount', this.state);
            })
        }
    

    render() {
        console.log('review props', this.state.reviewsByItem);
        return (
    
        <div className='left-align'>
            {this.state.reviewsByItem.map(function(review, reviewId){
                return (<div className="reviewDetail" key={reviewId}>{review.review}<span className="reviewerName">~{review.displayName}</span></div>)
            })}
        </div>

        );
    }
}
export default DisplayReviews;