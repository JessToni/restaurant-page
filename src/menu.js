const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Establish and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Menu';
    pageContent.appendChild(headline);

    content.appendChild(pageContent);
}

export default createMenuPage;