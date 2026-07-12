const NGROK_URL = "https://zfsdfsdfl.ngrok-free.dev/api"; // Replace with your active ngrok URL

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    try {
        const response = await fetch(`${NGROK_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            messageElement.innerText = `Login Successful! Welcome ${data.username}`;
            // Store token in browser memory
            localStorage.setItem('token', data.token);
        } else {
            messageElement.innerText = "Login Failed. Check credentials.";
        }
    } catch (error) {
        messageElement.innerText = "Error connecting to the server.";
        console.error(error);
    }
});
