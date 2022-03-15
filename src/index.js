import _ from "lodash";
import "./style.css";
import Icon from "./background.jpg";
import Data from "./data.xml";
import Notes from "./data.csv";
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';
import printMe from "./print.js";

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`
console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`
console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello"); //style.css import
  element.classList.add("background"); //style.css import

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;
  //const myfavicon = new Image();
  //myfavicon.src = favicon;

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);
  element.appendChild(myIcon);
  //element.appendChild(myfavicon);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
//document.getElementById("p2").style.color = "blue";
//document.getElementById("p2").style.fontFamily = "Arial";
//document.getElementById("p2").style.fontSize = "auto";