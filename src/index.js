import "./styles.css";
import "./home.css";
import "./about.css";
import "./menu.css";

import {uploadPage as uploadHomePage} from "./home";
import {uploadPage as uploadAboutPage} from "./about";
import {uploadPage as uploadMenuPage} from "./menu";
const content = document.getElementById('content');

const homeTabButton = document.querySelector('.home-button');
const menuTabButton = document.querySelector('.menu-button');
const aboutTabButton = document.querySelector('.about-button');

window.addEventListener('load', () => {
  uploadHomePage();
})

homeTabButton.addEventListener('click', () => {
  cleanPage();
  import('./home.css');
  uploadHomePage();
});
menuTabButton.addEventListener('click', () => {
  cleanPage();
  uploadMenuPage();
});
aboutTabButton.addEventListener('click', () => {
  cleanPage();
  uploadAboutPage();
})
const cleanPage = () => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
};

