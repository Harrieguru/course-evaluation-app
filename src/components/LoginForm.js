import React, {useState} from 'react'
import '../Form.css'

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleLogin = () => {
    if(email.trim() === ''){
      return;
    }
    if(password.trim().length < 8){
      alert('Password must be 8 characters')
      return;
    }

    onLogin(email)
  }

  return (
    <>
      <div className="form-container">
        <h2>Login</h2>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div>
            <label htmlFor="pass">Password</label>
            <input type="password" placeholder='Password' id='pass' value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button onClick={handleLogin}>Login</button>
        </form>
      </div>
    </>
  )
}

export default LoginForm
