import axios from '../../api/axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
	const { movieId } = useParams();
	const [movie, setMovie] = useState({});

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(`/movie/${movieId}`); // instance에서 baseURL을 생성해줬기 때문에 https://~ 안해도 됨
			setMovie(request.data);
		}
		fetchData();
	}, [movieId]);

	if (!movie) return <div>...loading</div>;

	return (
		<section>
			<img
				className='modal__poster-img'
				src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
				alt='modal__poster-img'
			/>
		</section>
	);
};

export default DetailPage;
