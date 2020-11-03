import bookApp from "./pages/book-app.cmp.js";
import homePage from "./pages/home-page.cmp.js";
import bookDetails from "./pages/book-details.cmp.js";
import aboutPage from "./pages/about-page.cmp.js";
import aboutUsServices from "./pages/about-us-service.cmp.js";
import aboutUsTeam from "./pages/about-us-team.cmp.js";
import bookAdd from "./pages/add-book.cmp.js";

const myRoutes = [
  {
    path: "/",
    component: homePage,
  },
  {
    path: "/books",
    component: bookApp,
  },
  {
    path: "/books/add",
    component: bookAdd,
  },
  {
    path: "/books/:bookId",
    component: bookDetails,
  },
  {
    path: "/about",
    component: aboutPage,
    children: [
      {
        path: "services",
        component: aboutUsServices,
      },
      {
        path: ":team?",
        component: aboutUsTeam,
      },
    ],
  },
];

export const myRouter = new VueRouter({ routes: myRoutes });
