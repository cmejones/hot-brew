import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'



class UserProfile extends Component {
    constructor() {
        super();
        this.state = {
            userProfile: []
        }

    }

    clickHandler() {
        this.props.history.push('/users/' + this.props.id);
    }

    async componentDidMount() {
        console.log(this.props)
        const { match: { params } } = this.props;
        const { userProfiles } = await this.props;

        if(userProfiles) {
            this.setState({userProfile: userProfiles[params.id]})
        }
        console.log(this.state)
    }

    render() {
        
        return (
            this.state.userProfile ?
                <div className="UserProfile" onClick={this.clickHandler.bind(this)}>
                    <div className="left">
                        <strong>{this.state.userProfile.displayName}</strong>
                    </div>
                    <div className="right">
                        <strong>{this.state.userProfile.email}</strong>
                    </div>
                </div> : <div></div>
        )
    }
}

export default withRouter(UserProfile);