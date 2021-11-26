export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId) {
        this.googleMap = new google.maps.Map(document.querySelector(divId), {
            zoom: 5,
            center: {
                lat: 0,
                lng: 0,
            },
        });
    }
}
