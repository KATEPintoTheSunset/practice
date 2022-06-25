import { createLoginPage } from './pages/login';
import { createRecipeList } from './pages/recipes-list';

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('token')) {
        createRecipeList();
    } else {
        document.body.append(createLoginPage());
    }
});
