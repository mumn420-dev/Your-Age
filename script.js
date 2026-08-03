document.getElementById('calcBtn').addEventListener('click', function() {
    const dobString = document.getElementById('dobInput').value;
    const resultDiv = document.getElementById('result');

    if (!dobString) {
        resultDiv.innerHTML = "الرجاء اختيار تاريخ ميلاد صحيح!";
        return;
    }

    const dob = new Date(dobString);
    const today = new Date();

    if (dob > today) {
        resultDiv.innerHTML = "خطأ: لا يمكن أن يكون التاريخ في المستقبل!";
        return;
    }

    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();

    // Adjust days if negative
    if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
    }

    // Adjust months if negative
    if (months < 0) {
        years--;
        months += 12;
    }

    resultDiv.innerHTML = `<span>${years} سنة، و ${months} شهر، و ${days} يوم</span>`;
});
