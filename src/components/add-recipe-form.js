import { createComponent } from './common/create-component';
import { addProductToRecipe } from '../components/add-product-to-recipe';

const createNewRecipeForm = async () => {
    const blok = createComponent('div', 'recipes__block', '');

    const nameRecipeLabel = createComponent('p', 'login__form_txt', '');
    nameRecipeLabel.innerHTML = 'Name Recipe';

    const nameRecipeInput = createComponent('input', 'login__form__inpt', 'nameRecipe');
    nameRecipeInput.type = 'text';

    const productsLabel = createComponent('p', 'login__form_txt', '');
    productsLabel.innerHTML = 'Products';

    const btnAdd = createComponent('btn', 'login__form_btn', 'add');
    btnAdd.innerHTML = '+';
    btnAdd.addEventListener('click', async () => {
        blok.append(await addProductToRecipe());
    });

    blok.append(nameRecipeLabel, nameRecipeInput, productsLabel, btnAdd, await addProductToRecipe());

    return blok;
};

export { createNewRecipeForm };
