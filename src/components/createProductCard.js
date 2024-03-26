export function createProductCard(data) {
	const template = document.getElementById('card-template');
	const card = template.content.cloneNode(true);

	const cardImage = card.getElementById('image');
	const thumbnails = card.getElementById('card-thumbnails');
	const title = card.getElementById('title');
	const description = card.getElementById('description');
	const price = card.getElementById('price');
	const priceOld = card.getElementById('priceOld');
	const quantity = card.getElementById('quantity');
	const addToCartButton = card.querySelector('.add-to-cart-btn');
	const cartCounter = card.getElementById('cart-counter');

	const images = JSON.parse(data.images);

	cardImage.src = images[0].img;

	images.forEach((image) => {
		const thumbnail = document.createElement('img');
		thumbnail.className = 'thumbnail';
		thumbnail.src = image.img;
		thumbnail.alt = 'Product';

		thumbnail.addEventListener('click', () => {
			cardImage.src = image.img;
		});
		thumbnails.appendChild(thumbnail);
	});

	title.textContent = data.title;
	description.textContent = data.descr;
	price.textContent = `Price: ${data.price} $`;
	priceOld.textContent = `Price without discount: ${data.priceold} $`;
	quantity.textContent = `In stock: ${data.quantity}`;

	let cartItemsCount = 0;

	addToCartButton.disabled = data.quantity === 0;
	cartCounter.textContent = cartItemsCount;
	addToCartButton.addEventListener('click', () => {
		if (cartItemsCount < data.quantity) {
			cartItemsCount++;
			cartCounter.textContent = cartItemsCount;
		}
	});

	return card;
}
