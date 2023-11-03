const createContactPage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    //Establish and append headline element
    const headline = document.createElement('h1');
    headline.textContent = 'Contact';
    pageContent.appendChild(headline);

    //Establish contact details
    const number = document.createElement('h3');
    number.textContent = 'You can call us at 09123456789';
    pageContent.appendChild(number);

    //Establish email details
    const email = document.createElement('h3');
    email.textContent = 'Or send as an email at fivestardining@goodfood.com';
    pageContent.appendChild(email);

    content.appendChild(pageContent);
}

export default createContactPage;