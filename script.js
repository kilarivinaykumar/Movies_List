
const mainDiv = document.getElementById('i')
const inp = document.getElementById('space')
const btn = document.getElementById('ck')
btn.addEventListener('click',fetchData)

function fetchData ()
{
    const searchterm= inp.value 
    fetch(`https://www.omdbapi.com/?s=${searchterm}&apikey=1870b88e`)
        .then(function (res) { return res.json() })
        .then(function (data)
        {
            console.log(data);
            displayData(data.Search)
        })
        .catch(function (err) { console.error(err) })
    
}
function displayData (movies)
{
    movies.forEach(function (movie)
    {
        const div = document.createElement('div');//<div class="movie"></div>
        div.classList.add('movie');
        const image = document.createElement('img');//<img src="" alt="">
        image.src = movie.Poster;
        image.alt= movie.Title
        image.height="180"
        image.width="180"
        const title = document.createElement('h2')
        title.textContent = movie.Title;
        const year = document.createElement('p')
        year.textContent = movie.Year;
        div.append(image, title, year);
        div.classList.add('pro')
        mainDiv.appendChild(div)
        
    })
}
