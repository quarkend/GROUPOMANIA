
import React from "react";
import axios from "axios";
const API_DELETEMESS = 'http://localhost:8080/api/messages/'
const urlParams = window.location.search
console.log(API_DELETEMESS, urlParams)


const DeleteMess = (props) => {
    console.log(props)

    function deleteMessage() {
        const tokenId = JSON.parse(localStorage.getItem(('userTokenLog')))
        axios.defaults.headers.common = { 'Authorization': `Bearer ${tokenId.token}` }


        if (window.confirm("Supprimer la publication ?")) {
            axios.delete(API_DELETEMESS + props.id)

                .then((res) => {
                    console.log(res.data)
                }).catch(() => {
                    window.alert("Impossible avec votre profil de supprimer ce message.")
                });

            // window.location.reload();

        }
    }

    return (
        <div className="deletemessage">
            <button onClick={deleteMessage}>X</button>
        </div>
    );
};

export default DeleteMess;