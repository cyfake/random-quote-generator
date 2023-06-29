const generate = document.querySelector('button')
generate.addEventListener('click', async function (e) {
    e.preventDefault();
    const res = await axios.get('https://api.quotable.io/quotes/random');
    console.log(res);
    quote.innerText = `"${res.data[0].content}"`;
    author.innerText = `- ${res.data[0].author}`;
})