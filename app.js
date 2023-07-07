let allTags = [];
let tags = [];

const getAllTags = async () => {

    const res = await axios.get('https://api.quotable.io/tags?')

    const modalBody = document.querySelector('.modal-body');

    for (let i = 0; i < res.data.length; i++) {

        allTags.push(res.data[i].name);

        let checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('checkbox');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = allTags[i];
        checkbox.value = allTags[i];
        checkbox.id = allTags[i];
        checkboxContainer.append(checkbox);

        let label = document.createElement('label');
        label.htmlFor = allTags[i];
        label.textContent = allTags[i];
        checkboxContainer.append(label);

        modalBody.append(checkboxContainer);
    }
};

const setTags = () => {

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            tags.push(checkboxes[i].name);
        }
    }

    tags = tags.toString().replaceAll(',', '|');
}

const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close');

modalCloseBtn.addEventListener('click', function() {
    modal.classList.toggle('visible');
}) 

const filterBtn = document.querySelector('#filter-btn');

filterBtn.addEventListener('click', function() {
    modal.classList.toggle('visible');
    getAllTags();
}) 

const filterForm = document.querySelector('#filter');

filterForm.addEventListener('submit', function(event) {
    event.preventDefault();
    setTags();
})

const saveBtn = document.querySelector('#save-btn');

saveBtn.addEventListener('click', function() {
    modal.classList.toggle('visible');
}) 

const generateBtn = document.querySelector('#generate-btn');

generateBtn.addEventListener('click', async function (event) {
    event.preventDefault();
    const res = await axios.get(`https://api.quotable.io/quotes/random?tags=${tags}`);
    quote.innerText = `"${res.data[0].content}"`;
    author.innerText = `- ${res.data[0].author}`;
})