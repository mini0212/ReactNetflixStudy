import React from 'react';
// ../../ -> 폴더를 2번 나감(경로 지정)) -> 해당 폴더로 이동
import Banner from '../../components/Banner';
import Row from '../../components/Row';
import requests from '../../api/requests';

const MainPage = () => {
	return (
		<div className='App'>
			<Banner />
			<Row
				title='NETFLIX ORIGINALS'
				id='NO'
				fetchUrl={requests.fetchNetfilxOriginal}
				isLargeRow
			/>
			<Row title='Trending Now' id='TN' fetchUrl={requests.fetchTrending} />
			<Row title='Top Rated' id='TR' fetchUrl={requests.fetchTopRated} />
			<Row
				title='Action Movies'
				id='AM'
				fetchUrl={requests.fetchActionMovies}
			/>
			<Row
				title='Comedy Movies'
				id='CM'
				fetchUrl={requests.fetchComedyMovies}
			/>
		</div>
	);
};

export default MainPage;
