import { createComponent } from './common/create-component';
import { getProducts } from '../actions/get-products';

async function addProductToRecipe() {
    const products = await getProducts();

    const container = createComponent('div', 'products', '');

    const list = createComponent('select', 'products__list', 'products');
    for (let i = 0; i < products.length; i++) {
        const product = createComponent('option', '', '');
        product.innerHTML = products[i].name;
        list.append(product);
    }

    const productGram = createComponent('p', 'login__form_txt', '');
    productGram.innerHTML = 'Gram';
    const productCountInput = createComponent('input', 'login__form__inpt', 'nameRecipe');
    productCountInput.type = 'number';
    productCountInput.min = 1;
    productCountInput.max = 1000;

    container.append(list, productGram, productCountInput);

    return container;
}
export { addProductToRecipe };
