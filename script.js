document.getElementById('calcBtn').addEventListener('click', function() {
    const dobString = document.getElementById('dobInput').value;
    const resultDiv = document.getElementById('result');

    if (!dobString) {
        resultDiv.innerHTML = "Please select a valid date of birth!";
        return;
    }

    const dob = new Date(dobString);
    const today = new Date();

    if (dob > today) {
        resultDiv.innerHTML = "Error: Date cannot be in the future!";
        return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Adjust days if negative
    if (days < 0) {
        months--;
        // Get days in the previous month
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    // Adjust months if negative
    if (months < 0) {
        years--;
        months += 12;
    }

    resultDiv.innerHTML = `You are <br><span>${years} years, ${months} months, and ${days} days</span> old!`;
});
