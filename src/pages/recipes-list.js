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
        document.getElementById('rec').classList.remove('recipes-closed');
    });
    container.append(await createRecipesForm(), btnAdd);

    const list = createComponent('select', 'products__list', 'products');
    for (let i = 0; i < products.length; i++) {
        const product = createComponent('option', '', '');
        product.innerHTML = products[i].name;
        list.append(product);
    }
    
    document.body.append(container, list, await addRecipes());
};

export { createRecipeList };