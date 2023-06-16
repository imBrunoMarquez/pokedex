import { Pokemon } from '../../../../types/pokemon';
import { formattedId, formattedStatically, titleCase } from '../../../../utils/formatter';
import { Link } from 'react-router-dom';
import { PokemonType } from './pokemonType.shard';
import { Type } from '../../../../types/pokemon';
import clsx from 'clsx';

type Props = {
	pokemon: Pokemon;
	types: Type[];
};

export const PokemonItem = ({ pokemon, types }: Props) => {
	const firstType = types[0]?.type.name;
	const secondType = types[1]?.type.name;

	return (
		<article className="relative  group">
			{types.length > 1 && (
				<div
					className={clsx(
						'rounded-lg absolute blur-sm -inset-0.5 group-hover:opacity-100 duration-200 opacity-60 animate-tilt',
						`bg-gradient-to-r from-${firstType} to-${secondType}`
					)}
				></div>
			)}

			{types.length === 1 && (
				<div
					className={clsx(
						'rounded-lg absolute blur-sm -inset-0.5 group-hover:opacity-100 duration-200 opacity-60 animate-tilt',
						`bg-gradient-to-r from-${firstType} to-${firstType}`
					)}
				></div>
			)}

			<div className={`relative rounded-lg bg-dark-jungle-green/90 text-slate-200`}>
				<Link
					to={`/pokemon/${pokemon.name}`}
					key={pokemon.id}
					className={`flex w-full flex-col items-center px-4`}
				>
					<img
						width={100}
						height={100}
						src={formattedStatically(pokemon.sprites.front_default)}
						alt="pokemon"
					/>
					<p className="text-xs text-gray-300">#{formattedId(pokemon.id)}</p>
					<p className="font-semibold">{titleCase(pokemon.name)}</p>
					<PokemonType types={pokemon.types} />
				</Link>
			</div>
		</article>
	);
};
