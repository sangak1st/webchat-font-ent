import React, {useState} from 'react';
import '../css/RegisterForm.css';

function RegisterForm(){
    //Tạo tạng thái cho các phần tử đầu vào
    // const [firstName, setFirstName] = useState(null);
    // const [lastName, setLastName] = useState(null);
    const [username, setUsername] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);

    //cập nhật trạng tham số đầu vào
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        // if(id === "firstName"){
        //     setFirstName(value);
        // }
        // if(id === "lastName"){
        //     setLastName(value);
        // }
        if(id === "username"){
            setUsername(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

  return (
    <form className="form-register" onSubmit={handleInputChange}>
        <div>
            <h1 className='txt'>Register</h1>
            {/* <div className="input-container">
                <label className="form_label">First Name </label>
                <input 
                    className="form_input" 
                    type="text" 
                    value={firstName}
                    onChange = {(e) => handleInputChange(e)}
                    placeholder="First Name"
                />
            </div> */}
            {/* <div className="input-container">
                <label className="form_label">Last Name </label>
                <input  
                    type="text" 
                    className="form_input"
                    value={lastName}
                    onChange = {(e) => handleInputChange(e)}
                    placeholder="LastName"
                />
            </div> */}
            <div className="input-container">
                <label className="form_label">Username </label>
                <input  
                    type="text" 
                    className="form_input" 
                    value={username}
                    onChange = {(e) => handleInputChange(e)}
                    placeholder="Username"
                />
            </div>
            <div className="input-container">
                <label className="form_label">Password </label>
                <input 
                    className="form_input" 
                    type="password"  
                    value={password}
                    onChange = {(e) => handleInputChange(e)}
                    placeholder="Password"
                />
            </div>
            <div className="input-container">
                <label className="form_label">Confirm Password </label>
                <input 
                    className="form_input" 
                    type="password" 
                    value={confirmPassword}
                    onChange = {(e) => handleInputChange(e)}
                    placeholder="Confirm Password"
                />
            </div>
            <div class="btn">
                <button type="submit" class="btn-register">Register</button>
            </div>
        </div>
    </form>      
  )
}

export default RegisterForm
