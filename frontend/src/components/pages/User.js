import React, { Component } from 'react';
//import axios from 'axios';
import Logout from "../log/Logout"
import Delete from "../log/Delete"
// import '../style/User.css';


class Users extends Component {

    state = {
    }
    render() {

        const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
        if (tokenId === null) {
            window.location = "/login"
        }
        return (

            < div className="container">
                <div className="User">
                    <header className="jumbotron">
                        <h1>Profil</h1>
                        <Logout />
                        <br /><Delete />
                    </header>
                </div>
            </div>
        );
    }

}


export default Users;

