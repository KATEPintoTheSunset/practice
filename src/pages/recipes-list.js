import { createRecipesForm } from '../components/recipes-form';
import { createComponent } from '../components/common/create-component';
import { getProducts } from '../actions/get-products';
import { addRecipes } from '../pages/add-recipe';

const createRecipeList = async () => {
    const products = await getProducts();

    const container = createComponent('section', 'login__wrapper');
    const btnAdd = createComponent('btn', 'login__form_btn', 'add');
    btnAdd.innerHTML = '+';
    btnAdd.addEventListener('click', () => {
        document.getElementsByClId('rec').classList.toggle('recipes-close');
    });
    container.append(await createRecipesForm(), btnAdd);

    const list = createComponent('select', 'products__list', 'products');
    for (let i = 0; i < products.length; i++) {
        const product = createComponent('option', '', '');
        product.innerHTML = products[i].name;
        list.append(product);
    }

    const containerNewRecipes = createComponent('div', 'recipes__wrapper recipes-closed', 'rec');
    containerNewRecipes.append(await addRecipes());
    
    document.body.append(container, list, containerNewRecipes);
};

export { createRecipeList };