document.addEventListener('DOMContentLoaded', 
function() {
    loadData();
})

const projects = [
    "Members contributions",    // 0 = 500
    "Java Objects",             // 1 = 1000
    "Java Classes",             // 2 = 1000
    "Java Basics 1",            // 3 = 2000
    "Java Basics 2"             // 4 = 2000
    // If member completed projects 0-2 then use: projects.slice(0,3)
];

const members = [
    {
        username: "Maryam",
        score: 2500,
        projects: projects.slice(0,3),
        img: "maryam.jpg",
    },
    {
        username: "Bhavya",
        score: 1500,
        projects: projects.slice(0,2),
        img: "bhavya.jpg",
    },
    {
        username: "Rahul",
        score: 1000,
        projects: projects.slice(1,2),
        img: "rahul.jpg",
    },
    {
        username: "Sohan",
        score: 500,
        projects: projects.slice(0,1),
        img: "nope.jpg",
    },
    {
        username: "Sourabh",
        score: 0,
        projects: projects.slice(),
        img: "nope.jpg",
    },
    {
        username: "Puni",
        score: 0,
        projects: projects.slice(),
        img: "nope.jpg",
    },
    {
        username: "Hannan",
        score: 2500,
        projects: projects.slice(0,3),
        img: "hannan.jpg",
    },
    {
        username: "Sher",
        score: 500,
        projects: projects.slice(0),
        img: "sher.jpg",
    },
]

function loadData() {
    var mainBlock = document.getElementById("mainBlock");
    mainBlock.style.display = "block";

    var memberBlock = document.getElementById("memberBlock");
    memberBlock.style.display = "none";

    cardsHolder = document.getElementById("cardsHolder")
    members.forEach(function(member) {
        var card = document.createElement('div');
        card.classList.add('card','p-2','card-style');

        var img = document.createElement('img');
        img.className = "card-img-top";
        img.src = "assets/"+member.img;
        card.appendChild(img);

        var cardBody = document.createElement('div');
        cardBody.className = "card-body";
        var cardTitle = document.createElement('h5');
        cardTitle.className = "card-title";
        cardTitle.innerHTML = member.username;
        var cardText = document.createElement('p');
        cardText.className = "card-text";
        var score = document.createElement('span');
        score.innerHTML = "Score: "+member.score;
        cardText.appendChild(score);
        var cardBtn = document.createElement('div');
        cardBtn.classList.add('d-flex','flex-row','p-2');
        var cardOpen = document.createElement('button');
        cardOpen.classList.add('btn','btn-primary');
        cardOpen.innerHTML = "Open";
        cardBtn.appendChild(cardOpen);

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(cardBtn);
        
        card.appendChild(cardBody);

        cardsHolder.appendChild(card);


        cardOpen.addEventListener('click',function() {
            mainBlock.style.display = "none";
            memberBlock.style.display = "block";

            var memberDiv = document.createElement('div');
            memberDiv.className = "member";

            var nameTitle = document.createElement('h2');
            nameTitle.className = "text-white";
            nameTitle.textContent = member.username;
            var hr = document.createElement('hr');

            memberDiv.appendChild(nameTitle);
            memberDiv.appendChild(hr);

            var infoDiv = document.createElement('div');
            infoDiv.className = "items";
            var img = document.createElement('img');
            img.className = "img";
            img.src = "assets/"+member.img;
            img.alt = "Image not found!"
            img.style = "padding-bottom: 20px;"
            var username = document.createElement('div');
            username.innerHTML = "Username: "+member.username;
            var score = document.createElement('div');
            score.innerHTML = "Score: "+member.score;
            var rank = document.createElement('div');
            rank.innerHTML = "Rank: "+calcRank(member);
            var projects = document.createElement('div');
            projects.innerHTML = "Projects: ";
            var projectList = document.createElement('ol');
            projectList.style = "font-size:medium;"
            member.projects.forEach(function(project) {
                var li = document.createElement('li');
                li.appendChild(document.createTextNode(project));
                projectList.appendChild(li);
            })

            infoDiv.appendChild(img);
            infoDiv.appendChild(username);
            infoDiv.appendChild(score);
            infoDiv.appendChild(rank);
            infoDiv.appendChild(projects);
            infoDiv.appendChild(projectList);

            var space = document.createElement('p');
            space.style = "height: 200px;";

            memberDiv.appendChild(infoDiv);
            memberDiv.appendChild(space);

            memberBlock.appendChild(memberDiv);
        });



    })

}

function calcRank(thisMember) {
    var memberSet = new Set();
    members.forEach(function(member) {
        memberSet.add(member.score);
    })
    var memberArray = Array.from(memberSet).sort((a, b) => b - a);
    var rank;
    for (i=0; i<memberArray.length; i++) {
        if (memberArray[i] == thisMember.score) {
            rank = i;
        }
    }
    return rank+1;
}


/*

DONE - change variable names and file name
DONE - create div element (ordered list) for projects
DONE - create function to calculate rank
DONE - create others info objects
DONE - make a proper score system
DONE - use hide and block and one single html file for the whole website
- break into functions for cleaner code
DONE - create onclick trigger for the button and hide mainBlock and show memberBlock for particular member (inside the loop)

*/
