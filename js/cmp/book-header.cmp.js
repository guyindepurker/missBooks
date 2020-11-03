export default {
  template: `
    <section class="book-header">
    <div class="main-header container flex space-between">
        <h1 class="logo">BOOK LIBRARY</h1>
        <nav> 
            <ul class="nav-main flex">
            <li><router-link to="/" exact>Home</router-link></li>
            <li><router-link to="/books" exact>Book App</router-link> </li>
            <li><router-link to="/books/add" >Add Book</router-link> </li>
            <li><router-link to="/about" >About Us</router-link> </li>
            </ul>
        </nav>
    </div>
    </section>
    `,
}


