import React, { Component } from 'react';
// import imgGroupomania from '../images/icon-above-font.svg'


class Welcome extends Component {

    state = {
    }

    render() {

        return (


            <div className="container">
                <header className="jumbotron">
                    <h1>Bienvenue sur Groupomania Messenger</h1>
                    <div><a href='/login'><span className="lien">Connexion</span></a></div>
                    <div><a href='/register'><span className="lien">Inscription</span></a></div>
                    <h3>{this.state.content}</h3>
                </header>
            </div>







        );
    }

}


export default Welcome;