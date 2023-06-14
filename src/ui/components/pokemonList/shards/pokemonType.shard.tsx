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
								type.type.name === 'poison' && `border-poison text-poison`
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
