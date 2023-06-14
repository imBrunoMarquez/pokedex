import { Pokemon } from '../../../../types/pokemon';
import { formattedId } from '../../../../utils/formatter';
import { AiOutlineLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

interface HeaderInfoProps {
	pokemon: Pokemon;
}

export const HeaderInfo = ({ pokemon }: HeaderInfoProps) => {
	const navigate = useNavigate();
	return (
		<div className="relative flex w-full items-center justify-between px-10 pt-7 text-white z-50">
			<button
				className="hover:bg-neutral-800 p-2 transition-all rounded-md"
				onClick={() => {
					navigate(-1);
				}}
			>
				<AiOutlineLeft className="text-2xl font-semibold" />
			</button>
			<p className="text-xl font-semibold">#{formattedId(pokemon.id)}</p>
		</div>
	);
};
