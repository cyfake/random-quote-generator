let allTags = [];
let tags = [];

const getAllTags = async () => {

    const res = await axios.get('https://api.quotable.io/tags?')

    const modalBody = document.querySelector('.modal-body');

    for (let tag of res.data) {

        if (tag._id === "NLC25zc7-m5") {
            break;
        }

        allTags.push(tag.name);

        let checkboxContainer = document.createElement('div');
        checkboxContainer.classList.add('checkbox');

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.name = tag.name;
        checkbox.value = tag.name;
        checkbox.id = tag.name;
        checkboxContainer.append(checkbox);

        let label = document.createElement('label');
        label.htmlFor = tag.name;
        label.textContent = tag.name;
        checkboxContainer.append(label);

        modalBody.append(checkboxContainer);
    }
};

const setTags = () => {

    tags = [];

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            tags.push(checkbox.name);
        }
    }

    tags = tags.toString().replaceAll(',', '|');

}

document.addEventListener("DOMContentLoaded", () => {
    getAllTags();
});

const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close');

//TODO: ADD GRAY BACKGROUND WHEN MODAL POPS UP

modalCloseBtn.addEventListener('click', function() {
    modal.classList.toggle('visible');
}) 

const filterBtn = document.querySelector('#filter-btn');

filterBtn.addEventListener('click', function() {
    modal.classList.toggle('visible');
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
    console.log(res.data[0]);
    console.log(tags);
    quote.innerText = `"${res.data[0].content}"`;
    author.innerText = `- ${res.data[0].author}`;
})