import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import pg from 'pg'

const { Pool } = pg

const app = express()

app.use(cors())
app.use(express.json())

  const PORT = 3000

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  connectionTimeoutMillis: 10000,
  idleTimeoutMillis: 10000,
  max: 5
})

pool.on('error', (error) => {
  console.error('Unexpected database pool error:', error)
})

app.get('/api', (req, res) => {
    res.json({
        message: 'ViralLoop API is running!'
})
})

app.get('/api/challenges', async (req, res) => {
    try {
      const result = await pool.query(
        'SELECT * FROM challenges ORDER BY id'
      )

      res.json(result.rows)
    } catch (error) {
      console.error('Error fetching challenges:', error)

      res.status(500).json({
        error: 'Failed to fetch challenges'
      })
    }
})

app.post('/api/challenges', async (req, res) => {
  try {
    const {title, category, description} = req.body

    const result = await pool.query(
      `INSERT INTO challenges (title, category, description)
      VALUES ($1, $2, $3)
      RETURNING *`,
      [title, category, description]
    )

    res.status(201).json(result.rows[0])
  } catch (error) {
    console.error('Error creating challenges:', error)


    res.status(500).json({
      error: 'Failed to create challenges'
    })
   }
  })

  app.post('/api/challenges/:id/join', async (req, res) => {
    try {
      const challengeId = req.params.id

      const result = await pool.query(
        `INSERT INTO participants (challenge_id)
        VALUES ($1)
        RETURNING *`,
        [challengeId]
      )

      res.status(201).json(result.rows[0])
    } catch (error) {
      console.error('Error Joining challenges:', error)

      res.status(500).json({
        error: 'Failed to join challenge'
      })
    }
  })

app.listen(PORT, () => {
    console.log(`ViralLoop backend is running on http://localhost:${PORT}`)
})