import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Challenges from './pages/Challenges'
import Create from './pages/Create'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
const [challenges, setChallenges] = useState([
  {
    id: 1,
    title: '30 Day Fitness Challenge',
    category: 'Fitness',
    participants: 12450,
    joined: false,
    description: 'Complete a fitness activity every day for 30 days.'
  },
  {
    id: 2,
    title: 'Build in Public',
    category: 'Technology',
    participants: 38200,
    joined: false,
    description: 'Share your progress while building something.'
  },
  {
    id: 3,
    title: 'Photography Challenge',
    category: 'Creative',
    participants: 9210,
    joined: false,
    description: 'Share your best photography with the community.'
  }
])

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

function createChallenge(data) {
  const newChallenge = {
    id: Date.now(),
    title: data.title,
    category: data.category,
    description: data.description,
    participants: 0,
    joined: false
  }
  setChallenges([
    ...challenges, 
    newChallenge
  ])
}

  return (
    <BrowserRouter>
      <Navbar />

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

      </Routes>

    </BrowserRouter>  
  )
}

export default App
