import React from 'react';
import '../css/InfoForm.css';

function InfoForm() {
  return (
    <div className='form-info'>
      <form>
        <h1>Information</h1>
        <div className='avata'>
            <img 
                src="https://iphonecugiare.com/wp-content/uploads/2020/03/90072494_1148106232202126_7381238139576123392_o.jpg" 
                alt="Error" 
                className='avata-img'
            />        
        </div>
        <div className='container'>
            <div className='input-container'>
                <label className='form-lable'>First Name</label>
                <input type='text' className='form-input' placeholder='First name'/>
            </div>
            <div className='input-container'>
                <label className='form-lable'>Last Name</label>
                <input type='text' className='form-input' placeholder='Last name'/>
            </div >
            <div className='check'>
                <label className='form-lable'>Sex</label><br/>
                <input type='radio' name='sex' className='form-check1'/>
                <lable className='check-lable1'>Male</lable>
                <input type='radio' name='sex' className='form-check2'/>
                <lable className='check-lable2'>Female</lable>
            </div>
            <div className='input-container'>
                <label className='form-lable'>Birthday</label>
                <input type='text' className='form-input' placeholder='Birthday'/>
            </div>

        </div>
        <div className='input-btn'>
          <button type='button' className='btn-info'>xong</button>
        </div>

      </form>
    </div>
  )
}

export default InfoForm
