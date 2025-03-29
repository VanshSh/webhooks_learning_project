

# Webhook Course Purchase Project

This project demonstrates a simple e-commerce scenario using webhooks. It simulates a course purchase process where a user clicks a button to buy a course, triggering a webhook flow between two services.

## Project Structure

```
webhooks_learning_project/
├── client/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── server/
│   ├── service1.js
│   └── service2.js
└── README.md
```

## Tech Stack

- Client-side: HTML, CSS, JavaScript
- Server-side: Node.js, Express.js
- Styling: Bootstrap

## Features

- Simple course purchase interface
- Simulated payment processing
- Webhook communication between two services
- Real-time purchase status updates

## How to Run Locally

1. Clone the repository:
   ```
   git clone url
   cd webhooks_learning_project
   ```

2. Install dependencies:
   ```
   cd server
   npm install express cors node-fetch
   ```

3. Start Service 1:
   ```
   node service1.js
   ```

4. In a new terminal, start Service 2:
   ```
   node service2.js
   ```

5. Open `client/index.html` in a web browser.

6. Click the "Purchase" button to simulate a course purchase and observe the webhook flow.

## How It Works

1. The user clicks the "Purchase" button on the client-side.
2. A request is sent to Service 1 (running on port 3000).
3. Service 1 simulates payment processing and then sends a webhook to Service 2 (running on port 3001).
4. Service 2 receives the webhook and logs the order details.
5. The client receives a success message and updates the UI accordingly.

This project demonstrates the basic concept of webhooks in a simple e-commerce scenario.
