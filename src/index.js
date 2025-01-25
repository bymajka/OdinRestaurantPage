import "./styles.css";
import {uploadPage} from "./home";
console.log("Here is my restaurant!");

const homeTabButton = document.querySelector('.home-button');
const menuTabButton = document.querySelector('.menu-button');
const aboutTabButton = document.querySelector('.about-button');

homeTabButton.addEventListener('click', uploadPage);