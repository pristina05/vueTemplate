<template>
  <div>
    <div class="header-img">
      <!-- header -->
      <div class="header">
        <nav class="navbar navbar-dark">
          <!-- Brand -->
          <a class="navbar-brand" href="#">Mighty.</a>

          <!-- Toggler/collapsibe Button -->
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Navbar links -->
          <div class="collapse navbar-collapse" id="collapsibleNavbar"></div>
        </nav>
      </div>

      <!--  -->
      <div class="container">
        <div class="">
          <div class="row">
            <div class=" web col-md-6 mx-auto mt-5">
              <h4>Mighty Web Design Agency</h4>
              <p>
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing.
              </p>
              <button class="btn rounded-pill btn-dark">
                Contact US
              </button>
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

<style>
.navbar {
  /* padding: 30px; */
  margin: 5px 40px;
}
.navbar-inner {
  background-color: transparent;
}
.web {
  text-align: center;
  margin: 100px;
  color: white;
}
.header-img {
  background: url("../assets/images/header_img.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}
</style>
