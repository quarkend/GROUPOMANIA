
import React from "react";
import axios from "axios";
const API = 'http://localhost:8080/api/users/delete/'

const Delete = () => {

    const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
    axios.defaults.headers.common = { 'Authorization': `Bearer ${tokenId.token}` }

    const deleteProfile = async () => {
        if (window.confirm("Voulez-vous vraiment supprimer votre profil ?")) {
            axios.post(API)
                .then((res) => {
                    console.log(res.data)
                }).catch((error) => {
                    console.log(error)
                });
            localStorage.clear()
            window.location = "/";
        }
    };

    return (
        <div>
            <button onClick={deleteProfile} className="delete">Supprimer son profil</button>
        </div>
    );
};

export default Delete;

