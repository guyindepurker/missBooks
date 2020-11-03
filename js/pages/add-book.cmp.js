import {bookService} from '../service/book-service.js'
export default {
    template: `
    <section class="add-book container flex column wrap align-center">
    <h1>Add Book</h1>
    <label for="search-book"></label>
    <input type="search" name="search" id="search-book" placeholder="Search Book">
    <div>
        <button>search</button>
    </div>
    </section>
    `
}