async function handleSignUp() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const response = await fetch('http://localhost:5000/create-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    }.then((response) => {
        if (response.ok) {
            window.location.replace('https://app.followly.es');
        } else {
            return response.json();
        }
    })    
    );
}