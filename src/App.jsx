import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Challenges from './pages/Challenges'
import Create from './pages/Create'
import NotFound from './pages/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
const [challenges, setChallenges] = useState([])
const [error, setError] = useState('')
const [loading, setLoading] = useState(true)

useEffect(() => {
  fetch('http://localhost:3000/api/challenges')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch challenges')      
      }
      return response.json()
    })
    .then(data => {
      setChallenges(data)
      setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching challenges:', error)
        setError('Unable to load challenges, please try again.')
        setLoading(false)
      })
    }, [])

function joinChallenge(id) {
  setChallenges(
    challenges.map(function(challenge) {

      if (challenge.id === id) {
          
          if (challenge.joined) {
              return challenge
          }

        return {
          ...challenge, 
          participants: challenge.participants + 1,
          joined: true
        }
      }

      return challenge
    })
  )
}

async function createChallenge(data) {
  try {
    const response = await fetch('http://localhost:3000/api/challenges', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    
    if (!response.ok) {
      throw new Error('Failed to create challenges')
    }
    
    const newChallenge = await response.json()
    setChallenges([
      ...challenges, 
      newChallenge
    ])
   }
    catch (error) {
      console.error('Error creating challenge:', error)
    }
}

  return (
    <BrowserRouter>
      <Navbar />
      {loading && <p>Loading challenges...</p>}
      {error && <p>{error}</p>}

      <Routes>
        <Route path='/' element={<Home />} />
        

        <Route 
          path='/challenges' 
          element={
            <Challenges 
               challenges={challenges} 
               onJoin={joinChallenge} 
            />
          } 
        />

        <Route 
          path='/create' 
          element={
            <Create 
              onCreate={createChallenge} 
            />
          } 
        />

        <Route 
          path='*' element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>  
  )
}

export default App
