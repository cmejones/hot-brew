import React, { Component } from 'react';
//import '../Job.css';
import axios from 'axios';


class User extends Component {
    constructor() {
        super();
        this.state= {
            users: []
        }
    }


    // async componentDidMount() {
    //     const response = await axios.get('http://localhost:3001/api/users');
    //     if(response) {
    //         this.setState({users: response.data})

    //     }
    // }


    // async componentDidMount() {
    //     console.log(this.props)
    //     //const { match: { params } } = this.props;
    //     //const { userId } = await this.props.match.params.id;
    //     const allUsers = this.props;
    //     console.log(allUsers);
    //     const { usersJSX } = allUsers.map((user, index) => {
    //         return <User key={index} {...user} />
    //     })

    //     console.log(this.state)
    // }
    componentDidMount() {
        console.log('here');
        //const userId = this.props.match.params.id;
        axios.get('/api/users/')
        .then( (response) => {
            this.successShow(response);
            })
        .catch(error => {
            this.successShow(error);
console.log('hey');
        });
    }

    successShow(response) {
        this.setState({
            users: response.data
        });
       // console.log(response.data);
    }

    render() {

        return (
            <ul>
            {this.state.users.map(user => (
                <li key={user.id}>
                    {user.displayName}
                    {/* <a href={`/users/${user.id}`}>{user.displayName}</a> */}

                </li>
            ))}
            
            </ul>
        );
    }
}
export default User;