
import React from "react";

const Logout = () => {


    function logoutButton() {
        window.alert("Vous êtes maintenant déconnecter.");
        localStorage.clear()
        console.log(localStorage)
        window.location = "/";
    }

    return (
        <div className="col-md-12">
            <div className="card card-container">
                <div>
                    <button onClick={logoutButton} className="logout">Se Déconnecter</button>
                </div>
            </div>
        </div>
    );
};

export default Logout;