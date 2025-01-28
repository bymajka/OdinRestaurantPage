import storyImg from '../src/img/story-image.png';

export function createStorySection(content) {
    const storySection = document.createElement('section');
    storySection.classList.add("story-section");

    const storySectionImg = document.createElement('img');
    storySectionImg.src = storyImg;

    const storyText = document.createElement('div');
    storyText.classList.add("story-text");
    const h2StoryElement = document.createElement('h2');
    h2StoryElement.innerHTML = "The Story";
    const pStoryElement = document.createElement('p');
    pStoryElement.innerHTML =
        "Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content gfshere', makinlook like readable English. Many desktop publishing packages.";
    storyText.appendChild(h2StoryElement);
    storyText.appendChild(pStoryElement);

    const year1996Text = document.createElement('div');
    year1996Text.classList.add("year-1996");
    const h2Year1996Element = document.createElement('h2');
    h2Year1996Element.innerHTML = "1996";
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