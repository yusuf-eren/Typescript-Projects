"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateFormatted = dateString.split("/").map((value) => {
        return parseInt(value);
    });
    return new Date(dateFormatted[2], dateFormatted[1] - 1, dateFormatted[0] + 1);
};
exports.dateStringToDate = dateStringToDate;
