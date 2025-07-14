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

function Login({ onStatusChange }) {
//   const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitted) return;
    setIsSubmitted(true);
    onStatusChange(true);
    sendConfirmationEmail(name, email);
    };

  return (
    <>
        <div className='loginFormContainer'>
            <div className='card formCard'>
                <div className='welcome' style={{textAlign:'center'}}>
                    <h2>Welcome</h2>
                    <p className='lead'>Welcome back! Please fill your details</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" className='form-control' id='userInput' placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <br />
                        <label htmlFor="password" className='form-label'>Password</label>
                        <input type="password" className='form-control' id='userInput' placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required /> <br />
                        <br />
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Remember me on this Device</label>
                        </div>
                        <br />
                        <button className='btn loginBtnLiquid' type="submit">{isSubmitted ? 'Log out' : 'Log in'}</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
}

export default Login;