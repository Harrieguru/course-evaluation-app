import React, { useState } from 'react'
import './App.css';
import LoginForm from './components/LoginForm'
import CommentForm from './components/CommentForm'
import ThankYou from './components/ThankYou'


function App() {

  const [loggedInUser, setLoggedInUser] = useState(null)
  const [comments, setComments] = useState(null)

  const handleLogin = (email) =>{
    setLoggedInUser(email)
  }

  const handleCommentSubmit = (data) => {
    setComments(data);
  }

  
  return (
    <div className="App">
      {!loggedInUser && <LoginForm onLogin={handleLogin} />}
      {loggedInUser && !comments && <CommentForm userEmail={loggedInUser} onSubmit={handleCommentSubmit} />}
      {comments && <ThankYou userEmail={loggedInUser} />}
    </div>
  );
}

export default App;
