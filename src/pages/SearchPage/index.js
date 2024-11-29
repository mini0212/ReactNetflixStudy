import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import './SearchPage.css';
import useDebounce from '../../hooks/useDebounce';

const SearchPage = () => {
	const navigate = useNavigate();
	const [searchResults, setSearchResults] = useState([]);

	const useQuery = () => {
		return new URLSearchParams(useLocation().search);
	};

	let query = useQuery();
	const searchTerm = query.get('q');
	const debouncedSearchTerm = useDebounce(searchTerm, 500);
	console.log(debouncedSearchTerm);

	useEffect(() => {
		if (debouncedSearchTerm) {
			fetchSearchMovie(debouncedSearchTerm);
		}
		// searchTerm이 변할때 마다 요청을 하기 위해 넣어줌
	}, [debouncedSearchTerm]);

	const fetchSearchMovie = async (searchTerm) => {
		try {
			const request = await axios.get(
				`/search/multi?include_adult=false&query=${searchTerm}`
			);
			console.log(request);
			setSearchResults(request.data.results);
		} catch (error) {
			console.log('error', error);
		}
	};

	const renderSearchResults = () => {
		return searchResults.length > 0 ? (
			<section className='search-container'>
				{searchResults.map((movie) => {
					if (movie.backdrop_path !== null && movie.modia_type !== 'person') {
						const movieImageUrl =
							'https://image.tmdb.org/t/p/w500' + movie.backdrop_path;
						return (
							<div className='movie' key={movie.id}>
								<div onClick={() => navigate(`/${movie.id}`)} className='movie__column-poster'>
									<img src={movieImageUrl} alt='' className='movie__poster' />
								</div>
							</div>
						);
					}
				})}
			</section>
		) : (
			<section className='no-results'>
				<div className='no-results__text'>
					<p>
						Your search for "{debouncedSearchTerm}" did not have any matches.
					</p>
				</div>
			</section>
		);
	};

	return renderSearchResults();
};

export default SearchPage;
