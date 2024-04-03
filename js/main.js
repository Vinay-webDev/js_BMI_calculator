
document.getElementById('calculate').addEventListener('click', function() {
    // Get the weight and height input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    // Check if the input values are valid
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById('result').textContent = 'Please enter valid weight and height.';
      return;
    }
  
    // Calculate the BMI
    const bmi = weight / (height * height);
  
    // Display the result
    document.getElementById('result').textContent = 'Your BMI is: ' + bmi.toFixed(2);
  });


















