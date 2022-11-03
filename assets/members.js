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

    const members = [
        {
            username: "Maryam",
            score: 1500,
            rank: 1,
            projects: projects.slice(0,2),
        },
        {
            username: "Bhavya",
            score: 1500,
            rank: 1,
            projects: projects.slice(0,2),
        },
        {
            username: "Tarctic",
            score: 1500,
            rank: 1,
            projects: projects.slice(0,3),
        },
        {
            username: "Rahul",
            score: 1000,
            rank: 2,
            projects: projects.slice(1,2),
        },
        {
            username: "Sohan",
            score: 500,
            rank: 3,
            projects: projects.slice(0,1),
        },
        {
            username: "Sourabh",
            score: 0,
            rank: 4,
            projects: projects.slice(0,3),
        },
        {
            username: "Puni",
            score: 0,
            rank: 4,
            projects: projects.slice(0,3),
        },
        {
            username: "Hannan",
            score: 0,
            rank: 4,
            projects: projects.slice(),
        },
        {
            username: "Sher",
            score: 1500,
            rank: 1,
            projects: projects.slice(),
        },
    ]

    const username = document.getElementById("name").innerHTML;
    members.forEach(function(member) {
        console.log(member)
        if (member.username == username) {
            const username = document.getElementById('username');
            username.innerHTML = member.username;
            const score = document.getElementById('score');
            score.innerHTML = member.score;
            const rank = document.getElementById('rank');
            rank.innerHTML = member.rank;
    
            const projects = document.getElementById('projects');
            member.projects.forEach(function(project) {
                li = document.createElement('li');
                li.appendChild(document.createTextNode(project));
                projects.appendChild(li);
            })
            
        }
    })

}

/*

DONE - change variable names and file name
DONE - create div element (ordered list) for projects
- create function to calculate rank
DONE - create others info objects
- make a proper score system

*/
