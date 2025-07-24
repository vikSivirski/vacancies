import { useSelector, useDispatch } from 'react-redux';
import { Button, Title } from '@mantine/core';

import { increment, decrement } from '../../store/slices/counterSlice';

const Counter = () => {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<>
			<Title>{count}</Title>
			<Button onClick={() => dispatch(increment())}>+1</Button>
			<Button color="red" onClick={() => dispatch(decrement())}>
				-1
			</Button>
		</>
	);
};

export default Counter;
