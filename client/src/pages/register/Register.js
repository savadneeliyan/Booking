import React, { useState } from 'react';

import './register.css'

function Register() {
  // Use the useState hook to create state variables for the form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    // Clear the form inputs
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <form onSubmit={handleSubmit} className="login-container">
      <label>
        Name:
        <input className='registerInput'
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input className='registerInput'
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input className='registerInput'
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button className='registerButton' type="submit">Sign up</button>
    </form>
  );
}

export default Register;
