
function changeUser() {
    i = document.getElementById('changeUser').value;
    loggedIn = i;
    save();
    load();
}

function changeUserMobil() {
    i = document.getElementById('changeUserMobil').value;
    loggedIn = i;
    save();
    load();
}

function save() {
    let usersToText = JSON.stringify(Users);
    localStorage.setItem('users', usersToText);

    let loggedInText = JSON.stringify(loggedIn);
    localStorage.setItem('loggedIn', loggedInText);
}

function load() {
    let usersToText = localStorage.getItem('users');

    if (usersToText) {
        Users = JSON.parse(usersToText);
    }

    let loggedInText = localStorage.getItem('loggedIn');

    if (loggedInText) {
        loggedIn = JSON.parse(loggedInText);
    }

    document.getElementById('wrapper').innerHTML = homepageTemplate();

    renderStory('foryou');
    rendersuggestions();
    renderTimeline();

    save();
}

function renderStory(param) {
    document.getElementById('storys').innerHTML = '';

    if (param == 'follow') {
        for (let i = 0; i < Users[0].Follower.length; i++) {
            let user = Users[0].Follower[i];
            document.getElementById('storys').innerHTML += storyTemplate(user, i);
        }
    }
    if (param == 'foryou') {
        for (let i = 0; i < Users.length; i++) {
            let user = Users[i];

            document.getElementById('storys').innerHTML += storyTemplate(user, i);
        }
    }
}

function rendersuggestions() {
    for (let i = 0; i < Users.length; i++) {
        let user = Users[i];

        document.getElementById('profile').innerHTML += suggestionsTemplate(user, i);
    }
}

function renderTimeline() {
    document.getElementById('posts').innerHTML = '';

    for (let i = 0; i < Users.length; i++) {
        let user = Users[i];
        let userPicture = user.Posts[0]['Picture'];

        document.getElementById('posts').innerHTML += TimelineTemplate(i, user, userPicture);

        for (let j = 0; j < user.Posts[0].Comments.length; j++) {

            let Usr = user.Posts[0].Comments[j]['User'];
            let Kom = user.Posts[0].Comments[j]['Comments'];
            if (Usr) {
                document.getElementById('lmn' + i).innerHTML += `<p>${Usr}:____${Kom}</p>`;
            }
        }

    }
}

function renderSinglePost(pic, i) {
    document.getElementById('pictures').innerHTML = '';
    document.getElementById('pictures').innerHTML += SinglePostTemplate(pic);


    for (let k = 0; k < pic.Posts[j].Comments.length; k++) {

        let Usr = user.Posts[j].Comments[k]['User'];
        let Kom = user.Posts[j].Comments[k]['Comments'];
        if (Usr) {
            document.getElementById('lmn' + i).innerHTML += `<p>${Usr}:____${Kom}</p>`;
        }
    }

}

function SinglePostTemplate(pic, i) {
    return `<div id="posts${i}" class="post"">
                <div class="post-head">
                    <img class="pb-mini" onclick="renderProfil(${i})" src="${pic['Picture']}">
                        <span class="post-head-info">
                            <p onclick="renderProfil(${i})">${pic['Name']}</p>
                            <p>                             ${pic['City']}</p>
                        </span>
                </div>
                <img class="postimg" id="img${i}" src="${pic['Picture']}"></img>
                <div class="lmn" id="lmn${i}">
              
                </div>
                 ${input(i)}<button onclick="addComments(${i})">klick!</div>
            </div>
           
            `;
}

function renderProfil(i, j) {
    document.getElementById('posts').innerHTML = '';
    let user = Users[i];
    pics = [];
    document.getElementById('posts').innerHTML += profilepageTemplate(i);

    for (let j = 0; j < user.Posts.length; j++) {
        let pic = user.Posts[j];
        pics.push(pic);

        document.getElementById('pictures').innerHTML += `<img class="picture" id="picture${i, j, pic}" onclick="renderSinglePost(${i, j})" src="${pic['Picture']}"></img>
       `

    }
    console.log(pics);
}

function desktopNavTemplate() {
    return `<nav>
    <a><img onclick="renderStartSeite()" id="logo" src="./img/insta.png"></a>
    <a class="icons" onclick="renderStartSeite()"><img class="" src="./img/insta-logo.png">Startseite</a>
    <a class="icons" onclick="renderProfil(1)"><img src="./img/insta-logo.png">Entdecken</a>
    <a class="icons"><img class="" src="./img/insta-logo.png">Reels</a>
    <a class="icons"><img class="" src="./img/insta-logo.png">Nachrichten</a>
    <a class="icons"><img class="" src="./img/insta-logo.png">Benachrichtigungen</a>
    <a class="icons"><img class="" src="./img/insta-logo.png">Erstellen</a>
    <a class="icons"><img class="" src="./img/insta-logo.png">Profil</a>
</nav>
`;
}

