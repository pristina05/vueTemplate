<template>
  <div class="container">
    <!-- media objects -->
    <b-card>
      <b-media>
        <template v-slot:aside>
          <img
            src="@/assets/images/img1.jpeg"
            class="rounded"
            alt="Cinque Terre"
          />
        </template>

        <h5 class="mt-0">Media Title</h5>
        <p>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
          scelerisque ante sollicitudin. Cras purus odio, vestibulum in
          vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
          vulputate fringilla. Donec lacinia congue felis in faucibus.
        </p>
        <p>
          Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
          leo. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus.
        </p>

        <b-media>
          <template v-slot:aside>
            <img
              src="@/assets/images/images.jpeg"
              class="rounded"
              alt="Cinque Terre"
            />
          </template>

          <h5 class="mt-0">Nested Media</h5>
          <p class="mb-0">
            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia
            congue felis in faucibus.
          </p>
        </b-media>
      </b-media>
    </b-card>
    <!--table array  -->
    <div>
      <table class="table table-bordered mt-5" id="firstTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Profession</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" v-bind:key="row.ID">
            <td>{{ row.id }}</td>
            <td>{{ row.name }}</td>
            <td>{{ row.phone }}</td>
            <td>{{ row.profession }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rows: [
        {
          id: 1,
          name: "Chandler Bing",
          phone: "305-917-1301",
          profession: "IT Manager"
        },
        {
          id: 2,
          name: "Ross Geller",
          phone: "210-684-8953",
          profession: "Paleontologist"
        },
        {
          id: 3,
          name: "Rachel Green",
          phone: "765-338-0312",
          profession: "Waitress"
        },
        {
          id: 4,
          name: "Monica Geller",
          phone: "714-541-3336",
          profession: "Head Chef"
        },
        {
          id: 5,
          name: "Joey Tribbiani",
          phone: "972-297-6037",
          profession: "Actor"
        },
        {
          id: 6,
          name: "Phoebe Buffay",
          phone: "760-318-8376",
          profession: "Masseuse"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
img {
  width: 200px;
  height: 100px;
}
</style>
