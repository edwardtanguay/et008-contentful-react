import { NavLink } from 'react-router-dom';

export const PageWelcome = () => {
	return (
		<>
			<p>This site shows how to fetch and display data and images from the <a target="_blank" href="https://www.contentful.com">Contentful CMS</a>.</p>

			<p>Analyze the code to see how to fetch Contentful data via <NavLink to="/booksWithRest">REST</NavLink> and via <NavLink to="/booksWithGraphql">GraphQL</NavLink></p>
		</>
	);
};