function mobilNavTemplate() {
    return `<nav id="navMobil">
    <a class="icons" onclick="startSeite()"><img class="" src="./img/insta-logo.png">Startseite</a>
    <a class="icons" onclick="profil()"><img class="" src="./img/insta-logo.png">Entdecken</a>
    <a class="icons"><img class="" src="./img/insta-logo.png">Reels</a>
    <a class="icons"><img class="" src="./img/insta-logo.png">Nachrichten</a>
    <a class="icons"><img class="" src="./img/insta-logo.png">Benachrichtigungen</a>
    <a class="icons"><img class="" src="./img/insta-logo.png">Erstellen</a>
    <a class="icons"><img class="" src="./img/insta-logo.png">Profil</a>
</nav>
`;
}

function storyTemplate(user, i) {
    return `
    <div id="story" onclick="renderProfil(${i})">
    <img src="${user['Picture']}">
    </div>`;
}

function suggestionsTemplate(user, i) {
    return ` <div id="profil${user[i]}" onclick="renderProfil(${i})" class="profil">
    <div>
    <img class="pb-mini" src="${user['Picture']}">
    </div>
    <div class="beschreibung">
    <p>${user['Name']}</p>
    <p>${user['Description']}</p>
    </div>
    
</div>`
}

function TimelineTemplate(i, user, userPicture) {
    return `<div id="posts${i}" class="post"">
                <div class="post-head">
                    <img class="pb-mini" onclick="renderProfil(${i})" src="${user['Picture']}">
                        <span class="post-head-info">
                            <p onclick="renderProfil(${i})">${user['Name']}</p>
                            <p>                             ${user['City']}</p>
                        </span>
                </div>
                <img class="postimg" id="img${i}" src="${userPicture}"></img>
                <div class="lmn" id="lmn${i}">
                <input placeholder="search">
                </div>
                 ${input(i)}<button onclick="addComments(${i})">klick!</div>
            </div>
           
            `;
}

function profilepageTemplate(pic) {
    return `<div id="pictures">
   
    </div>`;
}

function loadProfileImages(j) {
    if (j >= pics.length) {
        j = 0;
    }

    let Picture = pics[j];
    document.getElementById('pictures').innerHTML = `
    
    <img onclick="loadProfileImages(${j + 1})" class="big" src="${Picture}">
    </img>
   `;

}

function homepageTemplate(i) {
    return `
    <div class="links">  
        <div id="content">
                <img onclick="load()" src="./img/insta.png">
                <div id="storys"></div> 
                ${logged_mobile()} 
                <div id="storyMenü">
                <p onclick="renderStory('foryou')">Für Dich</p>|<p onclick="renderStory('follow')">Gefolgt</p>
                </div>
                <div id="posts"></div>
           

        </div>
    </div>
    <div class="rechts">
        <div id="suggestions">
        ${logged()}
                <div id="suggestions-head">
                <p style="color: rgb(147, 147, 147);">Vorschläge für dich</p>
                    <p style="color: aliceblue;">Alle ansehen</p>
                </div>
        
            <div id="profile">
            </div>
        </div>
    </div>
    `
}

function logged() {
    return `
        <div id="logged" class="profil" >
            <div>
            <img onclick="renderProfil(${loggedIn})" class="pb-mini" src="${Users[loggedIn]['Picture']}"></div>              
            <div class="beschreibung">
            <b>Eingeloggt als</b>
            <p>${Users[loggedIn]['Name']}</p>
                 <input onkeydown="searchUser()" placeholder="Gib eine Ziffer von 0-7 ein, um das Profil zu wechseln" id="changeUser">
                 <button onclick="changeUser()">LogIn</button>  
            </div>
            <div class="follow">
            </div>
        </div>`;
}
function searchUser() {
    let search = document.getElementById('changeUser').value;
    search = search.toLowerCase();

    let posts = document.getElementById('posts');
    posts.innerHTML = '';

    for (let i = 0; i < Users.length; i++) {
        let name = Users[i].Name;

        if (name.toLowerCase().includes(search)) {
            let a = +Users.findIndex(name);

            posts.innerHTML += `${a}`
                ;
        }
    }
}

function logged_mobile() {
    return `
    <div id="logged_mobile">
    

        <div id="logged" class="profil" onclick="renderProfil(${loggedIn})">
            <div>
            <img class="pb-mini" src="${Users[loggedIn]['Picture']}"></div>              
            <div class="beschreibung">
            <b>Eingeloggt als</b>
            <p>${Users[loggedIn]['Name']}</p>
                <input placeholder="Gib eine Ziffer von 0-7 ein, um das Profil zu wechseln" id="changeUserMobil">
            <button onclick="changeUserMobil()">LogIn</button>  
            
            </div>
           
        </div>
        </div>`;
}

function input(i) {
    return `<div id="komments"><input id="com${i}"></div>`;
}

function addComments(i, Kom, Usr) {
    let Comments = document.getElementById('com' + i).value;

    let object = {
        User: Users[loggedIn].Name,
        Comments: Comments
    }
    Users[i].Posts[0].Comments.push(object);
    save();
    renderTimeline()

}
