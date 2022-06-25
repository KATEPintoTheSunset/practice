import { createNewRecipeForm } from '../components/add-recipe-form';
import { createComponent } from '../components/common/create-component';

async function addRecipes() {
    const container = createComponent('div', 'recipes__wrapper recipes-closed', 'rec');
    container.append(await createNewRecipeForm());
    return container;
}

export { addRecipes };
