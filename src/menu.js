import starImg from "../src/img/star.png";
import firstDishImg from "../src/img/first-dish.png";
import secondDishImg from "../src/img/second-dish.png";
import thirdDishImg from "../src/img/third-dish.png";
import sectionSeparatorImg from "../src/img/menu-section-separator.png"

const content = document.getElementById('content');

export function uploadPage() {
    if(!content.firstChild){
        createMenuSection();
        createSeparator(sectionSeparatorImg);
    }
}

function createMenuSection(){
    const menuSection = document.createElement('section');
    menuSection.classList.add('menu-section');
    const subtitle = document.createElement('h3');
    subtitle.classList.add('subtitle');
    subtitle.innerHTML = "MENU";
    const h2Element = document.createElement('h2');
    h2Element.innerHTML = "Popular Dishes";
    const pElement = document.createElement('p');
    pElement.innerHTML = "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content making.";

    const popularDishes = document.createElement('div');
    popularDishes.classList.add("popular-dishes");
    popularDishes.appendChild(createDishCard(firstDishImg, "5.0"));
    popularDishes.appendChild(createDishCard(secondDishImg, "5.0"));
    popularDishes.appendChild(createDishCard(thirdDishImg, "5.0"));

    const button = document.createElement('button');
    button.innerHTML = "See all dishes";

    menuSection.appendChild(subtitle);
    menuSection.appendChild(h2Element);
    menuSection.appendChild(pElement);
    menuSection.appendChild(popularDishes);
    menuSection.appendChild(button);

    content.appendChild(menuSection);
}

function createDishCard(imgPath, ratingScore){
    const dishCard = document.createElement('div');
    const img = document.createElement('img');

    img.src = imgPath;

    const dishInfo = document.createElement('div');
    dishInfo.classList.add("dish-info");
    const h4Element = document.createElement('h4');
    h4Element.innerHTML = "Lorem Epsum";
    const price = document.createElement('p');
    price.innerHTML = "$13";
    price.classList.add("price");
    const rating = document.createElement('div');
    rating.classList.add("rating");
    const button = document.createElement('button');
    button.innerHTML = "Order Now";
    const ratingNumber = document.createElement('p');
    ratingNumber.innerHTML = ratingScore;
    rating.appendChild(ratingNumber);
    for(let i = 0; i < 5; i++){
        const star = document.createElement('img');
        star.src = starImg;
        rating.appendChild(star);
    }
    dishInfo.appendChild(h4Element);
    dishInfo.appendChild(price);
    dishInfo.appendChild(rating);
    dishInfo.appendChild(button);

    dishCard.appendChild(img);
    dishCard.appendChild(dishInfo);

    return dishCard;
}

function createSeparator(imgPath){
    const separatorImage = document.createElement('img');
    separatorImage.src = imgPath;
    separatorImage.classList.add("separator");

    content.appendChild(separatorImage);
}