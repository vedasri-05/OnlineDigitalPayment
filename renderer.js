// const signupForm = document.getElementById('signup');

// signupForm.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const username = document.getElementById('username').value.trim();
//   const email = document.getElementById('email').value.trim();
//   const password = document.getElementById('password').value.trim();

//   try {
//     // Validate inputs first
//     if (!username || !email || !password) {
//       throw new Error('All fields are required');
//     }

//     // Perform registration
//     const result = await window.electronAPI.registerUser({ 
//       username, 
//       email, 
//       password 
//     });

//     if (result.success) {
//       // Clear form and redirect
//       signupForm.reset();
//       window.location.href = 'home.html';
//     }
//   } catch (error) {
//     console.error('Registration error:', error);
//     alert(`Registration failed: ${error.message}`);
//   }
// });