import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

const PORT = 3000

const challenges = [
  {
    id: 1,
    title: '30 Day Fitness Challenge',
    category: 'Fitness',
    participants: 12450,
    description: 'Complete a fitness activity every day for 30 days.'
  },
  {
    id: 2,
    title: 'Build in Public',
    category: 'Technology',
    participants: 38200,
    description: 'Share your progress while building something.'
  },
  {
    id: 3,
    title: 'Photography Challenge',
    category: 'Creative',
    participants: 9210,
    description: 'Share your best photography with the community.'
  }
]

app.get('/', (req, res) => {
    res.send({
        message: 'ViralLoop API is running!'
})
})

app.get('/api/challenges', (req, res) => {
    res.json(challenges)
})

app.post('/api/challenges', (req, res) => {
  const newChallenge = {
    id: Date.now,
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    participation: 0
  }

  challenges.push(newChallenge)

  res.status(201).json(newChallenge)
})

app.listen(PORT, () => {
    console.log(`ViralLoop backend is running on http://localhost:${PORT}`)
})