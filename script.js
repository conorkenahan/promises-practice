const API_URL = 'https://starwars.egghead.training/';

const responsePromise = fetch(API_URL + 'films');
responsePromise.then(res => {
    return res.json();
}).then(films => {
    console.log(films)
})
