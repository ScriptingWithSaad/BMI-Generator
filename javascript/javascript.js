function calculateBMI() {
            // Get the input values
            const height = document.getElementById('height').value;
            const weight = document.getElementById('weight').value;
            const result = document.getElementById('result');

            // Show the result div
            result.style.display = 'block';

            // Check if inputs are valid
            if(height === '' || weight === '') {
                result.style.backgroundColor = '#ff4444';
                result.innerHTML = 'Please enter both height and weight';
                return;
            }

            // Convert string inputs to numbers
            const heightNum = parseFloat(height);
            const weightNum = parseFloat(weight);

            // Check if inputs are positive numbers
            if(heightNum <= 0 || weightNum <= 0) {
                result.style.backgroundColor = '#ff4444';
                result.innerHTML = 'Please enter valid height and weight';
                return;
            }

            // Calculate BMI
            const heightMeters = heightNum / 100;
            const bmi = weightNum / (heightMeters * heightMeters);
            const bmiRounded = bmi.toFixed(1);

            // Determine BMI category and color
            let category, color;

            if(bmi < 18.6) {
                category = 'Under Weight';
                color = '#FFC107'; // Yellow
            } else if(bmi >= 18.6 && bmi <= 24.9) {
                category = 'Normal Range';
                color = '#4CAF50'; // Green
            } else {
                category = 'Overweight';
                color = '#ff4444'; // Red
            }

            // Display the result
            result.style.backgroundColor = color;
            result.innerHTML = `
                Your BMI is: <strong>${bmiRounded}</strong><br>
                Category: <strong>${category}</strong>
            `;
        }

        // Clear result when input changes
        document.getElementById('height').addEventListener('input', function() {
            document.getElementById('result').style.display = 'none';
        });

        document.getElementById('weight').addEventListener('input', function() {
            document.getElementById('result').style.display = 'none';
        });
