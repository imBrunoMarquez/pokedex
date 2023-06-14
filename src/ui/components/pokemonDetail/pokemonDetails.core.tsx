import { Layout } from '../../../components';
import { DetailPokemonInfo } from './shards/detailPokemonInfo.shard';
import { useGetPokemon } from '../../../hooks/usePokemon';
import { titleCase } from '../../../utils/formatter';
import { useParams } from 'react-router-dom';

export const PokemonDetail = () => {
	const { name } = useParams();
	const { data: { data: pokemon } = {}, isLoading } = useGetPokemon(name || '');
	return (
		<Layout title={titleCase(name || '')}>
			{isLoading && <p className="text-center">Loading...</p>}
			{pokemon && <DetailPokemonInfo pokemon={pokemon} />}
		</Layout>
	);
};
