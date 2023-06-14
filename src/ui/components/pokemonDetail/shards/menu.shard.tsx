import { titleCase } from '../../../../utils/formatter';
interface MenuProps {
	activeTab: string;
	setActiveTab: (tab: string) => void;
}

export const Menu = ({ activeTab, setActiveTab }: MenuProps) => {
	const buttons = [
		{
			name: 'stats',
		},
		{
			name: 'abilities',
		},
	];
	return (
		<div className="mb-5  flex items-center gap-5 text-white justify-center">
			{buttons.map((button) => (
				<button
					className={`rounded-full px-5 py-2 ${
						activeTab === button.name
							? ' bg-white font-semibold text-black'
							: 'transition-all hover:bg-neutral-800 hover:text-white'
					}  `}
					key={button.name}
					onClick={() => {
						setActiveTab(button.name);
					}}
				>
					{titleCase(button.name)}
				</button>
			))}
		</div>
	);
};
