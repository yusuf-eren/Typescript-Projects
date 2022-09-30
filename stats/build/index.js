"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const matches = fs_1.default
    .readFileSync("football.csv", {
    encoding: "utf-8",
})
    .split("\n")
    .map((row) => {
    return row.split(",");
});
const homeWin = "H";
const awayWin = "A";
let manUnitedWins = 0;
for (let match of matches) {
    if (match[1] === "Man United" && match[5] === homeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === awayWin) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
