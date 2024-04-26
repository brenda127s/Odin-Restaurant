//module for creating the menu page
const createMenuPage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const heading = document.createElement('h1');
    heading.textContent = 'Our menu';

    const menuList = document.createElement('ul');

    const divContainer = document.createElement('div');
    divContainer.classList.add('menu-container');

    const menuItem1 = document.createElement('li');
    menuItem1.textContent = 'Drinks';
    divContainer.appendChild(menuItem1);
    const image = document.createElement('img');
    image.src = 'https://hanbitcho.com/wp-content/uploads/2022/06/284A0261-1.jpg';
    image.height = '300';
    menuItem1.appendChild(image);


    const menuItem2 = document.createElement('li');
    menuItem2.textContent = 'Soups & Salads';
    divContainer.appendChild(menuItem2);
    const image2 = document.createElement('img');
    image2.src = 'https://potatorolls.com/wp-content/uploads/2020/10/Soup-and-Salad-Pair.jpg';
    image2.height = '300';
    image2.width = '300';
    menuItem2.appendChild(image2);


    const menuItem3 = document.createElement('li');
    menuItem3.textContent = 'Sandwiches';
    divContainer.appendChild(menuItem3);
    const image3 = document.createElement('img');
    image3.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs-j6rJ0f8KG5Qg_yfw2Aj5Lorp835TBtg4cmdIIJCGA&s';
    image3.height = '300';
    image3.width = '300';
    menuItem3.appendChild(image3);
    
    menuList.appendChild(divContainer);

    pageContent.appendChild(heading);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
};

export default createMenuPage;