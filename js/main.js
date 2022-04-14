//Example fetch using api.nasa.gov
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  //get date from user input
  const choice = document.querySelector('input').value
  console.log(choice)
  // nasa api docs said add date parameter
  const url = `https://api.nasa.gov/planetary/apod?api_key=wdfg8SEov4jDNhORl5fPfbdeKaJeqGzegcquTmkq&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        if (data.media_type == "image") {
          document.querySelector('img').src = data.hdurl
          document.querySelector('section').classList.add('hidden')
        } else {
          document.querySelector('section').classList.remove('hidden')
          document.querySelector('iframe').src = data.url
          document.querySelector('img').src = null
        }
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

