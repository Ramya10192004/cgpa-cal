document.getElementById('num-courses').addEventListener('input', function() {
    const numCourses = parseInt(this.value);
    const coursesContainer = document.getElementById('courses-container');
    coursesContainer.innerHTML = '';

    if (numCourses > 0) {
        for (let i = 0; i < numCourses; i++) {
            const courseDiv = document.createElement('div');
            courseDiv.classList.add('input-group');
            courseDiv.innerHTML = `
                <label for="grade-${i}">Grade for Course ${i + 1}:</label>
                <input type="number" id="grade-${i}" name="grade-${i}" step="0.01" min="0" max="4" required>
                <label for="credits-${i}">Credits for Course ${i + 1}:</label>
                <input type="number" id="credits-${i}" name="credits-${i}" step="0.01" min="0" required>
            `;
            coursesContainer.appendChild(courseDiv);
        }
    }
});

function calculateCGPA() {
    const numCourses = parseInt(document.getElementById('num-courses').value);
    let totalPoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < numCourses; i++) {
        const grade = parseFloat(document.getElementById(`grade-${i}`).value);
        const credits = parseFloat(document.getElementById(`credits-${i}`).value);

        if (isNaN(grade) || isNaN(credits) || credits <= 0) {
            alert('Please enter valid grades and credits.');
            return;
        }

        totalPoints += grade * credits;
        totalCredits += credits;
    }

    const cgpa = (totalPoints / totalCredits).toFixed(2);
    document.getElementById('result').innerText = `Your CGPA is: ${cgpa}`;
}
