import { Type } from '../../../../types/pokemon';
import clsx from 'clsx';

interface BlurryGradientProps {
	types: Type[];
}
export const BlurryGradientAnimate = ({ types }: BlurryGradientProps) => {
	return (
		<div className="absolute z-10 mx-auto -top-1 inset-x-0">
			{types.map((type) => (
				<div
					key={type.slot}
					className={clsx(
						'animation-delay-200 top-28 left-8 relative mx-auto h-48 w-48 animate-blob rounded-full bg-opacity-70 mix-blend-multiply blur-3xl filter',
						type.type.name === 'fire' && `bg-gradient-to-r from-fire to-fire`,
						type.type.name === 'water' && `bg-gradient-to-r from-water to-water`,
						type.type.name === 'grass' && `bg-gradient-to-r from-grass to-grass`,
						type.type.name === 'poison' && `bg-gradient-to-r from-poison to-poison`,
						type.type.name === 'normal' && `bg-gradient-to-r from-normal to-normal`,
						type.type.name === 'electric' && `bg-gradient-to-r from-electric to-electric`,
						type.type.name === 'ice' && `bg-gradient-to-r from-ice to-ice`,
						type.type.name === 'fighting' && `bg-gradient-to-r from-fighting to-fighting`,
						type.type.name === 'ground' && `bg-gradient-to-r from-ground to-ground`,
						type.type.name === 'flying' && `bg-gradient-to-r from-flying to-flying`,
						type.type.name === 'psychic' && `bg-gradient-to-r from-psychic to-psychic`,
						type.type.name === 'bug' && `bg-gradient-to-r from-bug to-bug`,
						type.type.name === 'rock' && `bg-gradient-to-r from-rock to-rock`,
						type.type.name === 'ghost' && `bg-gradient-to-r from-ghost to-ghost`,
						type.type.name === 'dark' && `bg-gradient-to-r from-dark to-dark`,
						type.type.name === 'dragon' && `bg-gradient-to-r from-dragon to-dragon`,
						type.type.name === 'steel' && `bg-gradient-to-r from-steel to-steel`,
						type.type.name === 'fairy' && `bg-gradient-to-r from-fairy to-fairy`,
						type.type.name === 'unkown' && `bg-gradient-to-r from-unkown to-unkown`
					)}
				></div>
			))}
		</div>
	);
};
