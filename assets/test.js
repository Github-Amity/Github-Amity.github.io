document.addEventListener('DOMContentLoaded', 
function() {
    loadData();
})

function loadData() {
    const tarctic = {
        score: 1500,
        rank: 1,
        projects: [
            ""
        ]
    }

	const score = document.querySelector('#score');
    score.innerHTML = tarctic.score;
}