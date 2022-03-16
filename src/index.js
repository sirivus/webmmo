//import  has  from "lodash";
const _ = require("lodash");
//node_modules / lodash / fp;
//const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
//import has from "./chicken.js";
import "./style.css";
import background from "./background.jpg";
import Data from "./data.xml";
import Notes from "./data.csv";
import toml from "./data.toml";
import yaml from "./data.yaml";
import json from "./data.json5";
import Print from "./print";
import numRef from "./ref.json";

//__webpack_nonce__ = "c29tZSBjb29sIHN0cmluZyB3aWxsIHBvcCB1cCAxMjM=";
//__webpack_nonce__ = "<%=nonce%>";

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`
console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`
console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

async function getComponent() {
  const element = document.createElement("div");
  const { _ } = await import("lodash");
  const btn = document.createElement("button");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello"); //style.css import

  // Add the image to our existing div.
  const mybackground = new Image();
  mybackground.src = background;

  btn.innerHTML = "Click me and check the console!";
  element.onclick = Print.bind(null, "Hello webpack!");
  element.appendChild(btn);
  element.appendChild(mybackground);

  console.log(Data);
  console.log(Notes);

  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});

//

//async function component2() {
//
//  const element = document.createElement("div");
//  const { default: _ } = await import("lodash");
//
//  src = "https://example.org/webpack-numbers.js";
//
//  const webpackNumbers = require("webpack-numbers");
//  // ...
//  webpackNumbers.wordToNum("Two");
//
//  require(["webpackNumbers"], function (webpackNumbers) {
//    // ...
//    webpackNumbers.wordToNum("Two");
//  });
//
//  // ...
//  // Global variable
//  webpackNumbers.wordToNum("Five");
//  // Property in the window object
//  window.webpackNumbers.wordToNum("Five");
//  // ...
//
//  return element;
//}
//
//export function numToWord(num) {
//    return _.reduce(
//      numRef,
//      (accum, ref) => {
//        return ref.num === num ? ref.word : accum;
//    },
//    ''
//  );
//}
//export function wordToNum(word) {
//    return _.reduce(
//      numRef,
//      (accum, ref) => {
//        return ref.word === word && word.toLowerCase() ? ref.num : accum;
//    },
//    -1
//  );
//
//
//getComponent().then((component2) => {
//  document.body.appendChild(component2);
//});

//document.getElementById("p2").style.color = "blue";
//document.getElementById("p2").style.fontFamily = "Arial";
//document.getElementById("p2").style.fontSize = "auto";

//<script src="https://example.org/webpack-numbers.js"></script>
//<script>
//  window.webpackNumbers.wordToNum('Five');
//</script>
