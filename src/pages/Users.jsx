import React, { Component } from 'react';
//import '../jobs.css';
import axios from 'axios';
import UserProfile from '../Components/UserProfile/UserProfile';
import User from '../Components/User/user.component';
import { Switch, Route } from 'react-router-dom';



class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }

    }

    async componentDidMount() {
        const response = await axios.get('http://localhost:3001/api/users');
        if(response) {
            this.setState({users: response.data})
        }
    }

    render() {

        // const usersJSX = this.state.users.map((user, index) => {
        //     return <UserProfile key={index} {...user} />
        // })

        return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">All Hot Brew Customers</h1>
            </header>
            <div className="Users">
                {/* {jobsJSX} */}
                <Switch>
                    <Route exact path='/users' component={User} />

                    <Route path='/users/:id' component={() => <UserProfile userProfiles={this.state.users} />}/>
                </Switch>
            </div>
            
        </div>
        );
    }
}

export default Users;