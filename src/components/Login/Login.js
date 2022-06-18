import React from 'react'
import './Login.css'
import NavBar from '../Navigation/NavBar';

export default function Login({signUp}) {
    const [formData, setFormData] = React.useState({
        name:"",
        email: "",
        password: "",
        confirmPassword: "",
        regNo: ""
    })
    
    function handleChange(event) {
        const {name, value} = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }
    function handleSubmit(event){
        event.preventDefault()
    }
    
    return (
        <>
        <NavBar />
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                {signUp && <input
                    type="name"
                    placeholder="Name"
                    className="form--input"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                />}


                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />


                <input
                    type="password"
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />

                <button 
                    className="form--submit"
                >
                    {signUp ? "Sign Up" : "Login"}
                </button>

                <span className='error'></span>
            </form>
        </div>
        </>
    )
}
