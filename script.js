// Assuming you have an initial balance of $0.00
let balance = 0.00;

// Function to handle the top-up process
function topUp() {
    // Get the top-up amount from the input field
    const amountInput = document.getElementById('topUpAmount');
    const amount = parseFloat(amountInput.value);

    // Validate the input
    if (isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount greater than 0.');
        return;
    }

    // Update the balance
    balance += amount;
    document.getElementById('balance').textContent = balance.toFixed(2);

    // Record the transaction
    recordTransaction(`Added $${amount.toFixed(2)}`);

    // Clear the input field
    amountInput.value = '';

    // Redirect to the top-up details page
    window.location.href = 'topUpDetails.html';
}

// Function to record a transaction
function recordTransaction(description) {
    const transactionList = document.getElementById('transactionList');
    const li = document.createElement('li');
    li.textContent = description;
    transactionList.appendChild(li);
}

// Initialize the last updated timestamp
function updateLastUpdated() {
    const lastUpdated = document.getElementById('lastUpdated');
    const now = new Date();
    lastUpdated.textContent = now.toLocaleString();
}

// Call this function to update the last updated timestamp whenever needed
updateLastUpdated();

// Function to handle payment for the selected service
function payForService() {
    const serviceSelect = document.getElementById('serviceSelect');
    const selectedOption = serviceSelect.options[serviceSelect.selectedIndex];
    const servicePrice = parseFloat(selectedOption.text.split('$')[1].split('/')[0].trim());

    if (isNaN(servicePrice) || servicePrice <= 0) {
        alert('Invalid service price.');
        return;
    }

    // Check if the user has sufficient balance
    if (balance < servicePrice) {
        alert('Insufficient balance. Please top up your wallet.');
        return;
    }

    // Deduct the service price from the balance
    balance -= servicePrice;
    document.getElementById('balance').textContent = balance.toFixed(2);

    // Record the transaction
    recordTransaction(`Paid $${servicePrice.toFixed(2)} for ${selectedOption.text}`);

    // Store the service details and redirect to payment page
    localStorage.setItem('paymentAmount', servicePrice.toFixed(2));
    localStorage.setItem('serviceName', selectedOption.text);
    window.location.href = 'PAY.html';
}
