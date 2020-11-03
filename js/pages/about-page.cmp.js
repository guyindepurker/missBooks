import socialIcons from '../cmp/social-icons.cmp.js'
export default {
    template: `
    <section class="about-us-container container flex column wrap  justify-center align-center">
        <h1 class="mr-5">About Us</h1>
        <img src="../img/logos.png" class="about-us-img">
        <p class="about-us">hey,my name is guy i am from israel i am a full-stack developer, I built this app with great dedication and investment, for every detail if you likes this app and you want you to see other works of my you can see in my github page, if you want you can contact with me on the social networks.enjoy from the book library!</p>
        <social-icons></social-icons>
    </section>
    `,
  components:{
    socialIcons,
  }
}