const form = document.getElementById('bmiForm');
        const result = document.getElementById('result');
        const heightError = document.getElementById('heightError');
        const weightError = document.getElementById('weightError');

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset error messages
            heightError.textContent = '';
            weightError.textContent = '';
            result.textContent = '';
            result.style.backgroundColor = '';

            // Get input values
            const height = parseFloat(document.getElementById('height').value);
            const weight = parseFloat(document.getElementById('weight').value);

            
            let isValid = true;

            if (!height || height <= 0 || height > 300) {
                heightError.textContent = 'Please enter a valid height between 1 and 300 cm';
                isValid = false;
            }

            if (!weight || weight <= 0 || weight > 500) {
                weightError.textContent = 'Please enter a valid weight between 1 and 500 kg';
                isValid = false;
            }

            if (!isValid) return;

            // Calculate BMI
            const heightInMeters = height / 100;
            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

            
            let weightStatus = '';
            let backgroundColor = '';

            if (bmi < 18.5) {
                weightStatus = 'Underweight';
                backgroundColor = '#FFC107';
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                weightStatus = 'Normal weight';
                backgroundColor = '#4CAF50';
            } else if (bmi >= 25 && bmi <= 29.9) {
                weightStatus = 'Overweight';
                backgroundColor = '#FF9800';
            } else {
                weightStatus = 'Obese';
                backgroundColor = '#f44336';
            }

            // Display result
            result.style.backgroundColor = backgroundColor;
            result.style.color = 'white';
            result.style.padding = '1rem';
            result.innerHTML = `Your BMI is <strong>${bmi}</strong><br>${weightStatus}`;
        });

        
        document.getElementById('height').addEventListener('input', function() {
            heightError.textContent = '';
        });

        document.getElementById('weight').addEventListener('input', function() {
            weightError.textContent = '';
        });
