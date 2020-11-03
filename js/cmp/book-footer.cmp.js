import socialIcons from '../cmp/social-icons.cmp.js'

export default {
  template: `
    <section class="book-footer">
   <div class="container flex column align-center">
       <small class="copy-rights mr-5"> Copyrights &copy; 2020 Guy Indepurker. All rights reserved</small>
<social-icons></social-icons>

   </div>
</section>
    `,
      components:{
        socialIcons,
      }
}

