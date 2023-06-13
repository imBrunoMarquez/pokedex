import { CgInfo, CgPokemon, CgSearch } from 'react-icons/cg';
import { NavbarItem } from './navbarItem';

const links = [
	{
		text: 'My Pokemon',
		//TODO ADD URL FOR ROUTING
		url: '',
		icon: <CgPokemon />,
	},
	{
		text: 'Pokedex',
		url: '/',
		icon: <CgSearch />,
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
