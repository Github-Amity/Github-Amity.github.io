document.addEventListener('DOMContentLoaded', 
function() {
    loadData();
})

const projects = [
    {"Members contributions":500},    // 0 = 500
    {"Java Objects":1000},             // 1 = 1000
    {"Java Classes":1000},             // 2 = 1000
    {"Java Basics 1":2000},            // 3 = 2000
    {"Java Basics 2":2000},             // 4 = 2000
    {"Abstraction": 2000}
    // If member completed projects 0-2 then use: projects.slice(0,3)
];

const members = [
    {
        username: "Maryam",
        projects: projects.slice(0,4),
        img: "maryam.jpg",
    },
    {
        username: "Bhavya",
        projects: projects.slice(0,2),
        img: "bhavya.jpg",
    },
    {
        username: "Rahul",
        projects: projects.slice(1,2),
        img: "rahul.jpg",
    },
    {
        username: "Sohan",
        projects: projects.slice(0,1),
        img: "nope.jpg",
    },
    {
        username: "Sourabh",
        projects: projects.slice(0,1),
        img: "nope.jpg",
    },
    {
        username: "Puni",
        projects: [],
        img: "nope.jpg",
    },
    {
        username: "Hannan",
        projects: projects.slice(0,3),
        img: "hannan.jpg",
    },
    {
        username: "Sher",
        projects: projects.slice(0,1),
        img: "sher.jpg",
    },
    {
        username:"Dwithun",
        projects: [projects[0],projects[2]],
        img: "nope.jpg",
    },
    {
        username:"Harshneet",
        projects: [],
        img: "nope.jpg",
    },
    {
        username:"Kunal",
        projects: [],
        img: "nope.jpg",
    },
    {
        username:"availbletocode",
        projects: projects.slice(0,1),
        img: "nope.jpg",
    },
    {
        username:"Kunal",
        projects: [],
        img: "nope.jpg",
    },
    {
        username:"Rohit",
        projects: [],
        img: "nope.jpg",
    },
]

function loadData() {
    var mainBlock = document.getElementById("mainBlock");
    mainBlock.style.display = "block";

    var memberBlock = document.getElementById("memberBlock");
    memberBlock.style.display = "none";

    var scoreBoard = document.getElementById("scoreBoard");
    scoreBoard.style.display = "none";

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
        score.innerHTML = "Score: "+calcScore(member.projects);
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
            score.innerHTML = "Score: "+calcScore(member.projects);
            var rank = document.createElement('div');
            rank.innerHTML = "Rank: "+calcRank(member.projects);
            var projects = document.createElement('div');
            projects.innerHTML = "Projects: ";
            var projectList = document.createElement('ol');
            projectList.style = "font-size:medium;"
            member.projects.forEach(function(project) {
                var li = document.createElement('li');
                li.appendChild(document.createTextNode(Object.keys(project)[0]));
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

    var scoreLink = document.getElementById('scoreLink');
    scoreLink.addEventListener('click', () => {
        mainBlock.style.display = "none";
        memberBlock.style.display = "none";
        scoreBoard.style.display = "block";

        scoreBoard.style = "padding: 40px";
        var table = document.createElement('table');
        table.classList.add('table','table-dark','table-striped');
        table.style = "width: 1000px; margin: 0 auto;";
        var thead = document.createElement('thead');
        var tr = document.createElement('tr');
        var rankCol = document.createElement('th');
        rankCol.textContent = "Rank";
        rankCol.style = "padding-left: 40px;";
        var nameCol = document.createElement('th');
        nameCol.textContent = "Username";
        var scoreCol = document.createElement('th');
        scoreCol.textContent = "Score";
        tr.appendChild(rankCol);
        tr.appendChild(nameCol);
        tr.appendChild(scoreCol);
        thead.appendChild(tr);
        table.appendChild(thead);
        

        for (i=0;i<members.length-1;i++) {
            if(calcScore(members[i].projects) < calcScore(members[i+1].projects)) {
                // console.log(members[i]);
                var temp = members[i];
                members[i] = members[i+1];
                members[i+1] = temp;
                i=0;
            }
        }

        var tbody = document.createElement('tbody');
        members.forEach(function(member) {
            var row = document.createElement('tr');
            var num = document.createElement('td');
            num.textContent = calcRank(member.projects);
            num.style = "padding-left: 50px;";
            var name = document.createElement('td');
            name.textContent = member.username;
            var score = document.createElement('td');
            score.textContent = calcScore(member.projects);
            row.appendChild(num);
            row.appendChild(name);
            row.appendChild(score);
            tbody.appendChild(row);
        })

        table.appendChild(tbody);
        scoreBoard.appendChild(table);
    })

}

function calcScore(projects) {
    var totalScore = 0;
    projects.forEach(function(project) {
        score = Object.values(project)[0];
        totalScore += score;
    })

    return totalScore;
}

function calcRank(projects) {
    var memberSet = new Set();
    members.forEach(function(member) {
        memberSet.add(calcScore(member.projects));
    })
    var memberArray = Array.from(memberSet).sort((a, b) => b - a);
    var rank;
    for (i=0; i<memberArray.length; i++) {
        if (memberArray[i] == calcScore(projects)) {
            rank = i;
        }
    }
    return rank+1;
}

/*

DONE - Add a function to calculate score
DONE - Add other members
- Create a scoreboard page
- Create a projects page
- Create a tutorial page?

 */