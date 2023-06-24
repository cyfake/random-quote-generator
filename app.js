const generate = document.querySelector('button')
generate.addEventListener('click', async function (e) {
    e.preventDefault();
    const res = await axios.get('https://api.quotable.io/random');
    quote.innerText = res.data.content;
    author.innerText = res.data.author;
})