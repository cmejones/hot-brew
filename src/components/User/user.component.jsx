import React, { Component } from 'react';
//import '../Job.css';
import axios from 'axios';

class User extends Component {
    constructor() {
        super();
        this.state= {}
    }

    componentDidMount() {
        const userId = this.props.match.params.id;
        axios.get('/api/users/' + userId)
        .then( ({data}) => {
            this.setState(data);

        })
    }

    render() {
        return (
            <div className="User">
                <h1>{this.state.email}</h1>

            </div>
        )
    }
}
export default User;