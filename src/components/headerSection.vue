<template>
  <div>
    <div class="header-img ">
      <!-- header -->
      <div id="list-example" class="header navbar">
        <!-- navbar -->
        <b-navbar pills toggleable="md" type="dark" fixed="top">
          <b-navbar-brand>Mighty.</b-navbar-brand>

          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav pills class="ml-auto" v-b-scrollspy:nav-scroller>
              <b-nav-item href="#aboutus" class="active">About US</b-nav-item>
              <b-nav-item v-scroll-to="'#testinomials'"
                >Testimonials</b-nav-item
              >
              <b-nav-item v-scroll-to="'#services'"
                >Terms of Service</b-nav-item
              >
              <b-nav-item v-scroll-to="'#studio'">Studio</b-nav-item>
              <b-nav-item href="#work-section" v-scroll-to="'#work'"
                >Works</b-nav-item
              >
              <b-nav-item v-scroll-to="'#blog'">Blogs</b-nav-item>
              <b-nav-item v-scroll-to="'#footer'">Contact Us</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <!--  -->

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
              <!-- <button
                class="btn rounded-pill btn-dark contact-btn"
                data-toggle="modal"
                data-target="#myModal"
              > </button>-->
              <b-button
                v-b-modal.modal-1
                class="btn rounded-pill btn-dark contact-btn"
              >
                <small> Contact US</small></b-button
              >

              <b-modal id="modal-1" title="BootstrapVue">
                <p class="my-4">Hello from modal!</p>
              </b-modal>

              <div class="modal" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <!-- Modal Header -->
                    <div class="modal-header">
                      <h4 class="modal-title">Modal Heading</h4>
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                      Modal body..
                    </div>

                    <!-- Modal footer -->
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-danger"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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

  .navbar {
    background-color: $grey;
    z-index: 10000;
    padding: 8px 40px;
  }
  nav.scroll {
    background-color: $black;
    position: fixed;
    width: 100%;
    color: #eef;
  }
  nav.mainScroll {
    background-color: black;
    color: #222;
  }
  .collapse ul li a {
    color: $white;
    &:hover {
      color: $green;
    }
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
.modal-dialog {
  width: 200px;
}
@media screen and (max-width: 460px) {
  .header-img {
    width: 100%;
    height: 50vh;
    background-size: cover;

    .navbar {
      background-color: $grey;

      padding: 6px 25px;
    }
    .mighty {
      font-size: 20px;
      padding-top: 130px;
    }
    .contact-btn {
      padding: 2px 20px;
    }
  }
  .web {
    margin: auto;
  }
  .content {
    font-size: 12px;
  }
}
@media screen and (max-width: 768px) {
  .header-img {
    margin-top: -7px;
  }
}
</style>
