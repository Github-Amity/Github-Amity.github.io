document.addEventListener('DOMContentLoaded', 
function() {
    loadData();
})

function loadData() {

    const projects = [
        "Members contributions",    // 0
        "Java Objects",             // 1
        "Java Classes",             // 2
    ];

    const tarctic = {
        score: 1500,
        rank: 1,
        projects: projects[0,3]
    }

	const score = document.querySelector('#score');
    score.innerHTML = tarctic.score;
}

/*

- change variable names and file name
- create div element (ordered list) for projects
- create function to calculate rank
- create others info objects
- make a proper score system

*/
