import { Navbar } from '../../ui';
import { Helmet } from 'react-helmet-async';
import { motion as fmotion } from 'framer-motion';
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
			<div className="main-layout">
				<fmotion.main
					animate="enter"
					exit="exit"
					initial="initial"
					variants={{
						initial: { opacity: 0, y: 2 },
						enter: { opacity: 1, y: 0, transition: { duration: 0.2 } },
						exit: { opacity: 0, transition: { duration: 0.1 } },
					}}
				>
					{children}
				</fmotion.main>
				<Navbar />
			</div>
		</div>
	);
};
