import welcomeImage from "../src/img/welcome-image.png";
import locationImg from "../src/img/location.svg";
import openHoursImg from "../src/img/open-hours.svg";
import reservationImg from "../src/img/reservation.svg";

import { createStorySection } from "./storySection";

const content = document.getElementById('content')

const infoBlocks = [
    {img: locationImg, header: "Locate Us", desc: "Riverside 25, San Francisco, California"},
    {img: openHoursImg, header: "Open Hours", desc: "Mon To Fri 9:00 AM - 9:00 PM"},
    {img: reservationImg, header: "Reservation", desc: "hirestaurantate@gmail.com"},
];

export function uploadPage(){
    if(!content.firstChild){
        createWelcomeSection();
        createInfoSection();
        createStorySection(content);
    }
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

    infoBlocks.forEach(infoBlock => {
        createInfoBlock(infoSection, infoBlock.img, infoBlock.header, infoBlock.desc);
    });

    content.appendChild(infoSection);
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
