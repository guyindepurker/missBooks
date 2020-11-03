import bookApp from './pages/book-app.cmp.js';
import homePage from './pages/home-page.cmp.js';
import bookDetails from './pages/book-details.cmp.js';
import aboutPage from './pages/about-page.cmp.js'

const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/books',
        component: bookApp
    },
    {
        path: '/books/:bookId',
        component: bookDetails
    },
    {
        path: '/about',
        component: aboutPage
    },
]

export const myRouter = new VueRouter({ routes: myRoutes })

