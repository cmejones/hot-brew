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
        console.log('ireview state', this.state);
    }
        componentDidMount() {
            const id = this.state.productId;
            axios.get('/api/reviews/' + id)      
            .then(response => {
                this.setState({
                    isLoading: false, 
                    reviewsByItem: response.data
                });
            })
        }
    

    render() {
        console.log('review props', this.state.reviewsByItem);

        const allReviews = this.state.reviewsByItem.map((review) => {
            //return review;
        });
        console.log('allreviews', allReviews)
        return (
    <div></div>
            // <div key={this.props.product_id} id={this.state.productId}>
            //     <div className="card-content">
            //             {this.state.review}
                    
            //         <div>
            //             {/* <p>Submitted by: {this.state.reviews.displayName}</p> */}
            //         </div>
            //     </div>
            // </div>
        );
    }
}
export default DisplayReviews;