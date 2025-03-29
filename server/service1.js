import cors from 'cors'
import express from 'express'
import fetch from 'node-fetch'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3000

app.post('/purchase', async (req, res) => {
  // Simulate payment processing
  await new Promise((resolve) => setTimeout(resolve, 2000))
  console.log('😇 L-14 in service1.js=> ', 'Received order')

  // Trigger webhook to Service 2
  try {
    const webhookResponse = await fetch('http://localhost:3001/webhook', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        orderId: Math.floor(Math.random() * 1000000),
        amount: 99,
        currency: 'USD',
        status: 'completed',
      }),
    })

    if (webhookResponse.ok) {
      res.json({ success: true })
    } else {
      res.status(500).json({ success: false, error: 'Webhook failed' })
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Internal server error' })
  }
})

app.listen(PORT, () => console.log(`Service 1 running on port ${PORT}`))
