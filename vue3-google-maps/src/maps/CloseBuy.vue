<template>
    <div>
        <div class="row m-0 p-0">
            <div class="col-4 bg-primary m-0 p-0 ">
                <div class="form">
                    <div class="row">
                        <div class="col-10 offset-1">
                            <div class="card mt-3">
                                <div class="form">
                                    <div class="alert alert-warning" v-show="error">{{ error }}</div>
                                    <div class="d-flex justify-content-center align-items-center p-2">
                                        <input class="input-group me-2" type="text" placeholder="  enter the adress"
                                            v-model="address" id="autocomplete">
                                        <button class="btn btn-sm btn-secondary"
                                            @click="localButtonPres">konumum</button>
                                    </div>
                                    <div class="d-flex justify-content-center align-item-center mb-2">
                                            <select class="form-select" v-model="type">
                                                <option value="restaurant">Restaurant</option>
                                                <option value="dentist">Dentist</option>
                                            </select>
                                            <select class="form-select " v-model="radius">
                                                <option value="5">5KM</option>
                                                <option value="10">10KM</option>
                                                <option value="15">15M</option>
                                                <option value="20">20KM</option>
                                            </select>
                                    </div>
                                    <button class="ms-4 px-3 mb-2 btn btn-primary" @click="findCloseButtonPresed">search
                                        nearby</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class=" ms-2 mt-2 list-group" style="max-height:83vh;overflow:auto;">
                        <div 
                            class="list-group-item list-group-item-primary" 
                            v-for="place, index in  places"
                            :key="place.id" 
                            @click="showInfoWindow(index)"
                            :class="{'active' : activeIndex === index}"
                        >
                                <div class="content">
                                <div class="header">{{ place.name }}</div>
                                <div class="meta">{{ place.vicinity }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-8 m-0 p-0">
                <div id="map" ref="map"></div>

            </div>
        </div>
    </div>
</template>

<script>

import axios from "axios";

export default {
    data() {
        return {
            address: "",
            error: "",
            apiKey: "YOUR-API-KEY",
            lat: 0,
            lng: 0,
            type: '',
            radius: '',
            places: [],
            markers: [],
            activeIndex: -1,
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

        });
    },
    methods: {
        localButtonPres() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    position => {
                        this.lat = position.coords.latitude;
                        this.lng = position.coords.longitude;

                        // console.log(position.coords.latitude);
                        // console.log(position.coords.longitude);
                        this.getAdressParam(position.coords.latitude, position.coords.longitude);
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
                "&key=" + this.apiKey)
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
                });
        },

        findCloseButtonPresed() {
            // console.log(this.type); console.log(this.radius); console.log(this.lat); console.log(this.lng);
            const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.lat},${this.lng}&type=${this.type}&radius=${this.radius * 1000}&key=${this.apiKey}`;

            axios.get(URL).then(response => {
                // console.log(response);
                this.places = response.data.results;
                // console.log(this.places);
                this.showPlaceOnMap();
            }).catch(error => {
                this.error = error.message;
            });

        },

        showPlaceOnMap() {
            const map = new google.maps.Map(
                document.getElementById("map"), {
                zoom: 15,
                center: new google.maps.LatLng(this.lat, this.lng),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            // const infoWindow = new google.maps.InfoWindow();

            // for (let i = 0; i < this.places.length; i++) {
            //     const lat = this.places[i].geometry.location.lat;
            //     const lng = this.places[i].geometry.location.lng;

            //     const marker = new google.maps.Marker({
            //         position: new google.maps.LatLng(lat, lng),
            //         map: map,
            //     });

            //     this.markers.push(marker);

            //     google.maps.event.addListener(marker, "click", () => {
            //         // console.log("click is run");
            //         infoWindow.setContent(`<div class="fw-bold fs-3 text-center text-dark">${this.places[i].name}</div>
            //                                <div class="fw-bold text-dark">${this.places[i].vicinity}</div>`);
            //         infoWindow.open(map, marker);
            //     });

            // }
        },

        showInfoWindow(index){
            this.activeIndex = index;
            new google.maps.event.trigger(this.markers[index], "click");
        }

    },
};

</script>


<style>
* {
    margin: 0px;
    padding: 0px;
}

#map {
    width: 98%;
    height: 98vh;
    background-color: aqua;
}

.active{
    background-color: rgb(231, 15, 15) !important;
}
</style>

