document.addEventListener('DOMContentLoaded', 
function() {
    loadData();
})


function toggleMain() {
    mainBlock = document.getElementById("mainBlock");
    if (mainBlock.style.display === "none") {
    mainBlock.style.display = "block";
    } else {
    mainBlock.style.display = "none";
    }
    
}

function loadData() {

    const projects = [
        "Members contributions",    // 0
        "Java Objects",             // 1
        "Java Classes",             // 2
        "Java Basics 1",            // 3
        "Java Basics 2"             // 4
    ];

    const members = [
        {
            username: "Maryam",
            score: 2500,
            rank: 1,
            projects: projects.slice(0,3),
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
            score: 500,
            rank: 4,
            projects: projects.slice(0),
            img: "sher.jpg",
        },
    ]

    cardsHolder = document.getElementById("cardsHolder")
    members.forEach(function(member) {
        var card = document.createElement('div');
        card.classList.add('card','p-2','card-style');

        var img = document.createElement('img');
        img.className = "card-img-top";
        card.appendChild(img);

        var cardBody = document.createElement('div');
        cardBody.className = "card-body";
        var cardTitle = document.createElement('h5');
        cardTitle.className = "card-title";
        var cardText = document.createElement('p');
        cardText.className = "card-text";
        var score = document.createElement('span');
        cardText.appendChild(score);
        var cardBtn = document.createElement('div');
        cardBtn.classList.add('d-flex','flex-row','p-2');
        var cardOpen = document.createElement('a');
        cardOpen.classList.add('btn','btn-primary');
        cardOpen.innerHTML = "Open";
        cardBtn.appendChild(cardOpen);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardBtn);
        
        card.appendChild(cardBody);

        cardsHolder.appendChild(card);

        img.src = "assets/"+member.img;
        cardTitle.innerHTML = member.username;
        score.innerHTML = member.score
        cardOpen.href = ""



    })

}

/*

DONE - change variable names and file name
DONE - create div element (ordered list) for projects
- create function to calculate rank
DONE - create others info objects
- make a proper score system
- use hide and block and one single html file for the whole website
- break into functions for cleaner code

Next:
- change "open button" from href to button
- create onclick trigger for the button and hide mainBlock and show memberBlock for particular member (inside the loop)

*/
