<template>
  <div class="sites-section">
    <div class="container mt-5">
      <div class="AboutUS" id="aboutus">
        <div class="row">
          <div class="col-md-4 site-sections">
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
          <div class="col-sm-4">
            <img
              class=" card-img"
              src="../assets/images/header_img.jpeg"
              alt="Card image"
            />
          </div>
          <!-- progressbar section -->
          <div class="col-sm-4 site-sections">
            <h5 class="content-section">Our Expertise and Skills</h5>
            <small>writing</small>
            <!-- <progress-bar bar-color="#dc720f" val="60" text=""></progress-bar> -->
            <div class="progress" style="height:10px">
              <div class="progress-bar" style="width:40%;height:10px"></div>
            </div>
            <small>Wordpress</small>
            <div class="progress" style="height:10px">
              <div class="progress-bar" style="width:40%;height:10px"></div>
            </div>
            <small>Bootstrap</small>
            <div class="progress" style="height:10px">
              <div class="progress-bar" style="width:40%;height:10px"></div>
            </div>
            <small>Jquery</small>
            <div class="progress" style="height:10px">
              <div class="progress-bar" style="width:40%;height:10px"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.card-img {
  height: 380px;
  width: 300px;
}
.btn {
  padding: 6px 29px;
}
.site-sections {
  padding: 5rem 0rem;
}

@media screen and (max-width: 800px) {
  .site-sections {
    padding: 0rem 1rem;
  }
  .sites-section {
    padding: 2rem 0rem;
  }
}
</style>
