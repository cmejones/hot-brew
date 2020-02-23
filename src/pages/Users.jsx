import React, { Component } from 'react';
//import '../jobs.css';
import axios from 'axios';
import UserProfile from '../components/UserProfile/UserProfile';
import User from '../components/User/user.component';
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
            console.log(this.state.users, 'users');
        }
    }

    render() {

        // const usersJSX = this.state.users.map((user, index) => {
        //     return <User key={index} {...user} />
        // })

        return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">All Hot Brew Customers</h1>
            </header>
            <div className="Users">
                {/* {jobsJSX} */}
                <Switch>
                    {/* <Route exact path='/users' render={ () => usersJSX } /> */}
                    <Route exact path='/users' component={() => <User usersJSX={this.state.users} />}/>

                    <Route path='/users/:id' component={() => <UserProfile userProfiles={this.state.users} />}/>
                </Switch>
            </div>
            
        </div>
        );
    }
}

export default Users;