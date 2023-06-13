import { Navbar } from '../../ui/components/navbar';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
	title: string;
	children: React.ReactNode;
}
export const Layout = ({ children, title }: LayoutProps) => {
	return (
		<div className="bg-rangoon-green">
			<Helmet>
				<title>{title} | PokeDex </title>
			</Helmet>
			<div className="layout">
				{children}
				<Navbar />
			</div>
		</div>
	);
};
