<template>
  <div>
    <section id="content">
      <div class="form">
        <div class="row">
          <div class="col-8 offset-2">
            <div class="card mt-3">
              <div class="form">
                <div class="alert alert-warning" v-show="error">{{ error }}</div>
                <div class="d-flex justify-content-center align-items-center p-2">
                  <input class="input-group me-2" type="text" placeholder="enter the adress" v-model="address"
                    id="autocomplete">
                  <button class="btn btn-sm btn-secondary" @click="localButtonPres">konumum</button>
                </div>
                <button class="ms-4 px-3 mb-2 btn btn-primary">Go</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="map"></section>
  </div>
</template>

<script>

import axios from "axios";

export default {
  data() {
    return {
      address: "",
      error: "",
    };
  },
  mounted() {
    let autocomplete = new google.maps.places.Autocomplete(document.getElementById("autocomplete"), {
      bounds: new google.maps.LatLngBounds(
        new google.maps.LatLng(37.87180, 32.50200)
      ),
    });

    autocomplete.addListener("place_changed", () => {
      let place = autocomplete.getPlace();
      // console.log(place)
      this.showLocationMap(place.geometry.location.lat(), place.geometry.location.lng())

    });
  },
  methods: {
    localButtonPres() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            // console.log(position.coords.latitude);
            // console.log(position.coords.longitude);
            this.getAdressParam(position.coords.latitude, position.coords.longitude);
            this.showLocationMap(position.coords.latitude, position.coords.longitude);
          },
          error => {
            // console.log(error.message);
            this.error = error.message;
          },
        )

      } else {
        console.log("tarayıcınız geolocations API desteklememektedir. !!!");
      }
    },

    getAdressParam(lat, long) {
      axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="
        + lat +
        ","
        + long +
        "&key=YOUR-API-KEY")
        .then(response => {
          if (response.data.error_message) {
            // console.log(response.data.error_message);
            this.error = response.data.error_message;
          } else {
            // console.log(response.data.results[0].formatted_address);
            this.address = response.data.results[0].formatted_address;
          }
        })
        .catch(error => {
          // console.log(error.message);
          this.error = error.message;

        })

    },

    showLocationMap(latitude, longitude) {
      // create map object
      
      let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: new google.maps.LatLng(latitude, longitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });

      // create markers
      new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
      })

      new google.maps.Marker({
        position: new google.maps.LatLng(37.867937, 32.436445),
        map: map,
      })

    }

  },

}

</script>


<style>
#content {
  position: relative;
  z-index: 1;
}

#map {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: blue;
}
</style>