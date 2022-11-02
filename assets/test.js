document.addEventListener('DOMContentLoaded', 
function() {
    loadData();
})

function loadData() {
    const tarctic = {
        score: 150000,
        rank: 1,
        projects: [
            ""
        ]
    }

	const score = document.querySelector('#score');
    score.innerHTML = tarctic.score;
}
