import cors from 'cors'
import express from 'express'

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 3001

app.post('/webhook', (req, res) => {
  const { orderId, amount, currency, status } = req.body
  console.log(
    `Received webhook: Order ${orderId} - ${amount} ${currency} - Status: ${status}`
  )
  res.sendStatus(200)
})

app.listen(PORT, () => console.log(`Service 2 running on port ${PORT}`))
