import { json } from '@sveltejs/kit';

export async function POST({ request }) {
	const requestBody = request.json();

	console.log(requestBody);

	// business logic here
	// - send email to customer

	return json({ message: 'Thank you for your purchase.' });
}
