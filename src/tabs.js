import createContactPage from "./contact";
import createMenuPage from "./menu";
import createRestaurantHomePage from "./restaurant";

const createTabs = () => {
    const content = document.querySelector('#content');

    //Create the three divs
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const tabContainer = document.createElement('div');

    //Set IDs for the divs
    div1.setAttribute('id', 'home-btn');
    div2.setAttribute('id', 'menu-btn');
    div3.setAttribute('id', 'contact-btn');
    tabContainer.setAttribute('id', 'tab-container')

    //Set classes for divs
    div1.classList.add('tab');
    div2.classList.add('tab');
    div3.classList.add('tab');

    //Set text content for the tabs
    div1.textContent = "Home";
    div2.textContent = "Menu";
    div3.textContent = "Contact";

    //Append the divs to the content div
    tabContainer.appendChild(div1);
    tabContainer.appendChild(div2);
    tabContainer.appendChild(div3);
    content.appendChild(tabContainer);

    div1.addEventListener('click', () => {
        clearContent();
        createRestaurantHomePage();
    });

    div2.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    });

    div3.addEventListener('click', () => {
        clearContent();
        createContactPage();
    });
}


function clearContent() {
    const content = document.querySelector('#content');
    const pageContent = document.querySelector('.page-content')

    if (pageContent) {
        content.removeChild(pageContent);
    }
}
export default createTabs;