import "./styles.css";
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

homeTabButton.addEventListener('click', uploadHomePage);
menuTabButton.addEventListener('click', () => {
  // cleanPage();
  uploadMenuPage();
});
aboutTabButton.addEventListener('click', () => {
  uploadAboutPage();
})

const cleanPage = () => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
  };

