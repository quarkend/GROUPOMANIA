import React, { Component } from 'react';
//import axios from 'axios';




class Users extends Component {

    state = {
    }
    render() {

        const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
        if (tokenId === null) {
            window.location = "/login"
        }
        return (
            <div className="User">
                <h1>Profil</h1>


            </div>
        );
    }

}


export default Users;

