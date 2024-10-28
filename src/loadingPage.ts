import donut from './images/donut2.jpg';
export default pageLoad;
export { createFooter };

// Loads the DOM elements for the logo and the contents of the home page for the resturant.
function pageLoad() {
    const header = document.querySelector('header');

    const banner: HTMLElement = document.createElement('div');
    banner.classList.add('banner');

    const image = document.createElement('img');
    image.src = donut;
    image.classList.add('logo');

    banner?.appendChild(image);

    header?.prepend(banner);

    const content = document.querySelector('#content');

    const headLine: HTMLElement = document.createElement('h1');
    headLine.textContent = 'Sweet Haven: A Candy Wonderland for All Ages!';
    content?.appendChild(headLine);

    const description: HTMLElement = document.createElement('p');
    description.classList.add('desc');
    description.textContent =
        'Step into a magical world where every corner is filled with delightful treats! At Sweet Haven, we’ve created a candy paradise for kids and adults alike. From classic favorites like gummies and chocolates to unique, handcrafted sweets, our menu is a sugary dream come true. Whether you’re celebrating a special occasion or just satisfying your sweet tooth, our colorful atmosphere and friendly staff will make your visit unforgettable. Come and indulge in a place where every bite brings happiness!';
    content?.appendChild(description);

    const daysOpen: HTMLElement = document.createElement('h2');
    content?.appendChild(daysOpen);
    daysOpen.textContent = 'Days Open';

    const hours = document.createElement('div');
    hours.classList.add('board');

    content?.appendChild(hours);

    const workHoursList: string[] = [
        'Monday: 9 AM - 9 PM',
        'Tuesday: 9 AM - 9 PM',
        'Wednesday: 9 AM - 9 PM',
        'Thursday: 9 AM - 10 PM',
        'Friday: 9 AM - 11 PM',
        'Saturday: 10 AM - 11 PM',
        'Sunday: 10 AM - 8 PM',
    ];

    createList(workHoursList, hours);
    createFooter();
}

// Function to create an unordered list with a bullet of a full schedule.
// It will return an html element of ul and li's once all days of the week are iterated.
// Parameters are the array of the workHours week and the other one is an html element of the workhour board.
function createList(workHoursList: string[], parentElement: HTMLElement): HTMLElement {
    const ul = document.createElement('ul');

    workHoursList.forEach((workHour) => {
        const li = document.createElement('li');
        li.textContent = workHour;
        ul.appendChild(li);
    });
    parentElement = parentElement.appendChild(ul);
    parentElement.classList.add('sethours');
    return parentElement;
}

//Function to create footer, takes no parameters. Only used once for this one loading page.
// It will statically stay on other pages even when DOM is reloaded so no imports are needed.

function createFooter() {
    const footer = document.createElement('footer');
    document.body.appendChild(footer);
    const ending = document.createElement('p');
    footer.appendChild(ending);
    ending.textContent = '©  2024 Sweet Haven. All rights reserved.';
}
