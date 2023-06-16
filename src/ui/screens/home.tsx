import { Layout, PokemonList } from '../components';
import { useGetPokemonList } from '../../hooks/usePokemon';
import InfiniteScroll from 'react-infinite-scroll-component';

export const Home = () => {
	const { data, fetchNextPage, hasNextPage, isLoading, isSuccess } = useGetPokemonList();

	console.log('### data', data);
	return (
		<Layout title="Home">
			{!isLoading && isSuccess && data && hasNextPage && (
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
					{!isLoading && data?.pages.map((page, idx) => <PokemonList results={page.data} key={idx} />)}
				</InfiniteScroll>
			)}
		</Layout>
	);
};
