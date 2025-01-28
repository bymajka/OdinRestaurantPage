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

const content = document.getElementById('content');

export function uploadPage(){
    if(!content.firstChild){
        createAboutSection();
        createAdvantageSection();
        createStorySection();
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

    const freshProduct = createAdvantage(freshProductImage, "Fresh Product");
    const chefs = createAdvantage(skilledChefsImage, "Skilled Chefs");
    const drinks = createAdvantage(drinksJuicesImage, "Drinks & Juices");
    const vegan = createAdvantage(veganCuisineImage, "Vegan Cuisine");

    advantageSection.appendChild(freshProduct);
    advantageSection.appendChild(chefs);
    advantageSection.appendChild(drinks);
    advantageSection.appendChild(vegan);
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

    chefsList.appendChild(createChefElement(firstChef, "Avroko", "Master Chef"));
    chefsList.appendChild(createChefElement(secondChef, "Evan Mattew", "Master Chef"));
    chefsList.appendChild(createChefElement(thirdChef, "Diane	Clarkson", "Master Chef"));
    chefsList.appendChild(createChefElement(fourthChef, "Dan Rafalin", "Assistant Chef "));

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