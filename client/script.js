document.getElementById('purchaseBtn').addEventListener('click', async () => {
  const purchaseStatus = document.getElementById('purchaseStatus')
  purchaseStatus.innerHTML = 'Processing purchase...'

  try {
    const response = await fetch('http://localhost:3000/purchase', {
      method: 'POST',
    })
    const data = await response.json()

    if (data.success) {
      purchaseStatus.innerHTML =
        'Payment successful! You are now subscribed to the course.'
      purchaseStatus.className = 'alert alert-success'
    } else {
      purchaseStatus.innerHTML = 'Payment failed. Please try again.'
      purchaseStatus.className = 'alert alert-danger'
    }
  } catch (error) {
    purchaseStatus.innerHTML = 'An error occurred. Please try again.'
    purchaseStatus.className = 'alert alert-danger'
  }
})
