const createMenuPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Establish and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Menu';
    pageContent.appendChild(headline);

    //Establish list for menu items
    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    const menuItem2 = document.createElement('li');
    const menuItem3 = document.createElement('li');
    menuItem1.textContent = "Crispy Lechon";
    menuItem2.textContent = "Royal Dinuguan";
    menuItem3.textContent = "Lumpia con Keso";
    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);

    //Append elements to page content div
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
}

export default createMenuPage;