import React, { Component } from './node_modules/react';
//import '../Job.css';
import axios from './node_modules/axios';


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
        axios.get('http://localhost:3001/api/users/')
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
                    Display Name: {user.displayName}

                </li>
            ))}
            
            </ul>
            // <div className="User">
            //     <h1>{this.state.email}</h1>
            //     <div>show all users</div>

            // </div>
        );
    }
}
export default User;