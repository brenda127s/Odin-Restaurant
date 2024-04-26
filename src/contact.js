//module for creating the content page
const createContactPage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const divContainer = document.createElement('div');
    divContainer.classList.add('contact-div');
    pageContent.appendChild(divContainer);

    const headLine = document.createElement('h1');
    headLine.classList.add('contact-h1');
    headLine.textContent = 'Contact Us';
    divContainer.appendChild(headLine);

    const headLine2 = document.createElement('h2');
    headLine2.classList.add('contact-h2');
    headLine2.textContent = '1111 Beans Dr, Espresso, CA 90210';
    divContainer.appendChild(headLine2);

    const headLine3 = document.createElement('h2');
    headLine3.classList.add('contact-h2');
    headLine3.textContent = '(222)-222-BEANS';
    divContainer.appendChild(headLine3);

    const link = document.createElement('a');
    link.classList.add('contact-h2');
    link.href = 'https://github.com/brenda127s';
    link.textContent = 'github.com/brenda127s';
    divContainer.appendChild(link);

    pageContent.appendChild(divContainer);
    content.appendChild(pageContent);
};

export default createContactPage;