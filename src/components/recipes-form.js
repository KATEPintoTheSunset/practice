import { createComponent } from './common/create-component';
import { getList } from '../actions/get-recipes-list';
import { deleteRecipe } from '../actions/delete-recipe';

const createRecipesForm = async () => {
    const recipes = await getList();

    const container = createComponent('div', 'recipes', '');

    for (let i = 0; i < recipes.length; i++) {
        const blok = createComponent('div', 'login__form', '');

        const name = createComponent('p', 'login__form_txt', 'name');
        name.innerHTML = recipes[i].name;
        blok.append(name);

        for (let j = 0; j < recipes[i].products.length; j++) {
            const list = createComponent('li', 'login__form_txt', 'list');
            list.innerHTML = `${recipes[i].products[j].name}: ${recipes[i].products[j].recipe.amount} g`;
            blok.append(list);
        }

        const calories = createComponent('p', 'login__form_txt', 'calories');
        calories.innerHTML = `Calories: ${recipes[i].calories}`;

        const btnDel = createComponent('btn', 'login__form_btn', 'del');
        btnDel.innerHTML = 'delete';
        btnDel.addEventListener('click', () => {
            const res = deleteRecipe(recipes[i].id);
            if (res) {
                blok.remove();
            }
        });

        blok.append(calories, btnDel);
        container.append(blok);
    }
    return container;
};

export { createRecipesForm };
