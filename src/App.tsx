import { Route, Routes, useLocation } from 'react-router-dom';
import { About, Home } from './ui/screens';
import { PokemonDetail } from './ui/components/pokemonDetail/pokemonDetails.core';

function App() {
	const location = useLocation();
	return (
		<Routes key={location.pathname}>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/pokemon/:name" element={<PokemonDetail />} />
		</Routes>
	);
}

export default App;
