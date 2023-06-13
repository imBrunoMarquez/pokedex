import { Layout } from '../../components/layout/layout';
import { PokemonList } from '../components/pokemonList/pokemonList';
import { useGetPokemonList } from '../../hooks/usePokemon';
import InfiniteScroll from 'react-infinite-scroll-component';

export const Home = () => {
	const { data, fetchNextPage, hasNextPage } = useGetPokemonList();
	return (
		<Layout title="Home">
			{data && hasNextPage && (
				<InfiniteScroll
					dataLength={data?.pages.length}
					next={() => {
						fetchNextPage();
					}}
					hasMore={hasNextPage}
					loader={<p className="text-center text-white">Loading...</p>}
					endMessage={
						<p style={{ textAlign: 'center' }}>
							<b>Yay! You have seen it all</b>
						</p>
					}
				>
					{data?.pages.map((page, idx) => (
						<PokemonList results={page.data} key={idx} />
					))}
				</InfiniteScroll>
			)}
		</Layout>
	);
};
