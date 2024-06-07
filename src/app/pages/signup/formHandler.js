document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Submit the form via AJAX
      fetch('signup.php', {
        method: 'POST',
        body: new FormData(form)
      })
      .then(response => {
        if (response.ok) {
          // Clear form fields upon successful submission
          document.getElementById('firstname').value = '';
          document.getElementById('lastname').value = '';
          document.getElementById('idnum').value = '';
          document.getElementById('homeaddress').value = '';
          document.getElementById('email').value = '';
          document.getElementById('phone').value = '';
          document.getElementById('password').value = '';
          document.getElementById('confirmpassword').value = '';
  
          // Display a success message
          alert('Profile successfully created');
        } else {
          // Display an error message
          alert('An error occurred. Please try again later.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
      });
    });
  });
  