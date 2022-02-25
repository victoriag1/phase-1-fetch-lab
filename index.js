const apiBooks = 'https://anapioficeandfire.com/api/books'

const fetchBooks = fetch(apiBooks)
.then((resp)=> resp.json())
.then((json)=> {
  renderBooks(json)
})


function renderBooks() {

}
// const fetchBooks = function fetchBooks(){
  
// }
