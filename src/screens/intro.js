import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import profile from '../image/a.png'
import '../intro.css'


export default function SplashScreen() {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/login')
    }, 5000)
  }, [])
  return (
    <div style={{
        width: '100wh',
        height: '100vh',
        backgroundColor: 'white',
        display: 'flex-box',
        alignItems: 'center',
        margin: '15%',
        
      }}
    >
    <center>
      <img src={profile} 
          className="profile2"
          />
          </center>
          <pre>
          <center>
          <a> Welcome...</a>
          </center>
          </pre>
     </div>
  )
}
