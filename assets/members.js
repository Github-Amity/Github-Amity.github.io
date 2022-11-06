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
            img: "maryam.jpg",
        },
        {
            username: "Bhavya",
            score: 1500,
            rank: 1,
            projects: projects.slice(0,2),
            img: "bhavya.jpg",
        },
        {
            username: "Tarctic",
            score: 1500,
            rank: 1,
            projects: projects.slice(0,3),
            img: "tarctic.jpg",
        },
        {
            username: "Rahul",
            score: 1000,
            rank: 2,
            projects: projects.slice(1,2),
            img: "rahul.jpg",
        },
        {
            username: "Sohan",
            score: 500,
            rank: 3,
            projects: projects.slice(0,1),
            img: "nope.jpg",
        },
        {
            username: "Sourabh",
            score: 0,
            rank: 4,
            projects: projects.slice(0,3),
            img: "nope.jpg",
        },
        {
            username: "Puni",
            score: 0,
            rank: 4,
            projects: projects.slice(0,3),
            img: "nope.jpg",
        },
        {
            username: "Hannan",
            score: 0,
            rank: 4,
            projects: projects.slice(),
            img: "hannan.jpg",
        },
        {
            username: "Sher",
            score: 0,
            rank: 4,
            projects: projects.slice(),
            img: "nope.jpg",
        },
    ]

    const username = document.getElementById("name").innerHTML;
    members.forEach(function(member) {
        console.log(member)
        if (member.username == username) {

            const img = document.querySelector('img');
            img.src = member.img;

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
- use hide and block and one single html file for the whole website

*/
