const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result')
    const weightguide = document.querySelector('#weightguide')


    if (height <= 0 || isNaN(height)) {
        result.innerHTML = `Your value is ${height}`;
    } else if (weight <= 0 || isNaN(weight)) {
        result.innerHTML = `Your Value is ${weight}`;
    } else {
        const heightInMeters = height / 100;
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        let weightStatus = '';
        if (bmi < 18.6) {
            weightStatus = 'Under Weight';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            weightStatus = 'Normal weight';
        } else {
            weightStatus = 'Over Weight';
        }

        result.innerHTML = `Your BMI Weight is ${bmi} ${weightStatus}`;
    }
});
