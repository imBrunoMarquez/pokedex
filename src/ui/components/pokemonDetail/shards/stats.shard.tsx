import { Pokemon } from '../../../../types/pokemon';
import { titleCase } from '../../../../utils/formatter';
import { Bar } from './bar.shard';

interface StatsProps {
	pokemon: Pokemon;
}

export const Stats = ({ pokemon }: StatsProps) => {
	return (
		<section className="flex flex-col items-center">
			{pokemon.stats.map(({ stat, base_stat }, idx) => (
				<div key={idx} className="flex items-center justify-between mb-2 w-64">
					<p className="text-right pr-2 flex-shrink-0 w-28 truncate">{titleCase(stat?.name)}</p>
					<div className="flex items-center w-1/2">
						<p className="font-semibold mr-2">{base_stat}</p>
						<Bar base_stat={base_stat} />
					</div>
				</div>
			))}
		</section>
	);
};
