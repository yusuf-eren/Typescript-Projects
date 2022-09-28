// Instructions to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId)!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  // ------ BAD CODE ------
  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     // defining map to mark on
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng,
  //     },
  //   });
  // }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     // defining map to mark on
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     },
  //   });
  // }

  // ------ OPTIMAL CODE ------
  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      // defining map to mark on
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }
}
