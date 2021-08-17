let favoriteNum = 9;
let baseURL = "http://numbersapi.com";

// part 1
async function fact() {
  let data = await $.getJSON(`${baseURL}/${favoriteNum}?json`);
  console.log(data);
}
fact();

// part 2
const favoritsNumbs = [7, 11, 22];
async function multipleRequests() {
  let data = await $.getJSON(`${baseURL}/${faveNums}?json`);
  console.log(data);
}
multipleRequests();

// part 3
async function fourFacts() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favoriteNum}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<div>${data.text}</div>`);
  });
}
fourFacts();