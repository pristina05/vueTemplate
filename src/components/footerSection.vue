<template>
  <div class="footer bg-color">
    <!-- about us -->
    <div class="row m-5">
      <div class="col-md-4">
        <p><strong> About US </strong></p>
        <p>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing.
        </p>
      </div>
      <!-- Quick-links -->
      <div class="col-md-4">
        <p><strong> Quick links </strong></p>
        <ul class=" ">
          <li class="border-0">
            About Us
          </li>
          <li class=" border-0">Testinomials</li>
          <li class="border-0">Terms of Service</li>
          <li class=" border-0">Privacy</li>
          <li class=" border-0">Contact Us</li>
        </ul>
      </div>
      <div class="col-md-4">
        <p><strong>Connect</strong></p>
        <div class="container font">
          <span
            ><font-awesome-icon :icon="['fab', 'facebook']" class="fa-3x"
          /></span>
          <span>
            <font-awesome-icon :icon="['fab', 'instagram']" class="fa-3x " />
          </span>
          <span>
            <font-awesome-icon
              :icon="['fab', 'twitter-square']"
              class="fa-3x"
            />
          </span>
        </div>
        <!-- newsletter -->
        <div class="newsletter mt-5">
          <strong>NewsLetter</strong>
          <div class="form-group d-flex">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="enter email"
              style="width:250px"
            />
            <span>
              <button class="btn btn-success rounded-pill ml-3">
                Send
              </button></span
            >
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="">
      <p class="text-center">
        Copyright &copy;2019 All right reserved | this template is made with
        <span><font-awesome-icon :icon="['fa', 'heart']"/></span> by
        <span class="colorib">Colorib</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.list-group-item {
  color: green;
}
.font {
  margin-bottom: 3px;
}
.font > span {
  margin: 10px;
}
.fa-facebook {
  background: green;
  color: white;
  border-radius: 50px;
}

.fa-twitter-square {
  background: green;
  color: white;
  border-radius: 50px;
}

.fa-instagram {
  background: green;
  color: white;
  border-radius: 40px;
}
.fa-heart {
  color: red;
}

ul li {
  list-style-type: none;
  color: green;
}
.footer {
  padding: 90px 0px;
}
</style>
