// Skill Items Animation
document.addEventListener('DOMContentLoaded', function () {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, index * 200);
    });
});

function showModal(skill) {
    alert("Mehr Informationen über: " + skill);
}

// Skills Chart
const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['JavaScript', 'CSS', 'HTML', 'Java', 'Spring Boot'],
        datasets: [{
            label: 'Fähigkeiten',
            data: [80, 70, 90, 75, 85],
            backgroundColor: '#007BFF',
            borderColor: '#0056b3',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
