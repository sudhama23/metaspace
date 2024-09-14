document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // prevent default form submission behavior

  const location = document.getElementById('keys').value.toLowerCase();
  const propertyType = document.getElementById('types').value;
  const category = document.getElementById('categories').value;

  // Define the URL mappings
  const urlMappings = {
      'Naigaon': {
          '1bhk': {
              'Apartment': 'example.com/naigaon1bhk.html',
              'Houses': 'example.com/naigaonhouses1.html',
              'Office': 'example.com/office1.html',
          },
          '2bhk': {
              'Apartment': 'example.com/naigaon2bhk.html',
              'Houses': 'example.com/naigaonhouses2.html',
              'Office': 'example.com/office2.html',
          },
          '3bhk': {
              'Apartment': 'example.com/naigaon3bhk.html',
              'Houses': 'example.com/naigaonhouses3.html',
              'Office': 'example.com/office3.html',
          },
      },
      // ... (add more properties as needed)
  };

  // Get the URL based on the selected options
  const selectedUrl = urlMappings[location][propertyType][category];

  // Check if the URL is valid
  if (selectedUrl) {
      window.location.href = selectedUrl;
  } else {
      alert('Please make valid selections in all fields.');
  }
});