import React, { Component } from 'react';
import axios from 'axios';


class User extends Component {
    constructor() {
        super();
        this.state= {
            users: []
        }
    }
    
    componentDidMount() {
        axios.get('/api/users/')
        .then( (response) => {
            this.successShow(response);
            })
        .catch(error => {
            this.successShow(error);
        });
    }

    successShow(response) {
        this.setState({
            users: response.data
        });
    }

    render() {

        return (
            <ul>
            {this.state.users.map(user => (
                <li key={user.id}>
                    {user.displayName}
                </li>
            ))}
            
            </ul>
        );
    }
}
export default User;