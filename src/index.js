function component() {
    const element = document.createElement('div');

    element.innerHTML =`
        <h1>Five Star Restaurant</h1>
        <p>Five Star restaurant is a five-star Filipino restaurant that serves authentic, mouth-watering Filipino dishes</p>
        `;

    return element;
}

document.getElementById('content').appendChild(component());