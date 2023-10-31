// For restaurant.js

const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Establish and append image element
    const image = document.createElement('img');
    image.src = 'https://images.summitmedia-digital.com/spotph/images/2019/03/11/filipinorestos640-1552299296.jpg';
    image.height = '300';
    pageContent.appendChild(image);

    //Establish and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Five Star Restaurant';
    pageContent.appendChild(headline);

    //Create and append description element
    const description = document.createElement('p')
    description.textContent = 'Five Star restaurant is a five-star Filipino restaurant that serves authentic, mouth-watering Filipino dishes';
    pageContent.appendChild(description);

    content.appendChild(pageContent);
}

export default createRestaurantHomePage;