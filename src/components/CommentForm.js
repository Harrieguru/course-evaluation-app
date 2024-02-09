import React,{ useState } from 'react'
import '../Form.css'

const CommentForm = ({ userEmail, onSubmit }) => {
  const [courseCode, setCourseCode] = useState('')
  const [courseName, setCourseName] = useState('')
  const [comment, setComment] = useState('')
  const [favTopic, setFavTopic] = useState('')
  const [techSkill, setTechSkill] = useState('')

  const handleSubmit = () => {
    if(courseCode.trim() === '' || courseName.trim() === ''){
      return;
    }

    onSubmit({
      courseCode,
      courseName,
      comment,
      favTopic,
      techSkill,
    });
  };

  return (
    <>
      <div className='form-container'>
        <h2>Comments</h2>
        <form>
          <div>
            <label htmlFor="course-code">Course Code</label>
            <input type="text" placeholder='Course Code' id='course-code' value={courseCode} onChange={(e) => setCourseCode(e.target.value)} required/>
          </div>
          <div>
            <label htmlFor="course-name">Course Name</label>
            <input type="text" placeholder='Course Name' id='course-name' value={courseName} onChange={(e) => setCourseName(e.target.value)} required/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder='Email' value={userEmail} disabled/>
          </div>
          <div>
            <label htmlFor="email">Comments</label>
            <br />
            <textarea placeholder='Comments' rows={8} value={comment} onChange={(e) => setComment(e.target.value)} />
          </div>
          <div>
            <label htmlFor="favourite-topic">Favourite Topic</label>
            <input type="text" placeholder='Favourite Topic' value={favTopic} onChange={(e) => setFavTopic(e.target.value)}/>
          </div>
        <div>
          <label htmlFor="technical-skill">Technical Skill</label>
          <input type="text" placeholder='Technical Skill' value={techSkill} onChange={(e) => setTechSkill(e.target.value)}/>
        </div>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default CommentForm
