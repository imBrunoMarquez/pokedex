import { useGetPokemonQueries } from '../../../hooks/usePokemon';
import { BaseList } from '../../../types/pokemon';
import { PokemonItem } from './pokemonItem';

type Props = {
	results: BaseList;
};

export const PokemonList = ({ results }: Props) => {
	const pokemonNames = results.results.map((result) => result.name);
	const pokemons = useGetPokemonQueries(pokemonNames);

	return (
		<div className="grid grid-cols-2 gap-5 px-5 py-3">
			{pokemons.map(({ data: { data: pokemon } = {} }) => {
				return pokemon && <PokemonItem pokemon={pokemon} key={pokemon.id} />;
			})}
		</div>
	);
};
