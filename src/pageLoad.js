import createRestaurantHomePage from './restaurant';
import createTabs from './tabs';
import createMenuPage from './menu';
import createContactPage from './contact';


function initialLoad() {
    createTabs();
    createRestaurantHomePage();

    
}

export default initialLoad;