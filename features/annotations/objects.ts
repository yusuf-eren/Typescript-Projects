const profile = {
  name: "yusuf",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// Advanced Destructuring Types
const { age }: { age: number } = profile;
console.log(profile);
