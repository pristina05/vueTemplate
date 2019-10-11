<template>
  <div>
    <div class="header-img ">
      <!-- header -->
      <div class="header">
        <!-- navbar -->
        <b-navbar toggleable="md" type="dark" fixed="top">
          <b-navbar-brand href="#">Mighty.</b-navbar-brand>

          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#" v-scroll-to="'#aboutus'"
                >About US</b-nav-item
              >
              <b-nav-item href="#" v-scroll-to="'#testinomials'"
                >Testimonials</b-nav-item
              >
              <b-nav-item href="#" v-scroll-to="'#services'"
                >Terms of Service</b-nav-item
              >
              <b-nav-item href="#" v-scroll-to="'#blog'">Privacy</b-nav-item>
              <b-nav-item href="#" v-scroll-to="'#footer'"></b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>

      <!-- content -->
      <div class="container">
        <div class="mighty-content">
          <div class="row">
            <div class=" web col-md-6 mx-auto ">
              <h4 class="mighty">Mighty Web Design Agency</h4>
              <p class="content mt-3">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing.
              </p>
              <button class="btn rounded-pill btn-dark contact-btn">
                <small class=""> Contact US</small>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    window.onscroll = () => {
      const nav = document.querySelector("#navbar");
      if (this.scrollY > 60) {
        nav.className = "mainScroll";
      } else {
        // eslint-disable-next-line no-console
        console.log("hdhdh", this.$route.params);
        nav.className = "scroll";
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.header-img {
  background: url("../assets/images/header_img.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;

  // .navbar {
  //   padding: 30px;
  //   margin: 5px 40px;
  //   position: fixed;
  // }

  #navbar {
    background-color: transparent;
    z-index: 10000;
  }
  nav.scroll {
    background-color: #a1572f;
    color: #eef;
  }
  nav.mainScroll {
    background-color: black;
    color: #222;
  }
  .collapse ul li a {
    color: $white;
  }
  .contact-btn {
    padding: 10px 40px;
    border-color: $white;
    background-color: transparent;
    &:hover {
      background-color: $white;
      color: $black;
    }
  }

  .scrolled {
    background-color: dodgerblue;
    transition: 0.3s;
  }

  .mighty {
    font-size: 40px;
  }
  .fixed {
    background-color: $black;
  }

  .shrink {
    background-color: $black;
  }
}
.web {
  text-align: center;
  margin: 200px;
  color: white;
}

@media screen and (max-width: 460px) {
  .web {
    margin: 102px;
  }
  .header {
    background-color: $grey;
  }
  .header-img {
    width: 100%;
    height: 60vh;
    background-size: cover;
    .mighty {
      font-size: 20px;
      padding-top: 130px;
    }
    .contact-btn {
      padding: 2px 20px;
    }
  }
  .content {
    font-size: 12px;
  }
}
</style>
