import faker from "faker";

export class Company {
  companyName: string;
  catchPrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.longitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  markerContent(): string {
    return `
    <h1>Company Name: ${this.companyName}</h1>
    <h3>Catch Phrase: ${this.catchPrase}</h3>`;
  }
}
