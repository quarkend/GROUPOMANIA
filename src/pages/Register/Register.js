import React from 'react'

function Register() {
    return (
        <div className="Register" >
            <h1> Registration</h1>
            <div className="RegisterForm">
                <input type="text" placeholder="Username..." />
                <input type="text" placeholder="Password..." />
                <button>Register</button>
            </div>
        </div>
    )
}

export default Register
