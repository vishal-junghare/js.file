//console.log("vishal");
let name = "vishal";
const isCount =50;
//console.log(`hello my respo count ${name} is this ${isCount}`)
const gameName = new String("vishal");
console.log(gameName.length);
console.log(gameName.toUpperCase());
//console.log(gameName.tolowerCase());
console.log(gameName.indexOf("i"));
console.log(gameName.substring(0,6));

console.log(gameName.charAt(2));
const anotherString = gameName.slice(-1, 4)
console.log(anotherString);
const newString = "  vishaljunghare   ";
console.log(newString.trim());

const url ="https://vishal  jugnhare.com"
console.log(url.replace("vishal","-"));
console.log(url.includes("vishal"))