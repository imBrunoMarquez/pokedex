import { useGetPokemon } from '../../../hooks/usePokemon';
import { titleCase } from '../../../utils/formatter';
import { useParams } from 'react-router-dom';
import { Layout } from '..';
import { useState } from 'react';
import { PokemonDetailsShards } from './shards';

export const PokemonDetail = () => {
	const { name } = useParams();
	const { data: { data: pokemon } = {}, isLoading } = useGetPokemon(name || '');
	const [activeTab, setActiveTab] = useState('stats');

	return (
		<Layout title={titleCase(name || '')}>
			{isLoading ? (
				<p className="text-center">Loading...</p>
			) : (
				pokemon && (
					<>
						<PokemonDetailsShards.HeaderInfo pokemon={pokemon} />
						<PokemonDetailsShards.BlurryGradientAnimate types={pokemon.types} />
						<PokemonDetailsShards.BasicInfo pokemon={pokemon} />
						<div className="detail-container">
							<PokemonDetailsShards.Menu activeTab={activeTab} setActiveTab={setActiveTab} />
							{activeTab === 'stats' && <PokemonDetailsShards.Stats pokemon={pokemon} />}
							{activeTab === 'abilities' && <PokemonDetailsShards.Abilities pokemon={pokemon} />}
						</div>
					</>
				)
			)}
		</Layout>
	);
};
