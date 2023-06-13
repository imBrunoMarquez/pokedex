import { borderColor, textColor, icon } from '../../../../assets/theme';
import { Type } from '../../../../types/pokemon';
import { titleCase } from '../../../../utils/formatter';
import React from 'react';

type Props = {
	types: Type[];
	isShow?: boolean;
};

export const PokemonType = ({ types, isShow }: Props) => {
	return (
		<div className="mt-2 mb-4 flex items-center gap-2">
			{types.map((type) => {
				const iconType = icon.type[type.type.name];
				return (
					<React.Fragment key={type.slot}>
						<div
							key={type.slot}
							className={`flex items-center gap-2 rounded-full border border-${type.type.name} py-2 px-3 text-xs font-semibold text-${type.type.name}`}
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
