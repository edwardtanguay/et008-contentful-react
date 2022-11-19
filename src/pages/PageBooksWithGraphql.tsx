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

	window
		.fetch(
			'https://graphql.contentful.com/content/v1/spaces/ksa3691cd4ua?access_token=HybRmB8-wshplsjKMC_-UWyHW9xR82Zc8UiFL6jg518',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ query }),
			}
		)
		.then((response) => response.json())
		.then((json) => console.log(json.data));
	return (
		<div className="page pageBooksWithGraphql">
			<p>This is the BooksWithGraphql page.</p>
		</div>
	);
};
