import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Navbar } from './ui/components/navbar';
import { About } from './ui/screens/about';
import { Home } from './ui/screens/home';

function App() {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes key={location.pathname}>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</AnimatePresence>
	);
}

export default App;
