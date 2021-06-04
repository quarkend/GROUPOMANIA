import React, { Component } from 'react';
import axios from 'axios';
// import '../style/AddMessage.css';
const API_MESS = 'http://localhost:8080/api/messages/new';

class AddMessage extends Component {

    constructor(props) {
        super(props)

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onChangeImg = this.onChangeImg.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            title: '',
            content: '',
            img: ''
        }
    }


    onChangeTitle(e) {
        this.setState({ title: e.target.value })
    }

    onChangeContent(e) {
        this.setState({ content: e.target.value })
    }
    onChangeImg(e) {
        this.setState({ img: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
        axios.defaults.headers.common = { 'Authorization': `Bearer ${tokenId.token}` }

        const messObject = {
            title: this.state.title,
            content: this.state.content,
            img: this.state.img
        };
        if (window.confirm("Voulez-vous envoyer la publication ?")) {
            axios.post(API_MESS, messObject)

                .then((res) => {
                    console.log(res.data)
                }).catch((error) => {
                    console.log(error)
                });

            this.setState({ title: '', content: '', img: '' })
            window.location = "/mywall";
        }
    }

    render() {

        const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
        if (tokenId === null) {
            window.location = "/login"
        }

        return (
            <div className="ajoutmessage">
                <h1>Ajouter un message</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="inputMessage">
                        <label htmlFor="titre">Titre</label>
                        <br /><input id="titre" value={this.state.title} onChange={this.onChangeTitle} />
                        <br /><label htmlFor="contenu">Contenu du message</label>
                        <br /><textarea id="contenu" value={this.state.content} onChange={this.onChangeContent} />
                        <br /><label htmlFor="URL">Lien contenu multimédia (optionnel)</label>
                        <br /><input id="URL" value={this.state.img} onChange={this.onChangeImg} placeholder="https://www.example.com/images/dinosaur.jpg" />
                        <br /><button className="post">Poster le message</button>
                    </div>
                </form>
            </div>
        );
    }

}


export default AddMessage;