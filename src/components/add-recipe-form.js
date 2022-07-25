import { createComponent } from './common/create-component';
import { addProductToRecipe } from '../components/add-product-to-recipe';
import { addRecipe } from "../actions/add-recipe";

const createNewRecipeForm = async () => {
    const blok = createComponent('div', 'recipes__block', '');
    const addProduct = await addProductToRecipe();

    const nameRecipeLabel = createComponent('p', 'login__form_txt', '');
    nameRecipeLabel.innerHTML = 'Name Recipe';

    const nameRecipeInput = createComponent('input', 'login__form__inpt', 'nameRecipe');
    nameRecipeInput.type = 'text';

    const productsLabel = createComponent('p', 'login__form_txt', '');
    productsLabel.innerHTML = 'Products';

    const btnAdd = createComponent('btn', 'login__form_btn', 'add');
    btnAdd.innerHTML = '+';
    btnAdd.addEventListener('click', async () => {
        addProduct.after(await addProductToRecipe());
    });

    const addRecipe = createComponent('btn', 'login__form_btn', 'add');
    addRecipe.innerHTML = 'Done';
    addRecipe.addEventListener('click', async () => {
        await addRecipe(nameRecipeLabel,)
    });

    blok.append(nameRecipeLabel, nameRecipeInput, productsLabel, btnAdd, addProduct, addRecipe);

    return blok;
};

export { createNewRecipeForm };
