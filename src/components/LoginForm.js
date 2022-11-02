import React, {useState} from 'react';
import '../css/LoginForm.css';
import InfoForm from './InfoForm';

function LoginForm() {
    //info username
    const database = [
        {
            username: "Sang",
            password: "123"
        },
        {
            username: "Vu",
            password: "123"
        },
        {
            username: "Tai",
            password: "123"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };
      

      //Lưu trữ một đối tượng với thông báo lỗi và tên của trường.
    const [error, setError] = useState({}); 
    // giá trị boolean để cho biết biểu mẫu có được gửi thành công hay không.
    const [isSubmitted, setIsSubmitted] = useState(false); 

    //truy cập đối tượng sự kiện của phần tử biểu mẫu
    const handleSubmit = (event) => {
        event.preventDefault(); //tránh hành động gửi biểu mẫu mặc định bao gồm tải lại trang

        var { uname, pass } = document.forms[0];

        // Tìm thông tin đăng nhập
        const userData = database.find((user) => user.username === uname.value);

        // so sánh thông tin người dùng
        if (userData) {
            if (userData.password !== pass.value) {
                setError({ name: "pass", message: errors.pass });
            } 
            else {
                setIsSubmitted(true);
            }
        } else {
            setError({ name: "uname", message: errors.uname });
        }
    };

    //Hàm renderError trả về mã JSX để hiển thị thông báo lỗi được liên kết với tên trường
    const renderError = (name) =>
        name === error.name && (
            <div className="error">{error.message}</div>
        );
        
  const renderLoginForm = (
    <div className="form">
        {/* handleSubmit được gọi khi ấn nút Login */}
        <form onSubmit={handleSubmit}> 
            <h1>Login</h1>
            <div className="input-container">
                <label className='lable'>Username </label>
                <input type="text" name="uname" className='form-input' placeholder='Username' required />
                {renderError("uname")}
            </div>
            <div className="input-container">
                <label className='lable'>Password </label>
                <input type="password" name="pass" className='form-input' placeholder='Password' required />
                {renderError("pass")}
            </div>
            <div className="button-container">
                <input type="submit" className='btn-login' value="Login"/>
            </div>
            <div className='link'>
                If you don't account click Register 
            </div>
        </form>
    </div>
  );

  return (
    <div className='login-form'>
        {isSubmitted ? <InfoForm/> : renderLoginForm}
    </div>
  );
}

export default LoginForm;