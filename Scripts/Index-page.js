const form = document.getElementById('bandsite-form');
const commentlist = document.getElementById('comments-list');


let url = "https://project-1-api.herokuapp.com"

function getapikey() {
    return axios.get(url + "/register")
        .then((response) => {
            //console.log(response.data.api_key)
            let apikey = response.data.api_key
            console.log(apikey)
            console.log(typeof (apikey))
            Promise.resolve(apikey)
        })
};

function getcomments() {
    getapikey().then(response => {
        axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${response}`)
        .then((response) => {
            let comments = response.data
            console.log(comments)
            Promise.resolve(comments)
            displayallcomments(comments)
        }) 
    })};

getcomments();



// function to create html markup for a comment
function displaycomment(comment) {
    //create li and append to ul
    const listElement = document.createElement("li");
    const ul = document.getElementById('comments-list')
    ul.appendChild(listElement);
    // create first div and append to listElement
    const firstdiv = document.createElement('div');
    firstdiv.classList.add('comments__container');
    listElement.appendChild(firstdiv);
    // create second div and append to first div
    const secdiv = document.createElement('div');
    secdiv.classList.add('comments__subcontainer1');
    firstdiv.appendChild(secdiv);
    //create img and append to second div
    const imageElement = document.createElement('img');
    imageElement.classList.add('comments__image');
    secdiv.appendChild(imageElement);
    //create third div and append to seccond div
    const third_div = document.createElement('div');
    third_div.classList.add('comments__subcontainer2');
    secdiv.appendChild(third_div);
    //create fourth div and append to third div
    const fourth_div = document.createElement('div');
    fourth_div.classList.add('comments__subcontainer3')
    third_div.appendChild(fourth_div);
    //create Name paragragraph, append to fourth div, and add text
    const p1 = document.createElement('p')
    p1.classList.add('comments__title')
    p1.innerHTML = comment.name;
    fourth_div.appendChild(p1);
    //create Date paragragraph, append to fourth div, and add date
    const p2 = document.createElement('p');
    p2.classList.add('comments__date');
    p2.innerHTML = new Date(comment.timestamp).toLocaleDateString()
    //p2.innerHTML = comment.timestamp;
    fourth_div.appendChild(p2);
    //create comment paragrapha, append to third div, and add comment
    const p3 = document.createElement('p');
    p3.classList.add('comments__text')
    third_div.appendChild(p3);
    p3.innerHTML = comment.comment;
}

//function to create html mark up for all comments. 
function displayallcomments(comments) {
    for (let i = 0; i < comments.length; i++) {
        const comment = comments[i];
        displaycomment(comment);
    }
};

function addcomment (inputname,inputcomment){
    getapikey().then(response=>{
        axios.post(`${url}/comments?api_key=${response}`, {
            name: inputname,
            comment: inputcomment
        })
        .then(response=>{
            console.log(response.data)
        })
        .catch(e=>{
            console.log(e)
        })
    })
}



form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputname = e.target.username.value;
    const inputcomment = e.target.usercomment.value;
    // addcomment(inputname,inputcomment)
    getapikey().then(response=>{
        axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${response}`)
        .then(response=>{
            let comments = response.data
            Promise.resolve(comments)
            let new_comments = comments.sort((a,b)=>{
                b.timestamp - a.timestamp
            })
            console.log(new_comments)
            console.log(new_comments[0])
            displaynewcomment(new_comments[0])
        })
    })
    form.reset();
});


// function to create html markup for the added comment
function displaynewcomment(comment) {
    //create li and prepend to ul
    const listElement = document.createElement("li");
    const ul = document.getElementById('comments-list')
    ul.insertBefore(listElement,ul.children[0]);
    // create first div and append to listElement
    const firstdiv = document.createElement('div');
    firstdiv.classList.add('comments__container');
    listElement.appendChild(firstdiv);
    // create second div and append to first div
    const secdiv = document.createElement('div');
    secdiv.classList.add('comments__subcontainer1');
    firstdiv.appendChild(secdiv);
    //create img and append to second div
    const imageElement = document.createElement('img');
    imageElement.classList.add('comments__image');
    secdiv.appendChild(imageElement);
    //create third div and append to seccond div
    const third_div = document.createElement('div');
    third_div.classList.add('comments__subcontainer2');
    secdiv.appendChild(third_div);
    //create fourth div and append to third div
    const fourth_div = document.createElement('div');
    fourth_div.classList.add('comments__subcontainer3')
    third_div.appendChild(fourth_div);
    //create Name paragragraph, append to fourth div, and add text
    const p1 = document.createElement('p')
    p1.classList.add('comments__title')
    p1.innerHTML = comment.name;
    fourth_div.appendChild(p1);
    //create Date paragragraph, append to fourth div, and add date
    const p2 = document.createElement('p');
    p2.classList.add('comments__date');
    p2.innerHTML = new Date(comment.timestamp).toLocaleDateString()
    //p2.innerHTML = comment.timestamp;
    fourth_div.appendChild(p2);
    //create comment paragrapha, append to third div, and add comment
    const p3 = document.createElement('p');
    p3.classList.add('comments__text')
    third_div.appendChild(p3);
    p3.innerHTML = comment.comment;
}









