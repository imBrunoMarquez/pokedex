import { Pokemon } from '../../../../types/pokemon';
import { HeaderInfo } from './headerInfo.shard';
import { BasicInfo } from './basicInfo.shard';
import { Menu } from './menu.shard';
import { useState } from 'react';
import { Stats } from './stats.shard';
import { Abilities } from './abilities.shard';

type Props = {
	pokemon: Pokemon;
};
export const DetailPokemonInfo = ({ pokemon }: Props) => {
	const [activeTab, setActiveTab] = useState('stats');
	return (
		<>
			<HeaderInfo pokemon={pokemon} />
			<BasicInfo pokemon={pokemon} />
			<div className="detail-container">
				<Menu activeTab={activeTab} setActiveTab={setActiveTab} />
				{activeTab === 'stats' && <Stats pokemon={pokemon} />}
				{activeTab === 'abilities' && <Abilities pokemon={pokemon} />}
			</div>
		</>
	);
};
