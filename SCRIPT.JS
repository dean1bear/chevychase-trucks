// Wait for the DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {
  
    // Function to handle form submission
    function handleFormSubmit(event) {
      event.preventDefault(); // Prevent the form from submitting
      
      // You can perform further actions here, such as fetching data, validating inputs, etc.
      // For demonstration purposes, let's just log the form data to the console
      
      const formData = new FormData(event.target); // Get form data
      console.log('Form Data:', formData);
      
      // You can also perform AJAX requests here using fetch() or XMLHttpRequest
      // Example: fetch('your_api_endpoint', { method: 'POST', body: formData })
    }
    
    // Find the form element and attach a submit event listener
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', handleFormSubmit);
    }
    
  });
  // Wait for the DOM to be fully loaded before executing code
document.addEventListener('DOMContentLoaded', function() {
  
    // Function to handle form submission
    function handleFormSubmit(event) {
      event.preventDefault(); // Prevent the form from submitting
      
      // You can perform further actions here, such as validating inputs, sending data to a server, etc.
      // For demonstration purposes, let's log the form data to the console
      
      const formData = new FormData(event.target); // Get form data
      console.log('Form Data:', formData);
      
      // Example: Send data to a server using fetch() or XMLHttpRequest
      // fetch('your_api_endpoint', {
      //   method: 'POST',
      //   body: formData
      // }).then(response => {
      //   if (response.ok) {
      //     console.log('Form submission successful');
      //     // Reset form if submission is successful
      //     event.target.reset();
      //   } else {
      //     console.error('Form submission failed');
      //   }
      // }).catch(error => {
      //   console.error('Error during form submission:', error);
      // });
    }
    
    // Find the feedback form element and attach a submit event listener
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
      feedbackForm.addEventListener('submit', handleFormSubmit);
    }
    
  });
  