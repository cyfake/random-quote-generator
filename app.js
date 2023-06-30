const filterBtn = document.querySelector('#filter-btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');

filterBtn.addEventListener('click', function() {
    modal.classList.toggle('visible');
}) 

modalClose.addEventListener('click', function() {
    modal.classList.toggle('visible');
}) 

const filter = document.querySelector('#filter');
let tags = [];

filter.addEventListener('submit', function(event) {
    event.preventDefault();
    console.dir(document.forms.filter.elements.age.checked);

    if(document.forms.filter.elements.age.checked) {
        tags.push('wisdom');
    }
})

const generate = document.querySelector('#generate-btn')

generate.addEventListener('click', async function (event) {
    event.preventDefault();
    const res = await axios.get(`https://api.quotable.io/quotes/random?tags=${tags}`);
    quote.innerText = `"${res.data[0].content}"`;
    author.innerText = `- ${res.data[0].author}, Tags: ${tags}`;
})