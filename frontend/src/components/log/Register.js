import React, { Component } from 'react';
import axios from 'axios';
// import '../style/Register.css';
const API_REG = 'http://localhost:8080/api/users/register';

class Register extends Component {


    constructor(props) {
        super(props)

        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            phone: '',
            username: '',
            password: ''
        }
    }

    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }

    onChangeUsername(e) {
        this.setState({ username: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            phone: this.state.phone,
            username: this.state.username,
            password: this.state.password
        };

        axios.post(API_REG, userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ phone: '', username: '', password: '' })
        window.location = "/login";
    }

    render() {

        return (
            <div className="col-md-12">
                <div className="card card-container">
                    <img
                        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                        alt="profile-img"
                        className="profile-img-card"
                    />
                    <div className="register">
                        <h1>Inscription</h1>
                        <form onSubmit={this.onSubmit}>
                            <div className="inputRegister">
                                <label htmlFor="identifiant">biss one</label>
                                <br /><input type='text' id="identifiant" placeholder="Ex: 0610203040" value={this.state.phone} onChange={this.onChangePhone} />
                                <br /><label htmlFor="username">Pseudo</label>
                                <br /><input id="username" value={this.state.username} onChange={this.onChangeUsername} />
                                <br /><label htmlFor="mdp">Mot de passe</label>
                                <br /><input type="password" id="mdp" placeholder="4-8 Caract. + 1 chiffre Min." value={this.state.password} onChange={this.onChangePassword} />
                                <br /><button type="submit" className='inscription' value="register">Inscription</button>
                            </div>
                        </form>
                    </div></div></div>

        );
    }

}


export default Register;
