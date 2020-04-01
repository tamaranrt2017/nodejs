const izracunaj = (a, b) => {
  console.log("Sabiranje: ", mathjs.add(a, b));
  console.log("Najmanji broj", mathjs.min(a, b));
  console.log(`Logaritam od ${a}: `, mathjs.log(a));
  console.log(`Koren od ${a}: `, mathjs.sqrt(a));
  console.log("Stepen: ", mathjs.pow(a, b));
};

izracunaj(4, 2);