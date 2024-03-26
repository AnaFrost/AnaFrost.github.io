import { createProductCard } from './components/createProductCard';
import { getProductData } from './utils/api/getProductData';

const cardContainer = document.getElementById('card-container');

window.addEventListener('DOMContentLoaded', async () => {
	const productData = await getProductData();
	const productCard = createProductCard(productData);

	cardContainer.appendChild(productCard);
});
