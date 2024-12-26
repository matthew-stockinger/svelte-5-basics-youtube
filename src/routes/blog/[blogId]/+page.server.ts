import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	let blogId: string = params.blogId;

	let articles = [
		{ id: '0', text: 'This is article one' },
		{ id: '1', text: 'This is article two' },
		{ id: '2', text: 'This is article three' }
	];

	let foundArticle = articles.find((article) => article.id === blogId);
  
  if (foundArticle) {
    return {post: foundArticle.text};
  } else {
    throw error(404, 'Article not found');
  }
};
