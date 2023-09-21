import React, { useContext, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import {AuthContext} from "../../providers/AuthProvider";

const Register = () => {
  const [error, setError] = useState('');
  const {createUser} = useContext(AuthContext);
   

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

      setError('');
    if (password !== confirm) {
      setError("your password did not match");
      return;
    } else if (password.length < 8) {
      setError("your password must be at-least 8 character");
      return;
    }
      createUser(email,password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        form.reset();
      })
      .catch(error => {
        console.log(error.message)
        setError(error.message);
      })
  };

  return (
    <div className="form-container">
      <div className="new">
        <h2 className="form-title">Sign Up</h2>
      </div>
      <form onSubmit={handleSignIn}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="confirm" required />
        </div>
        <input className="btn-submit" type="submit" value="Sign Up" />
      </form>
      <p>
        <small>
          Already have an account? <Link to="/login">Login</Link>
        </small>
      </p>
      <p className="text-error">{error}</p>
    </div>
  );
};

export default Register;
