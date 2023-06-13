import { Pokemon } from '../../../types/pokemon';
import { titleCase } from '../../../utils/formatter';
import { PokemonType } from '../pokemonCard/pokemonType';
import { PokemonMeasurement } from './pokemonMeasurement';

interface BasicInfoProps {
	pokemon: Pokemon;
}
export const BasicInfo = ({ pokemon }: BasicInfoProps) => {
	return (
		<div className="flex items-center flex-col z-20 relative top-5">
			<img
				width={200}
				height={200}
				className="mx-auto"
				src={`https://cdn.statically.io/gh/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif`}
				alt="pokemon gif"
			/>
			<h1 className="my-5 text-center text-white">{titleCase(pokemon.name)}</h1>
			<PokemonMeasurement pokemon={pokemon} />
			<PokemonType types={pokemon.types} isShow />
		</div>
	);
};
