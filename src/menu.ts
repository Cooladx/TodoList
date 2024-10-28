export default menuLoad;
export { menuBtn };
import strawberry from './images/shakes/Strawberry.jpg';
import chocolate from './images/shakes/chocolate.jpg';
import oreo from './images/shakes/oreo.jpg';
import vanilla from './images/shakes/vanilla.jpg';

import bbcheesecake from './images/sweets/bbcheesecake.jpg';
import cakepop from './images/sweets/cakepop.jpg';
import macarons from './images/sweets/macarons.jpg';
import oatmeal from './images/sweets/oatmeal.jpg';
const menuBtn = document.querySelector<HTMLElement>('#card');

// Loads the DOM elements for the contents of the menu page for the restaurant.
function menuLoad() {
    const content = document.querySelector<HTMLElement>('#content');
    if (content) {
        content.textContent = '';
    } else {
        console.error('content not found:', content);
    }

    const shakes: HTMLElement = document.createElement('section');
    content?.appendChild(shakes);

    const topic: HTMLElement = document.createElement('h2');
    topic.classList.add('mshakes');
    topic.textContent = 'Milkshakes';
    shakes?.appendChild(topic);

    const shakestore: HTMLElement = document.createElement('div');
    shakestore.classList.add('shakemaker');
    shakes.appendChild(shakestore);

    const imgStorageOfShakes: string[] = [strawberry, chocolate, oreo, vanilla];

    createImages(imgStorageOfShakes, shakestore);

    const sweets: HTMLElement = document.createElement('section');
    sweets.classList.add('sweets');
    content?.appendChild(sweets);

    const sweetTopic: HTMLElement = document.createElement('h2');
    sweetTopic.classList.add('sugarsweet');
    sweetTopic.textContent = 'Sweets';
    sweets?.appendChild(sweetTopic);

    const sweetstore: HTMLElement = document.createElement('div');
    sweetstore.classList.add('sweetmaker');
    sweets.appendChild(sweetstore);

    const imgStorageOfSweets: string[] = [bbcheesecake, cakepop, macarons, oatmeal];
    createImages(imgStorageOfSweets, sweetstore);
}

// Function to create images and append them to the section.
// The parameters are imgStorage which is an array of img imports.
// and sends a div element which will be appended each img element as a final result.
function createImages(imgStorage: string[], shakestore: HTMLElement) {
    imgStorage.forEach((image: string) => {
        const img = document.createElement('img');
        img.src = image;
        shakestore.appendChild(img);
    });
}
