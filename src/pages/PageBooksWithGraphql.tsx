export const PageBooksWithGraphql = () => {
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
			'https://graphql.contentful.com/content/v1/spaces/ksa3691cd4ua?access_token=HybRmB8-wshplsjKMC_-UWyHW9xR82Zc8UiFL6jg518',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ query }),
			}
		);
		const _books = await response.json();
	})();

	return (
		<div className="page pageBooksWithGraphql">
			<p>This is the BooksWithGraphql page.</p>
		</div>
	);
};
