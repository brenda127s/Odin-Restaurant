// restaurant.js
const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const headLine1 = document.createElement('h1');
    headLine1.classList.add('headline-1');
    headLine1.textContent = 'Silk Cafe';
    pageContent.appendChild(headLine1);

    const image = document.createElement('img');
    image.src = 'https://www.inquirer.com/resizer/pi05kEdJM3PYrWoTiCZqo-jlI9A=/arc-anglerfish-arc2-prod-pmn/public/7W6WRR5SYJH2RHFW5RDWZVTTI4.jpg';
    image.height = '400';
    pageContent.appendChild(image);

    const headLine2 = document.createElement('h1');
    headLine2.classList.add('headline-2');
    headLine2.textContent = 'Enjoy the finest coffee in town!';
    pageContent.appendChild(headLine2);

    const copy = document.createElement('p');
    copy.textContent = 'Welcome to Silk Cafe, your go-to spot for delicious treats and wholesome meals! Nestled in the heart of Manhattan, we offer a delightful selection of handcrafted drinks, freshly baked pastries, hearty soups, vibrant salads, and mouthwatering sandwiches.';
    pageContent.appendChild(copy)
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;