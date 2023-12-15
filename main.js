


const api = "https://api.breakingbadquotes.xyz/v1/quotes/33";

async function getData() {
  const response = await fetch(api);
  const data = await response.json();
  printData(data); // Access the 'data' property
}

function printData(data) {
  const header = document.querySelector("#header");
  const content = document.querySelector("#content");

  header.innerHTML += `
    <select class="form-control" onchange="getQuotes(this.value)">
      <option> Choose Author </option>
      ${data.map(quote => `<option>${quote.author}</option>`)}  // الكاتب
    </select>`;

  console.log(data); // Log the correct data variable
}

async function getQuotes(author) {
if(name!= 'Choose Author'){
  
  
const response = await fetch(`${api}?author=${author}`)
const data = await response.json();

// console.log(data[0].author);
content.innerHTML = `<h2>"${data[0].author} ()"</h2>`
content.innerHTML = `<h2>"${data[0].quote}"</h2>`

}else{
  console.log("No Thing Found")
}
}

getData();
