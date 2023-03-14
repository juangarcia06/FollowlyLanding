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
    });
    const data = await response.text();
    if (data === 'Account created') {
      // signup was successful, update the app state to show the Account page
      alert('Account created');
      // update state or redirect to a new page here
    } else {
      // signup was not successful, show an error message to the user
      alert('Error');
    }
    alert(username + password + email);
  }
  