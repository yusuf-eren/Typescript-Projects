import { User } from "./User";
import { Company } from "./Company";

const user = new User();
const company = new Company();
const map = document.getElementById("map")!;
const data = new google.maps.Map(map, {
  zoom: 1,
  center: {
    lat: company.location.lat,
    lng: company.location.lng,
  },
});

console.log(data);
