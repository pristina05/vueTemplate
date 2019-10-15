<template>
  <div class="sites-section">
    <div class="container mt-5">
      <div class="AboutUS" id="aboutus">
        <div class="row">
          <div class="col-md-4 site-sections" data-aos="fade-down-right">
            <h5 class="content-section ">About Us</h5>
            <p class="loreum-ipsum">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing.
            </p>
            <p class="loreum-ipsum">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing.
            </p>

            <button class="btn rounded-pill mb-3 btn-success ">
              Our Works
            </button>
          </div>
          <!-- img section -->
          <div class="col-md-4" data-aos="fade-up-right">
            <div class="img">
              <img
                class=" card-img"
                src="../assets/images/header_img.jpeg"
                alt="Card image"
              />

              <div class="overlay">
                <p class="loreum-ipsum">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing.
                </p>
              </div>
            </div>
          </div>

          <!-- progressbar section -->
          <div
            class="col-md-4 site-sections expertise"
            data-aos="fade-down-right"
          >
            <h5>Our Expertise and Skills</h5>
            <small>writing</small>

            <!--  -->
            <div id="app">
              <progress-bar size="medium" val="55" text="55%" />
            </div>
            <small>Wordpress</small>
            <div id="app">
              <progress-bar size="medium" val="85" text="85%" />
            </div>
            <small>Bootstrap</small>
            <div id="app">
              <progress-bar size="medium" val="93" text="93%" />
            </div>
            <small>Jquery</small>
            <div id="app">
              <progress-bar size="medium" val="83" text="83%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProgressBar from "vue-simple-progress";

export default {
  components: {
    ProgressBar
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.btn {
  padding: 6px 29px;
}
.site-sections {
  padding: 5rem 0rem;
}
.img {
  position: relative;
  width: 50%;
  width: 300px;

  &:hover .overlay {
    opacity: 1;
    bottom: 0;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 0, 0, 0),
      rgba(255, 0, 0, 1)
    );
    // background-image: linear-gradient(
    //   to bottom,
    //   rgba(0, 15, 19, 0.52),
    //   rgba(110, 21, 27, 0.73)
    // );
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 #d80286;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
  }
  .card-img {
    height: 380px;
  }
}

.overlay {
  position: absolute;

  box-shadow: 0 0 5px #000;
  bottom: 0px;
  z-index: 5;
  // background: rgb(0, 0, 0);
  // background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  font-size: 20px;
  padding: 20px;
  text-align: center;
}

@media screen and (max-width: 800px) {
  .site-sections {
    padding: 0rem 1rem;
  }
  .sites-section {
    padding: 2rem 0rem;
  }
  .img {
    width: 217px;
  }
  .expertise {
    margin-top: 5px;
  }
}
</style>
