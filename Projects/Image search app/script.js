const accessKey = 'g6CRvSNo-xnAopoJfd8h5VJ-7EfrtYTIcy2IVg-Jw5o';

const formEl = document.querySelector('form');
const inputEl = document.querySelector('#search-input');
const searchResults = document.querySelector('.search-results');
const showMorebtn = document.querySelector('#show-more-button');

let inputData = ""
let page = 1

async function searchImage() {

    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    console.log(typeof data);
    console.log(typeof results);
    if (page === 1) {
        searchResults.innerHTML = " "
    }
    results.map((result) => {
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html;
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        searchResults?.appendChild(imageWrapper)

    })
    page++;
    if (page > 1) {
        showMorebtn.style.display = 'block'
    }
    if (page === 2) {
        if (searchResults?.innerHTML === " ") {
            alert('No photos available for ' + inputData)
        }
    }
}

formEl?.addEventListener('submit', (event) => {
    event.preventDefault()
    page = 1
    searchImage();
})
showMorebtn?.addEventListener('click', () => {
    searchImage();
})