<template>
  <div class="footer sites-section bg-color" id="footer">
    <!-- about us -->
    <div class="container">
      <div class="row ">
        <div class="col-md-4">
          <p><strong> About US </strong></p>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing.
          </p>
        </div>
        <!-- Quick-links -->
        <div class="col-md-4">
          <ul class="links ">
            <strong> Quick links </strong>
            <li class="border-0 mt-3" v-scroll-to="'#aboutus'">
              About Us
            </li>
            <li class=" border-0" v-scroll-to="'#testinomials'">
              Testimonials
            </li>
            <li class="border-0" v-scroll-to="'#services'">Terms of Service</li>
            <li class="border-0" v-scroll-to="'#studio'">Studio</li>
            <li class=" border-0" v-scroll-to="'#blog'">Blogs</li>
            <li class=" border-0" v-scroll-to="'#blog'"></li>
            <li class=" border-0" v-scroll-to="'#footer'">Contact Us</li>
          </ul>
        </div>
        <!-- connect -->
        <div class="col-md-4">
          <p><strong>Connect</strong></p>
          <div class=" font">
            <span
              ><font-awesome-icon
                :icon="['fab', 'facebook-f']"
                class="fa-x circle-icon"
            /></span>
            <span>
              <font-awesome-icon
                :icon="['fab', 'instagram']"
                class="fa-x circle-icon"
              />
            </span>
            <span>
              <font-awesome-icon
                :icon="['fab', 'twitter-square']"
                class="fa-x circle-icon"
              />
            </span>
          </div>
          <!-- newsletter -->
          <div class="newsletter mt-5 ">
            <strong>NewsLetter</strong>
            <div class="form-group d-flex mt-3 col-md-12">
              <input
                type="email"
                class="form-control col-md-9"
                id="email"
                placeholder="enter email"
              />
              <span>
                <button class="btn btn-lg btn-success rounded-pill ml-3 ">
                  <small>Send</small>
                </button></span
              >
            </div>
          </div>
        </div>
      </div>
      <!--footer  -->
      <div class="sites-section">
        <p class="text-center ">
          Copyright &copy;2019 All right reserved | this template is made with
          <span><font-awesome-icon :icon="['fa', 'heart']"/></span> by
          <span class="colorib">Colorib</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

ul li {
  padding: 5px 0px;
  &:hover {
    color: $black;
  }
}
.font {
  margin-bottom: 3px;
}
.font > span {
  margin: 10px;
}
.fa-facebook-f,
.fa-twitter-square,
.fa-instagram {
  color: $green;
}
.circle-icon {
  background: $light-grey;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  margin: 0px -8px;
  vertical-align: middle;
  padding: 20px;

  &:hover {
    background: $white;
  }
}
.fa-heart {
  color: $red;
}

ul li {
  list-style-type: none;
  color: $green;
}
input {
  width: 250px;
  height: 50px;
}
.footer {
  padding: 90px 0px;
}
.btn {
  line-height: 30px;
}
@media screen and (max-width: 460px) {
  .links {
    margin-left: -37px;
  }
  .form-group {
    padding-left: 0px;
  }
}
</style>
