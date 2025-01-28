import "./styles.css";
// import "./home.css";
// import "./about.css";

// import {uploadPage as uploadHomePage} from "./home";
// import {uploadPage as uploadAboutPage} from "./about";
// import {uploadPage as uploadMenuPage} from "./menu";
const content = document.getElementById('content');

const homeTabButton = document.querySelector('.home-button');
const menuTabButton = document.querySelector('.menu-button');
const aboutTabButton = document.querySelector('.about-button');

window.addEventListener('load', async () => {
  const { uploadPage: uploadHomePage } = await import('./home');
  import('./home.css');
  uploadHomePage();
})

homeTabButton.addEventListener('click', async () => {
  cleanPage();
  const { uploadPage: uploadHomePage } = await import('./home');
  import('./home.css');
  uploadHomePage();
});
menuTabButton.addEventListener('click', async () => {
  cleanPage();
  const { uploadPage: uploadMenuPage } = await import('./menu');
  import('./menu.css');
  uploadMenuPage();
});
aboutTabButton.addEventListener('click', async () => {
  cleanPage();
  const { uploadPage: uploadAboutPage } = await import('./about');
  import('./about.css'); // Load styles dynamically
  uploadAboutPage();
})
const cleanPage = () => {
    while (content.firstChild) {
      content.removeChild(content.firstChild);
    }
};

