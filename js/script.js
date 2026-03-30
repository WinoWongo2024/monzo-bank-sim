document.addEventListener('DOMContentLoaded', function() {
    let balance = 0;
    const balanceDisplay = document.getElementById('balance');
    const transactionList = document.getElementById('transaction-list');
    const depositButton = document.getElementById('deposit');
    const withdrawButton = document.getElementById('withdraw');

    function updateBalanceDisplay() {
        balanceDisplay.textContent = '£' + balance.toFixed(2);
    }

    function addTransaction(type, amount) {
        const listItem = document.createElement('li');
        listItem.textContent = type + ': £' + amount.toFixed(2);
        transactionList.appendChild(listItem);
    }

    depositButton.addEventListener('click', function() {
        const amount = parseFloat(prompt('Enter deposit amount:'));
        if (!isNaN(amount) && amount > 0) {
            balance += amount;
            updateBalanceDisplay();
            addTransaction('Deposit', amount);
        } else {
            alert('Invalid deposit amount.');
        }
    });

    withdrawButton.addEventListener('click', function() {
        const amount = parseFloat(prompt('Enter withdrawal amount:'));
        if (!isNaN(amount) && amount > 0) {
            if (amount <= balance) {
                balance -= amount;
                updateBalanceDisplay();
                addTransaction('Withdrawal', amount);
            } else {
                alert('Insufficient funds.');
            }
        } else {
            alert('Invalid withdrawal amount.');
        }
    });

    updateBalanceDisplay(); // Initial balance display
});
