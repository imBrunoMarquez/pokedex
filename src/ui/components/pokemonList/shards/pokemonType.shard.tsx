import React from 'react';
import { icon } from '../../../../assets/theme';
import { Type } from '../../../../types/pokemon';
import { titleCase } from '../../../../utils/formatter';
import clsx from 'clsx';

type Props = {
	types: Type[];
	isShow?: boolean;
};
``;
export const PokemonType = ({ types, isShow }: Props) => {
	return (
		<div className="mt-2 mb-4 flex items-center gap-2">
			{types.map((type) => {
				const iconType = icon.type[type.type.name];
				return (
					<React.Fragment key={type.slot}>
						<div
							key={type.slot}
							className={clsx(
								'flex items-center gap-2 rounded-full border py-2 px-3 text-xs font-semibold',
								type.type.name === 'fire' && `border-fire text-fire`,
								type.type.name === 'water' && `border-water text-water`,
								type.type.name === 'grass' && `border-grass text-grass`,
								type.type.name === 'poison' && `border-poison text-poison`,
								type.type.name === 'normal' && `border-normal text-normal`,
								type.type.name === 'electric' && `border-electric text-electric`,
								type.type.name === 'ice' && `border-ice text-ice`,
								type.type.name === 'fighting' && `border-fighting text-fighting`,
								type.type.name === 'ground' && `border-ground text-ground`,
								type.type.name === 'flying' && `border-flying text-flying`,
								type.type.name === 'psychic' && `border-psychic text-psychic`,
								type.type.name === 'bug' && `border-bug text-bug`,
								type.type.name === 'rock' && `border-rock text-rock`,
								type.type.name === 'ghost' && `border-ghost text-ghost`,
								type.type.name === 'dark' && `border-dark text-dark`,
								type.type.name === 'dragon' && `border-dragon text-dragon`,
								type.type.name === 'steel' && `border-steel text-steel`,
								type.type.name === 'fairy' && `border-fairy text-fairy`,
								type.type.name === 'unkown' && `border-unkown text-unkown`
							)}
						>
							<p className={`${isShow ? 'block' : 'hidden sm:block'}`}>{titleCase(type.type.name)}</p>
							{<iconType.icon />}
						</div>
					</React.Fragment>
				);
			})}
		</div>
	);
};
