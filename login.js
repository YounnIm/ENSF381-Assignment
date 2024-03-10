document.getElementById('loginButton').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const username = document.getElementById('username').value;
            const password = document.getElementById('email').value; // This is actually the email

            const user = users.find(user => user.username === username && user.email === password);

            const messageBox = document.getElementById('messageBox') || createMessageBox();
            if (user) {
                messageBox.textContent = 'Login successful!';
            } else {
                messageBox.textContent = 'Invalid username or password.';
            }
        })
        .catch(error => {
            alert('Error fetching data from API: ' + error);
        });
});

function createMessageBox() {
    const messageBox = document.createElement('div');
    messageBox.id = 'messageBox';
    document.body.insertBefore(messageBox, document.querySelector('footer'));
    return messageBox;
}