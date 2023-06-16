import {
	GiFluffyWing,
	GiFizzingFlask,
	GiFallingRocks,
	GiElectric,
	GiFairy,
	GiAnvil,
	GiPsychicWaves,
	GiGroundbreaker,
	GiGoldShell,
} from 'react-icons/gi';
import { FaFire, FaWater, FaLeaf, FaBug, FaGhost, FaDragon, FaFistRaised, FaMoon, FaQuestion } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { Type } from '../../types/pokemon';

interface Color {
	types: {
		[key: string]: string;
	};
}

export const bgColorOne: Color = {
	types: {
		normal: 'from-[#A8A878]/80',
		fire: 'from-[#F08030]/80',
		water: 'from-[#6890F0]/80',
		grass: 'from-[#78C850]/80',
		electric: 'from-[#F8D030]/80',
		ice: 'from-[#98D8D8]/80',
		fighting: 'from-[#C03028]/80',
		poison: 'from-[#A040A0]/80',
		ground: 'from-[#E0C068]/80',
		flying: 'from-[#A890F0]/80',
		psychic: 'from-[#F85888]/80',
		bug: 'from-[#A8B820]/80',
		rock: 'from-[#B8A038]/80',
		ghost: 'from-[#705898]/80',
		dark: 'from-[#705848]/80',
		dragon: 'from-[#7038F8]/80',
		steel: 'from-[#B8B8D0]/80',
		fairy: 'from-[#905F63]/80',
		unkown: 'from-[#6AA596]/80',
	},
};

export const bgColorTwo: Color = {
	types: {
		normal: 'to-[#A8A878]/80',
		fire: 'to-[#F08030]/80',
		water: 'to-[#6890F0]/80',
		grass: 'to-[#78C850]/80',
		electric: 'to-[#F8D030]/80',
		ice: 'to-[#98D8D8]/80',
		fighting: 'to-[#C03028]/80',
		poison: 'to-[#A040A0]/80',
		ground: 'to-[#E0C068]/80',
		flying: 'to-[#A890F0]/80',
		psychic: 'to-[#F85888]/80',
		bug: 'to-[#A8B820]/80',
		rock: 'to-[#B8A038]/80',
		ghost: 'to-[#705898]/80',
		dark: 'to-[#705848]/80',
		dragon: 'to-[#7038F8]/80',
		steel: 'to-[#B8B8D0]/80',
		fairy: 'to-[#905F63]/80',
		unkown: 'to-[#6AA596]/80',
	},
};

export const blurry: Color = {
	types: {
		grass: 'bg-green-500',
		fire: 'bg-[#F08030]',
		water: 'bg-blue-500',
		electric: 'bg-yellow-500',
		ice: 'bg-[#98D8D8]',
		normal: 'bg-[#A8A878]',
		fighting: 'bg-[#C03028]',
		poison: 'bg-[#A040A0]',
		ground: 'bg-[#E0C068]',
		flying: 'bg-[#A890F0]',
		psychic: 'bg-[#F85888]',
		bug: 'bg-[#A8B820]',
		rock: 'bg-[#B8A038]',
		ghost: 'bg-[#705898]',
		dark: 'bg-[#705848]',
		dragon: 'bg-[#7038F8]',
		steel: 'bg-[#B8B8D0]',
		fairy: 'bg-[#905F63]',
		unkown: 'bg-[#6AA596]',
	},
};

type Icon = {
	type: {
		[key: string]: {
			icon: IconType;
		};
	};
};

export const icon: Icon = {
	type: {
		normal: {
			icon: GiGoldShell,
		},
		fire: {
			icon: FaFire,
		},
		water: {
			icon: FaWater,
		},
		grass: {
			icon: FaLeaf,
		},
		electric: {
			icon: GiElectric,
		},
		ice: {
			icon: GiFluffyWing,
		},
		fighting: {
			icon: FaFistRaised,
		},
		poison: {
			icon: GiFizzingFlask,
		},
		ground: {
			icon: GiGroundbreaker,
		},
		flying: {
			icon: GiFluffyWing,
		},
		psychic: {
			icon: GiPsychicWaves,
		},
		bug: {
			icon: FaBug,
		},
		rock: {
			icon: GiFallingRocks,
		},
		ghost: {
			icon: FaGhost,
		},
		dark: {
			icon: FaMoon,
		},
		dragon: {
			icon: FaDragon,
		},
		steel: {
			icon: GiAnvil,
		},
		fairy: {
			icon: GiFairy,
		},
		unkown: {
			icon: FaQuestion,
		},
	},
};

export const getGradientBackground = (types: Type[]) => {
	const typeNames = types.map((type) => type.type.name);
	return `bg-gradient-to-r ${
		typeNames.length === 1
			? `${bgColorOne.types[typeNames[0]]} ${bgColorTwo.types[typeNames[0]]}`
			: `${bgColorOne.types[typeNames[0]]} ${bgColorTwo.types[typeNames[1]]}`
	}`;
};

export const getBluryBackground = (types: Type[]) => {
	const typeNames = types.map((type) => type.type.name);
	return [
		blurry.types[typeNames[0]],
		typeNames.length === 1 ? blurry.types[typeNames[0]] : blurry.types[typeNames[1]],
	];
};
