import { createNewRecipeForm } from '../components/add-recipe-form';
import { createComponent } from '../components/common/create-component';

async function addRecipes() {
    const container = createComponent('div', 'recipes__wrapper recipes-closed', 'rec');
    container.append(await createNewRecipeForm());
    container.addEventListener('click', (e) => {
        e.stopImmediatePropagation();
        document.getElementById('rec').classList.add('recipes-closed');
    });

    return container;
}

export { addRecipes };
