  const form = document.getElementById('bmiForm');
        const result = document.getElementById('result');
        const heightError = document.getElementById('heightError');
        const weightError = document.getElementById('weightError');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset error messages
            heightError.textContent = '';
            weightError.textContent = '';
            result.style.display = 'none';

            // Get input values
            const height = parseFloat(document.getElementById('height').value);
            const weight = parseFloat(document.getElementById('weight').value);

            
            let isValid = true;

            if (!height || height <= 0) {
                heightError.textContent = 'Please enter a valid height';
                isValid = false;
            }

            if (!weight || weight <= 0) {
                weightError.textContent = 'Please enter a valid weight';
                isValid = false;
            }

            if (!isValid) return;

            // Calculate BMI
            const heightInMeters = height / 100;
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

            
            let weightStatus = '';
            let backgroundColor = '';

            if (bmi < 18.6) {
                weightStatus = 'Under Weight';
                backgroundColor = '#FFC107'; // Yellow
            } else if (bmi >= 18.6 && bmi <= 24.9) {
                weightStatus = 'Normal Range';
                backgroundColor = '#4CAF50'; // Green
            } else {
                weightStatus = 'Overweight';
                backgroundColor = '#f44336'; // Red
            }

            // Display result
            result.style.display = 'block';
            result.style.backgroundColor = backgroundColor;
            result.innerHTML = `Your BMI is <strong>${bmi}</strong><br>${weightStatus}`;
        });

        
        document.getElementById('height').addEventListener('input', function() {
            heightError.textContent = '';
        });

        document.getElementById('weight').addEventListener('input', function() {
            weightError.textContent = '';
        });
