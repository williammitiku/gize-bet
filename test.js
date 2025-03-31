const EthiopianCalendar = require("./index");

const calendar = new EthiopianCalendar();
const testDate = new Date();

console.log("Ethiopian Date:", calendar.getEthiopianDateTime(testDate));
console.log("Ethiopian Time:", calendar.getEthiopianTime(testDate));
