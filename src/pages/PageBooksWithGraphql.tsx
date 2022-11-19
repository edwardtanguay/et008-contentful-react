export const PageBooksWithGraphql = () => {

	const space = import.meta.env.VITE_SPACE_ID;
	const accessToken = import.meta.env.VITE_ACCESS_TOKEN;
	const url = `https://graphql.contentful.com/content/v1/spaces/${space}?access_token=${accessToken}`;

	const query = `
		{
			bookCollection {
				items {
				title
				description
					bookImage {
						url
					}
				}
			}
		}	
	`;
	(async () => {
		const response = await fetch(
			url,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ query }),
			}
		);
		const _books = await response.json();
		console.log(_books);
	})();

	return (
		<div className="page pageBooksWithGraphql">
			<p>This is the BooksWithGraphql page.</p>
		</div>
	);
};
