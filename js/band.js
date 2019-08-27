

/*let bandNumber = 1;
const takeNumber = function (bandName) {
       if (bandNumber === 1) {
       return bandNumber + '.' + bandName; } 
    else if (bandNumber === 2) {
        return bandNumber + '.' + bandName;
    }
   }
   bandNumber++;

const scum = takeNumber("Galactic Scum")
console.log(scum);  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under);  // This should print "2. Underdogs" in the console 
*/



let bandNumber = 1;

const takeNumber = function (bandName) {
    console.log(`${bandNumber}. ${bandName}`);
    bandNumber++;
}

const scum = takeNumber("Galactic Scum")

const under = takeNumber("Underdogs")
