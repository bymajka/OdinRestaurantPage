import "./styles.css";

const content = document.getElementById('content');

// const homeTabButton = document.querySelector('.home-button');
// const menuTabButton = document.querySelector('.menu-button');
// const aboutTabButton = document.querySelector('.about-button');

const tabs = [
  {button: '.home-button', module: 'home', css: 'home.css'},
  {button: '.menu-button', module: 'menu', css: 'menu.css'},
  {button: '.about-button', module: 'about', css: 'about.css'},
];

tabs.forEach(({button, module, css}) => {
  document.querySelector(button).addEventListener('click', async () => {
    cleanPage();
    const {uploadPage} = await import(`./${module}`);
    await import(`./${css}`);
    uploadPage();
  });
})

window.addEventListener('load', async () => {
  const { uploadPage: uploadHomePage } = await import('./home');
  await import('./home.css');
  uploadHomePage();
  content.style.visibility = 'visible';
})

const cleanPage = () => {
  while (content.firstChild) {
    content.firstChild.remove();
  }
};

