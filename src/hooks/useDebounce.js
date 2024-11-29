import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
	const [debounceValue, setDebouncedValue] = useState(value);

	useEffect(() => {
    // 딜레이 설정
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

    // 값이 변하게 되면 설정된 딜레이시간을 없앰
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);
	return debounceValue;
};

export default useDebounce;
