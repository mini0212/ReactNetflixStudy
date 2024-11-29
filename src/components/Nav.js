import React, { useEffect, useState } from 'react';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
	const [show, handleShow] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const navigate = useNavigate();

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 50) {
				handleShow(true);
			} else {
				handleShow(false);
			}
		});
		return () => {
			window.removeEventListener('scroll', () => {});
		};
	}, []);

	const handleChange = (e) => {
		setSearchValue(e.target.value);
		// 해당 페이지로 이동
		// 텍스트 입력될 때마다 값 추가됨을 확인할 수 있음
		navigate(`/search?q=${e.target.value}`);
	};

	return (
		<nav className={`nav ${show && 'nav__black'}`}>
			<img
				alt='Netflix logo'
				src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
				className='nav__logo'
				onClick={() => window.location.reload()}
			/>
			<input
				value={searchValue}
				onChange={handleChange}
				className='nav__input'
				type='text'
				placeholder='영화를 검색해주세요'
			/>
			<img
				alt='User logged'
				src='http://via.placeholder.com/300x300'
				className='nav__avatar'
			/>
		</nav>
	);
};

export default Nav;
