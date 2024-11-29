import React, { useEffect } from 'react';

// 클릭하는 영역이 모달의 안쪽인지, 바깥쪽인지 판단해서 처리
const useOnClickOutside = (ref, handler) => {
	useEffect(() => {
    const listener = (event) => {
      console.log('ref', ref.current);
      // 영역이 아니라면 return으로 함수 종료
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      } 
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
		return () => { 
      // 컴포넌트 없앨 때 리스너도 함께 없앰
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
	}, [ref, handler]);
	return <div></div>;
};

export default useOnClickOutside;
