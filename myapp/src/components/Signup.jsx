import './form.css'

import './form.css';
import React, { useState } from 'react';
// import emailjs from 'emailjs-com';

const sendConfirmationEmail = (toName, toEmail) => {
  emailjs.send(
    'service_i4i121s',
    'your_template_id', // Replace with your actual template ID
    {
      to_name: toName,
      to_email: toEmail,
    },
    'HoXOo_pkYD-D6QAag'
  )
  .then(() => console.log('Email sent!'))
  .catch((error) => console.error('Email error:', error));
};

function Signup({ onSignupChange }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [password, setPassword] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitSignup = (e) => {
    e.preventDefault();
    if (isSubmitted) return;
    setIsSubmitted(true);
    onSignupChange(true);
    sendConfirmationEmail(name, email);
    };

  return (
    <>
        <div className='loginFormContainer'>
            <div className='card formCard'>
                <div className='welcome' style={{textAlign:'center'}}>
                    <h2>Create Account</h2>
                    <p className='lead'>Sign up to start shopping!</p>
                </div>
                <div>
                    <form onSubmit={handleSubmitSignup}>
                        <label htmlFor="name" className='form-label'>Full Name</label>
                        <input type="text" className='form-control' id='userInput' placeholder='user name' value={name} onChange={(e) => setName(e.target.value)} required />
                        <br />
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" className='form-control' id='userInput' placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <br />
                        <label htmlFor="createPassword" className='form-label'>Create Password</label>
                        <input type="password" className='form-control' id='userInput' placeholder="create strong password" value={createPassword} onChange={(e) => setCreatePassword(e.target.value)} required />
                        <br />
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input type="password" className='form-control' id='userInput' placeholder="confirm password" value={password} onChange={(e) => setPassword(e.target.value)} required /> <br />
                        <br />
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Terms and Condition</label>
                        </div>
                        <br />
                        <button className='btn loginBtnLiquid' type="submit">{isSubmitted ? 'Successful' : 'Sign Up'}</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
}

export default Signup;