import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChallengeSection from './components/ChallengeSection'

function App() {
  return (
    <>
      <Navbar />

      <Hero 
       title='Turn participation into your next big thing.'

       description='Discover challanges. Participate. Create. Share. Grow.'
      /> 

      <ChallengeSection />
    </>  
  )
}

export default App
