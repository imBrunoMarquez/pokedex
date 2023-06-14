import { Layout } from '../components';

export const About = () => {
	return (
		<Layout title="About">
			<div className="flex flex-col space-y-3 min-h-screen items-center  pt-20 text-quill-grey px-60">
				<img
					className="mx-auto w-36"
					src="https://gifdb.com/images/high/gengar-happy-laughing-dtuzsp3h0hv49d16.gif"
					alt="gengar laughing gif"
				/>
				<div className="relative bottom-0 space-y-2 px-7 text-center">
					<p>
						A pokedex app built with react ands typescript, made by Bruno Marquez and Alexandre Gonçalves.
					</p>

					<p>
						The source code can be found{' '}
						<a
							target={'_blank'}
							className="font-bold text-purple-500"
							href="https://github.com/imBrunoMarquez/pokedex"
						>
							here
						</a>
						.
					</p>

					<p>
						2023 Pokémon. © 1995–2023 Nintendo/Creatures Inc./GAME FREAK inc. Pokémon, Pokémon character
						names, Nintendo Switch, Nintendo 3DS, Nintendo DS, Wii, Wii U, and WiiWare are trademarks of
						Nintendo. The YouTube logo is a trademark of Google Inc. Other trademarks are the property of
						their respective owners. Distribution in any form and any channels now known or in the future of
						derivative works based on the copyrighted property trademarks, service marks, trade names and
						other proprietary property (Fan Art) of The Pokémon Company International, Inc., its affiliates
						and licensors (Pokémon) constitutes a royalty-free, non-exclusive, irrevocable, transferable,
						sub-licensable, worldwide license from the Fan Art's creator to Pokémon to use, transmit, copy,
						modify, and display Fan Art (and its derivatives) for any purpose. No further consideration or
						compensation of any kind will be given for any Fan Art. Fan Art creator gives up any claims that
						the use of the Fan Art violates any of their rights, including moral rights, privacy rights,
						proprietary rights publicity rights, rights to credit for material or ideas or any other right,
						including the right to approve the way such material is used. In no uncertain terms, does
						Pokémon's use of Fan Art constitute a grant to Fan Art's creator to use the Pokémon intellectual
						property or Fan Art beyond a personal, noncommercial home use.
					</p>
				</div>
			</div>
		</Layout>
	);
};
