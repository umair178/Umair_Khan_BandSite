
// fucntion to display shows titles for tablet and desktop view
function displayshowtitle(){
    //create li and append to ul
    const listElement = document.createElement("li");
    listElement.classList.add('shows__list')
    const ul = document.getElementById('list')
    ul.appendChild(listElement);
    // create first div and append to listElement
    const firstdiv = document.createElement('div');
    firstdiv.classList.add('shows__title-container');
    listElement.appendChild(firstdiv);
    // create first para and append to first div
    const p1 = document.createElement('p');
    p1.classList.add('shows__title');
    p1.innerHTML = 'Date';
    firstdiv.appendChild(p1)

    const p2 = document.createElement('p');
    p2.classList.add('shows__title');
    p2.classList.add('shows__title--venue')
    p2.innerHTML = 'Venue';
    firstdiv.appendChild(p2)

    const p3 = document.createElement('p');
    p3.classList.add('shows__title');
    p3.innerHTML = 'Location';
    firstdiv.appendChild(p3);
}
displayshowtitle();

let shows = [
    {
        timestamp: 'Mon Sept 06 2021',
        Street: 'Ronald Lane'
    },
    {
        timestamp: 'Tue Sept 21 2021',
        Street: 'Pier 3 East'
        
    },
    {
        timestamp: 'Fri Oct 15 2021',
        Street: 'View Lounge'
    },
    {
        timestamp: 'Sat Nov 06 2021',
        Street: 'Hyatt Agency'
    },
    {
        timestamp: 'Fri Nov 26 2021',
        Street: 'Moscow Center'
    },
    {
        timestamp: 'Wed Dec 15 2021',
        Street: 'Press Club'
    }
];
// function to create html markup for buy tickets
function displayshow(i){
    //create li and append to ul
    const listElement = document.createElement("li");
    listElement.classList.add('shows__list')
    const ul = document.getElementById('list')
    ul.appendChild(listElement);
    // create first div and append to listElement
    const firstdiv = document.createElement('div');
    firstdiv.classList.add('shows__container');
    listElement.appendChild(firstdiv);
    // create second div and append to first div
    const secdiv = document.createElement('div');
    secdiv.classList.add('shows__subcontainer1');
    firstdiv.appendChild(secdiv);
    //create first paragragraph, append to second div, and add text
    const p1 = document.createElement('p')
    p1.classList.add('shows__text')
    p1.innerHTML = 'Date';
    secdiv.appendChild(p1);
    //create second paragragraph, append to second div, and add date
    const p2 = document.createElement('p');
    p2.classList.add('shows__text1');
    p2.innerHTML = shows[i].timestamp;
    secdiv.appendChild(p2); 

    //create third div and append to first div
    const third_div = document.createElement('div');
    third_div.classList.add('shows__subcontainer1');
    firstdiv.appendChild(third_div);
    //create third paragragraph, append to third div, and add text
    const p3 = document.createElement('p')
    p3.classList.add('shows__text')
    p3.innerHTML = 'Venue';
    third_div.appendChild(p3);
    //create fourth paragragraph, append to third div, and add date
    const p4 = document.createElement('p');
    p4.classList.add('shows__text2');
    p4.innerHTML = shows[i].Street;
    third_div.appendChild(p4); 
    //create fourth div and append to first div
    const fourth_div = document.createElement('div');
    fourth_div.classList.add('shows__subcontainer1')
    firstdiv.appendChild(fourth_div);
    //create fifth paragrapha, append to fourth div, and add text
    const p5 = document.createElement('p');
    p5.classList.add('shows__text')
    fourth_div.appendChild(p5);
    p5.innerHTML = 'Location';
    //create sixth paragrapha, append to fourth div, and add text
    const p6 = document.createElement('p');
    p6.classList.add('shows__text2')
    fourth_div.appendChild(p6);
    p6.innerHTML = 'San Francisco, CA';
    //create fifth div and append to first div
    const fifth_div = document.createElement('div');
    fifth_div.classList.add('shows__subcontainer2')
    firstdiv.appendChild(fifth_div);
    //create button, append to fifth div and add text
    const button = document.createElement('button');
    button.classList.add('shows__button');
    fifth_div.appendChild(button)
    button.innerHTML = 'Buy Tickets'
}

// function to create html mark up for all comments. 
function displayallshows(){
    for (let i=0; i<shows.length; i++){
        //const y = shows[i];
        displayshow(i);
    }
};
displayallshows();

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

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const inputname = e.target.username.value;
//     const inputcomment = e.target.usercomment.value;

//     //create li and append to ul
//     const listElement = document.createElement("li");
//     const ul = document.getElementById('comments-list')
//     ul.prepend(listElement);
//     // create first div and append to listElement
//     const firstdiv = document.createElement('div');
//     firstdiv.classList.add('comments__container');
//     listElement.appendChild(firstdiv);
//     // create second div and append to first div
//     const secdiv = document.createElement('div');
//     secdiv.classList.add('comments__subcontainer1');
//     firstdiv.appendChild(secdiv);
//     //create img and append to second div
//     const imageElement = document.createElement('img');
//     imageElement.classList.add('comments__image');
//     secdiv.appendChild(imageElement);
//     //create third div and append to seccond div
//     const third_div = document.createElement('div');
//     third_div.classList.add('comments__subcontainer2');
//     secdiv.appendChild(third_div);
//     //create fourth div and append to third div
//     const fourth_div = document.createElement('div');
//     fourth_div.classList.add('comments__subcontainer3')
//     third_div.appendChild(fourth_div);
//     //create paragragraph and append to fourth div
//     const p1 = document.createElement('p')
//     p1.classList.add('comments__title')
//     const p2 = document.createElement('p')
//     p2.classList.add('comments__date')
//     fourth_div.appendChild(p1)
//     fourth_div.appendChild(p2) 
//     //create p3 and append to third div
//     const p3 = document.createElement('p')
//     p3.classList.add('comments__text')

//     third_div.appendChild(p3)

//     p1.innerHTML = inputname;
//     p3.innerText = inputcomment;
//     p2.innerHTML = new Date().toLocaleDateString()
//     form.reset();
// });







