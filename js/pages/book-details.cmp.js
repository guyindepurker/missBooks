import longText from "../cmp/long-text.cmp.js";
import { bookService } from "../service/book-service.js";
import addReviews from '../cmp/add-reviews.cmp.js'
import showReviews from '../cmp/show-reviews.cmp.js'
export default {
  template: `
    <section v-if="book" class="book-details"> 
      <img :src="imgUrl" class="img-book-details"/> 
      <img v-if="isSale" src="../img/sale.png" class="sale-desc-img"> 
      <h3 class="mr-5"><span class="title-details">title:</span>{{book.title}}</h3>
      <h3><span class="title-details">subtitle:</span>{{book.subtitle}}</h3>
      <h4><span class="title-details">price:</span><span :class="priceClass">{{price}}</span></h4>
      <h4><span class="title-details">authors:</span>{{authors}}</h4>
      <h4><span class="title-details">catagories:</span>{{catagories}}</h4>
      <h4><span class="title-details">language:</span>{{book.language}}</h4>
      <h4><span class="title-details">pages:</span>{{pageCount}}</h4>
      <h4><span class="title-details">published:</span>{{published}}</h4>
      <long-text :txt="book.description"></long-text>
      <show-reviews :book="book"></show-reviews>
      <add-reviews @addReview="loadBook" :book="book"> </add-reviews>
      <button @click="goBack" class="btn-close mr-5">Go Back</button>
  </section>
    `,
  data() {
    return {
      book: null,
    }
  },
  methods: {
    goBack() {
      this.$router.push('/books')
    },
    loadBook() {
      console.log('adddd meeee');
      const id = this.$route.params.bookId
      bookService.getBookById(id)
        .then(book => this.book = book)
    }
  },
  computed: {
    imgUrl() {
      return this.book.thumbnail;
    },
    price() {
      const currency = this.book.listPrice.currencyCode;
      console.log(currency);
      var txtCurrency = "";
      switch (currency) {
        case "ILS":
          txtCurrency = "₪";
          break;
        case "EUR":
          txtCurrency = "€";
          break;
        case "USD":
          txtCurrency = "$";
          break;
      }
      return this.book.listPrice.amount + " " + txtCurrency;
    },
    authors() {
      return this.book.authors.join("");
    },
    catagories() {
      return this.book.categories.join(",");
    },
    pageCount() {
      const pageCount = this.book.pageCount;
      let txt = "";
      if (pageCount >= 500) {
        txt = "Long reading";
      } else if (pageCount >= 200) {
        txt = "Decent reading";
      } else {
        txt = "light reading";
      }
      return pageCount + " - " + txt;
    },
    published() {
      const currYear = new Date().getFullYear();
      const published = this.book.publishedDate;
      const res = currYear - published;
      let txt = "";
      if (res === 1) {
        txt = "New!";
      } else {
        txt = "Veteran Book";
      }
      return published + " - " + txt;
    },
    isSale() {
      const sale = this.book.listPrice.isOnSale;
      return sale;
    },
    priceClass() {
      const priceBook = this.book.listPrice.amount;
      return { red: priceBook > 150, green: priceBook < 120 };
    },
  },
  created() {
    this.loadBook();
    // setTimeout(() => {
    //   this.$router.push('9laHCEdSpFy');
    // }, 4000)
  },
  watch: {
    // whenever question changes, this function will run
    '$route.params.bookId'() {
      // console.log(`ROUTE CHANGED FROM ${from} TO ${to}`)
      this.loadBook();
    }
  },
  components: {
    longText,
    addReviews,
    showReviews,
  }
};

