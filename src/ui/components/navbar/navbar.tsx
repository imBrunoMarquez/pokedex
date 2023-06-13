import { CgInfo, CgPokemon } from 'react-icons/cg';
import { NavbarItem } from './navbarItem';

const links = [
	{
		text: 'Pokedex',
		url: '/',
		icon: <CgPokemon />,
	},

	{
		text: 'About',
		url: '/about',
		icon: <CgInfo />,
	},
];

export const Navbar = () => {
	return (
		<nav className="menu-navigation">
			{links.map((item, index) => (
				<NavbarItem key={index} {...item} isActive={location.pathname === item.url} />
			))}
		</nav>
	);
};
