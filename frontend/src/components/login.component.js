import React, { Component } from 'react';
import axios from 'axios';

const API_LOG = 'http://localhost:8080/api/users/login';


class Login extends Component {

    constructor(props) {
        super(props)

        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            phone: '',
            password: ''
        }
    }

    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const userObject = {
            phone: this.state.phone,
            password: this.state.password
        };

        axios.post(API_LOG, userObject)
            .then((res) => {
                localStorage.setItem('userTokenLog', JSON.stringify(res.data));
                window.location = "/mywall";
            }).catch(() => {
                (window.alert("Identifiant/Mot de passe Incorrect"))
            });

        this.setState({ phone: '', password: '' })
    }



    render() {

        return (
            <div className="login">
                <h1>Connexion au compte</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="inputLogin">
                        <label htmlFor="identifiant">Identifiant</label>
                        <br /><input id="identifiant" value={this.state.phone} onChange={this.onChangePhone} />
                        <br /><label htmlFor="mdp">Mot de passe</label>
                        <br /><input id="mdp" type='password' value={this.state.password} onChange={this.onChangePassword} />
                        <br /><button className="validerLogin">Valider</button>
                    </div>
                </form>
                <div>
                    <p>Pour créer un profil, cliquez <span><a href="/register">ICI</a></span></p>
                    <p>Pour obtenir le token Admin cliquez <span><a href="/admin">ICI</a></span></p>
                </div>

            </div>
        );
    }

}


export default Login;
