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

function DoAnimation() {
  var targetElement = document.getElementById("random");
  targetElement.className = "random animate";
  setTimeout(() => {
    targetElement.className = "random";
  }, "500");
}

generateQuote();
reload.addEventListener("click", generateQuote);
