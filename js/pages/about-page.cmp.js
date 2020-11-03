export default {
    template: `
    <section class="about-us-container container flex column wrap  justify-center align-center">
        <h1 class="mr-5">About Us</h1>
        <nav>
            <router-link to="/about/team">Our Team</router-link> | 
            <router-link to="/about/services">Our Services</router-link>
        </nav>
        <router-view></router-view>

    </section>
    `,

}
