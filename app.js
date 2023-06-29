const generate = document.querySelector('#generate')
generate.addEventListener('click', async function (e) {
    e.preventDefault();
    const res = await axios.get('https://api.quotable.io/quotes/random');
    quote.innerText = `"${res.data[0].content}"`;
    author.innerText = `- ${res.data[0].author}`;
})