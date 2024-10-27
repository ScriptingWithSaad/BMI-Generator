 // Get form elements
        const form = document.querySelector('form');
        const heightInput = document.querySelector('#height');
        const weightInput = document.querySelector('#weight');
        const result = document.querySelector('#result');

        // Add form submit event listener
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get height and weight values
            const height = parseFloat(heightInput.value);
            const weight = parseFloat(weightInput.value);
            
            
            if (height === '' || isNaN(height) || height <= 0) {
                result.innerHTML = 'Please provide a valid height';
                return;
            }
            
            if (weight === '' || isNaN(weight) || weight <= 0) {
                result.innerHTML = 'Please provide a valid weight';
                return;
            }
            
            // Calculate BMI
            const heightInMeters = height / 100;  // Convert cm to meters
            const bmi = weight / (heightInMeters * heightInMeters);
            const bmiFixed = bmi.toFixed(2);  // Round to 2 decimal places
            
            
            let message;
            let color;
            
            if (bmi < 18.6) {
                message = 'Under Weight';
                color = '#FFC107';  // Yellow
            } else if (bmi >= 18.6 && bmi <= 24.9) {
                message = 'Normal Range';
                color = '#4CAF50';  // Green
            } else {
                message = 'Overweight';
                color = '#f44336';  // Red
            }
            
            // Display result
            result.style.backgroundColor = color;
            result.innerHTML = `<p>Your BMI: ${bmiFixed}</p><p>You are: ${message}</p>`;
        });

        
        heightInput.addEventListener('input', function() {
            result.innerHTML = '';
            result.style.backgroundColor = 'transparent';
        });

        weightInput.addEventListener('input', function() {
            result.innerHTML = '';
            result.style.backgroundColor = 'transparent';
        });
