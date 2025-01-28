import aboutUsImage from "../src/img/about-us-image.png";
import storyImg from "../src/img/story-image.png";
import firstChef from "../src/img/first-chef.png";
import secondChef from "../src/img/second-chef.png";
import thirdChef from "../src/img/third-chef.png";
import fourthChef from "../src/img/fourth-chef.png";
import freshProductImage from "../src/img/fresh-product.svg";
import skilledChefsImage from "../src/img/skilled-chefs.svg";
import drinksJuicesImage from "../src/img/drinks-juices.svg";
import veganCuisineImage from "../src/img/vegan-cuisine.svg";

import {createStorySection} from "./storySection";

const content = document.getElementById('content');

const advantages = [
    {img: freshProductImage, name: "Fresh Product"},
    {img: skilledChefsImage, name: "Skilled Chefs"},
    {img: drinksJuicesImage, name: "Drinks & Juices"},
    {img: veganCuisineImage, name: "Vegan Cuisine"},
];

const chefs = [
    {img: firstChef, name: "Avroko", vacation: "Master Chef"},
    {img: secondChef, name: "Evan Mattew", vacation: "Master Chef"},
    {img: thirdChef, name: "Diane	Clarkson", vacation: "Master Chef"},
    {img: fourthChef, name: "Dan Rafalin", vacation: "Assistant Chef "},
]

export function uploadPage(){
    if(!content.firstChild){
        createAboutSection();
        createAdvantageSection();
        createStorySection(content);
        createTeamSection();
    }
}

function createAboutSection(){
    const aboutSection = document.createElement('section');
    aboutSection.classList.add('about-us-section');

    const div = document.createElement('div');
    div.classList.add('about-us-description');

    const subtitle = document.createElement('h3');
    subtitle.classList.add('subtitle');
    subtitle.innerHTML = "ABOUT US";

    const h2Element = document.createElement('h2');
    const pElement = document.createElement('p');

    h2Element.innerHTML = "Quality and Tradition";
    pElement.innerHTML = "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content gfshere making look like readable English. Many desktop publishing packages."

    const button = document.createElement('button');
    button.innerHTML = "See More";

    const img = document.createElement('img');
    img.src = aboutUsImage;

    div.appendChild(subtitle);
    div.appendChild(h2Element);
    div.appendChild(pElement);
    div.appendChild(button);


    aboutSection.appendChild(div);
    aboutSection.appendChild(img);

    content.appendChild(aboutSection);
}

function createAdvantageSection(){
    const advantageSection = document.createElement('section');
    advantageSection.classList.add("advantage-section");

    advantages.forEach(advantage => {
        advantageSection.appendChild(createAdvantage(advantage.img, advantage.name));
    });

    content.appendChild(advantageSection);
}

function createAdvantage(imgPath, headerText) {
    const advantageElement = document.createElement('div');
    advantageElement.classList.add('advantage');
    const img = document.createElement('img');

    img.src = imgPath;

    const header = document.createElement('p');
    header.classList.add('advantage-header');
    header.innerHTML = headerText;

    const description = document.createElement('p');
    description.classList.add("advantage-text");
    description.innerHTML = "Professional consider everyone probls small niche friendly";
    
    const link = document.createElement('a');
    link.innerHTML = "See more";
    link.href = '#';

    advantageElement.appendChild(img);
    advantageElement.appendChild(header);
    advantageElement.appendChild(description);
    advantageElement.appendChild(link);

    return advantageElement;
}

function createTeamSection() {
    const teamSection = document.createElement('section');
    teamSection.classList.add("team-section");

    const subtitle = document.createElement('h3');
    subtitle.classList.add('subtitle');
    subtitle.innerHTML = "TEAM";

    const h2Element = document.createElement('h2');
    h2Element.innerHTML = "Meet Our Professional Chefs";

    const chefsList = document.createElement('div');
    chefsList.classList.add("chefs-list");

    chefs.forEach(chef => {
        chefsList.appendChild(createChefElement(chef.img, chef.name, chef.vacation));
    });

    teamSection.appendChild(subtitle);
    teamSection.appendChild(h2Element);
    teamSection.appendChild(chefsList);

    content.appendChild(teamSection);
}

function createChefElement(imgPath, chefName, chefClass){
    const chefElement = document.createElement('div');
    chefElement.classList.add('chef-element');

    const img = document.createElement('img');
    img.src = imgPath;

    const header = document.createElement('p');
    header.classList.add('chef-name');
    header.innerHTML = chefName;

    const description = document.createElement('p');
    description.classList.add("chef-class");
    description.innerHTML = chefClass;

    chefElement.appendChild(img);
    chefElement.appendChild(header);
    chefElement.appendChild(description);

    return chefElement;
}