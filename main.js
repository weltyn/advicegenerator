const quote = document.getElementById("adviceQuote");
const id = document.getElementById("adviceNumber");
const reload = document.getElementById("randombutton");

function generateQuote() {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      quote.innerHTML = '"' + data.slip.advice + '"';
      id.innerHTML = "#" + data.slip.id;
    });
}

generateQuote();
reload.addEventListener("click", generateQuote);
