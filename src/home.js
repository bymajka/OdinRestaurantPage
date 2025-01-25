import welcomeImage from "../src/img/welcome-image.png";
import locationImg from "../src/img/location.svg";
import openHoursImg from "../src/img/open-hours.svg";
import reservationImg from "../src/img/reservation.svg";
import storyImg from "../src/img/story-image.png";

const content = document.getElementById('content')

export function uploadPage(){
    createWelcomeSection();
    createInfoSection();
    createStorySection();
}

function createWelcomeSection(){
    const welcomeSection = document.createElement('section');
    welcomeSection.classList.add("welcome-section");

    const viewMenuBlock = document.createElement('div');
    viewMenuBlock.classList.add("view-menu-block");

    const menuBlockHeader = document.createElement('h1');
    menuBlockHeader.innerHTML = "Welcome to ";

    const spanText = document.createElement('span');
    spanText.innerHTML = "RestoNest";
    
    const viewMenuBlockText = document.createElement('p');
    viewMenuBlockText.innerHTML = "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy .";
    
    const viewMenuBlockButton = document.createElement('button');
    viewMenuBlockButton.innerHTML = "View Menu";
    
    const menuBlockImage = document.createElement('img');
    menuBlockImage.src = welcomeImage;

    menuBlockHeader.appendChild(spanText);
    viewMenuBlock.appendChild(menuBlockHeader);
    viewMenuBlock.appendChild(viewMenuBlockText);
    viewMenuBlock.appendChild(viewMenuBlockButton);
    welcomeSection.appendChild(viewMenuBlock);
    welcomeSection.appendChild(menuBlockImage);
    content.appendChild(welcomeSection);
}

function createInfoSection(){
    const infoSection = document.createElement('section');
    infoSection.classList.add("basic-info");

    createInfoBlock(infoSection, locationImg, "Locate Us", "Riverside 25, San Francisco, California");
    createInfoBlock(infoSection, openHoursImg, "Open Hours", "Mon To Fri 9:00 AM - 9:00 PM");
    createInfoBlock(infoSection, reservationImg, "Reservation", "hirestaurantate@gmail.com");

    content.appendChild(infoSection);
}

function createStorySection() {
    const storySection = document.createElement('section');
    storySection.classList.add("story-section");

    const storySectionImg = document.createElement('img');
    storySectionImg.src = storyImg;

    const storyText = document.createElement('div');
    storyText.classList.add("story-text");
    const h2StoryElement = document.createElement('h2');
    h2StoryElement.innerHTML = "The Story";
    const pStoryElement = document.createElement('p');
    pStoryElement.innerHTML = "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content gfshere', makinlook like readable English. Many desktop publishing packages."

    storyText.appendChild(h2StoryElement);
    storyText.appendChild(pStoryElement);

    const year1996Text = document.createElement('div');
    year1996Text.classList.add("year-1996");
    const h2Year1996Element = document.createElement('h2');
    h2Year1996Element.innerHTML = "1996"
    const pYear1996Element = document.createElement('p');
    pYear1996Element.innerHTML = "Lorem Ipsum is that it has a more-or-less normal distribution";

    year1996Text.appendChild(h2Year1996Element);
    year1996Text.appendChild(pYear1996Element);

    const year2021Text = document.createElement('div');
    year2021Text.classList.add("year-2021");
    const h2Year2021Element = document.createElement('h2');
    h2Year2021Element.innerHTML = "2021";
    const pYear2021Element = document.createElement('p');
    pYear2021Element.innerHTML = "Lorem Ipsum is that it has a more-or-less normal Content content";

    year2021Text.appendChild(h2Year2021Element);
    year2021Text.appendChild(pYear2021Element);

    storySection.appendChild(storySectionImg);
    storySection.appendChild(storyText);
    storySection.appendChild(year1996Text);
    storySection.appendChild(year2021Text);

    content.appendChild(storySection);
}

function createInfoBlock(sectionBlock, imgPath, h3ElementText, pElementText) {
    const div = document.createElement('div');
    div.classList.add('info-block');
    const img = document.createElement('img');
    const divInfoText = document.createElement('div');
    divInfoText.classList.add("info-text");
    const h3Element = document.createElement('h3');
    const pElement = document.createElement('p');

    img.src = imgPath;
    h3Element.innerHTML = h3ElementText;
    pElement.innerHTML = pElementText;

    div.appendChild(img);
    divInfoText.appendChild(h3Element);
    divInfoText.appendChild(pElement);
    div.appendChild(divInfoText);
    sectionBlock.appendChild(div);
}
