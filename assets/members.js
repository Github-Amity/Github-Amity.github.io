document.addEventListener('DOMContentLoaded', 
function() {
    loadData();
})

function loadData() {
    var mainBlock = document.getElementById("mainBlock");
    mainBlock.style.display = "block";

    var memberBlock = document.getElementById("memberBlock");
    memberBlock.style.display = "none";

    const projects = [
        "Members contributions",    // 0
        "Java Objects",             // 1
        "Java Classes",             // 2
        "Java Basics 1",            // 3
        "Java Basics 2"             // 4
        // If member completed projects 0,1,2 then use: projects.slice(0,3)
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
            rank.innerHTML = "Rank: "+member.rank;
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
