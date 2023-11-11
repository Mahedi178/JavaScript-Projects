const btn = document.querySelector('#btn');
const content = document.querySelector('.content');
const author = document.querySelector('.author');

const API_URL = 'https://api.quotable.io/random';
async function quoteGenerator(){
    
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        console.log(data);
        content.textContent = `"${data.content}"`;
        author.textContent = `〰️ ${data.author}`;
    } catch (error) {
        console.log(error);
    }

}

btn.addEventListener('click', quoteGenerator);