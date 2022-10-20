const form = document.getElementById('bandsite-form');
const commentlist = document.getElementById('comments-list');

let comments = [
    {
        name: 'Connor Walton',
        timestamp: '02/17/2021',
        text: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
    },
    {
        name: 'Emilie Beach',
        timestamp: '01/09/2021',
        text: 'feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
    },
    {
        name: 'Miles Acosta',
        timestamp: '12/20/2020',
        text:"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
];
// function to create html markup for a comment
function displaycomment(i){
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
    p1.innerHTML = comments[i].name;
    fourth_div.appendChild(p1);
    //create Date paragragraph, append to fourth div, and add date
    const p2 = document.createElement('p');
    p2.classList.add('comments__date');
    p2.innerHTML = comments[i].timestamp;
    fourth_div.appendChild(p2); 
    //create comment paragrapha, append to third div, and add comment
    const p3 = document.createElement('p');
    p3.classList.add('comments__text')
    third_div.appendChild(p3);
    p3.innerHTML = comments[i].text;
}

// function to create html mark up for all comments. 
function displayallcomments(){
    for (let i=0; i<comments.length; i++){
        const y = comments[i];
        displaycomment(i);
    }
};
displayallcomments();

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const inputname = e.target.username.value;
//     const inputcomment = e.target.usercomment.value;
//     //addComment(inputname, new.Date().toLocaleDateString(), inputcomment);
//     displaycomment(i);
//     p1.innerHTML = inputname;
//     p3.innerText = inputcomment;
//     p2.innerHTML = new Date().toLocaleDateString()
//     form.reset();
// });










// Adding name cooment in predefined html divs

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputname = e.target.username.value;
    const inputcomment = e.target.usercomment.value;

    //create li and append to ul
    const listElement = document.createElement("li");
    const ul = document.getElementById('comments-list')
    ul.prepend(listElement);
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
    //create paragragraph and append to fourth div
    const p1 = document.createElement('p')
    p1.classList.add('comments__title')
    const p2 = document.createElement('p')
    p2.classList.add('comments__date')
    fourth_div.appendChild(p1)
    fourth_div.appendChild(p2) 
    //create p3 and append to third div
    const p3 = document.createElement('p')
    p3.classList.add('comments__text')

    third_div.appendChild(p3)

    p1.innerHTML = inputname;
    p3.innerText = inputcomment;
    p2.innerHTML = new Date().toLocaleDateString()
    form.reset();
});







