console.warn('Warning: ' +
  'The file "mathjs/index.js" is deprecated since v6.0.0. ' +
  'Please use the root "mathjs" instead')

module.exports = require('./lib/entry/mainAny')
const mathjs = require("mathjs");

const izracunaj = (a, b) => {
  console.log("Sabiranje: ", mathjs.add(a, b));
  console.log("Najmanji broj", mathjs.min(a, b));
  console.log(`Logaritam od ${a}: `, mathjs.log(a));
  console.log(`Koren od ${a}: `, mathjs.sqrt(a));
  console.log("Stepen: ", mathjs.pow(a, b));
};

izracunaj(4, 2);