import React from 'react';
import './admin.css';
import Title from '../TitleBanner';

class Admin extends React.Component {
    state = {
        users: []
    }
    componentDidMount() {
        fetch('/users/getAllUsers')
        .then(res => res.json())
        .then(users => this.setState({users}))
    }

    render() {
        return(
            <div>
                <Title>
                Names and Emails of Registered Users
                </Title>
            <div className='container text-center marginTop'>
                {this.state.users.map(user => 
                    <div key={user.id}>
                    Name: {user.name}
                    <br /> 
                    Email: <a href={'mailto:' + user.email}>{user.email}</a> 
                    <br />
                    <hr />
                    </div>
                )}
            </div>
            </div>
        );
    }
}

export default Admin;