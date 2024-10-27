// Convert feet to centimeters when feet input changes
        document.getElementById('feet').addEventListener('input', function() {
            const feet = parseFloat(this.value);
            if (!isNaN(feet) && feet > 0) {
                const cm = feet * 30.48; // Convert feet to centimeters
                document.getElementById('height').value = cm.toFixed(1);
            } else {
                document.getElementById('height').value = '';
            }
            document.getElementById('result').style.display = 'none';
        });

        function calculateBMI() {
            const height = document.getElementById('height').value;
            const weight = document.getElementById('weight').value;
            const result = document.getElementById('result');
            
            result.style.display = 'block';
            
            if(height === '' || weight === '') {
                result.style.backgroundColor = '#ff4444';
                result.innerHTML = 'Please enter both height and weight';
                return;
            }
            
            const heightNum = parseFloat(height);
            const weightNum = parseFloat(weight);
            
            if(heightNum <= 0 || weightNum <= 0) {
                result.style.backgroundColor = '#ff4444';
                result.innerHTML = 'Please enter valid height and weight';
                return;
            }
            
            const heightMeters = heightNum / 100;
            const bmi = weightNum / (heightMeters * heightMeters);
            const bmiRounded = bmi.toFixed(1);
            
            let category, color;
            if(bmi < 18.6) {
                category = 'Under Weight';
                color = '#FFC107';
            } else if(bmi >= 18.6 && bmi <= 24.9) {
                category = 'Normal Range';
                color = '#4CAF50';
            } else {
                category = 'Overweight';
                color = '#ff4444';
            }
            
            result.style.backgroundColor = color;
            result.innerHTML = `
                Your BMI is: <strong>${bmiRounded}</strong><br>
                Category: <strong>${category}</strong>
            `;
        }

        document.getElementById('height').addEventListener('input', function() {
            document.getElementById('result').style.display = 'none';
        });
        
        document.getElementById('weight').addEventListener('input', function() {
            document.getElementById('result').style.display = 'none';
        });
