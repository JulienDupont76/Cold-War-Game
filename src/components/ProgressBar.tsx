import { useEffect, useState } from 'react';
import * as Progress from '@radix-ui/react-progress';

type PropsProgressBar = {
	color: string;
	value: number;
};

const ProgressBar = (props: PropsProgressBar) => {
	const { color, value } = props;
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const timer = setTimeout(() => setProgress(value), 500);
		return () => clearTimeout(timer);
	}, [value]);

	return (
		<Progress.Root
			className='relative overflow-hidden bg-white/20 rounded-full w-[300px] h-[25px]'
			style={{
				transform: 'translateZ(0)',
			}}
			value={progress}
		>
			<Progress.Indicator
				className={`${
					color || 'bg-black'
				} w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]`}
				style={{ transform: `translateX(-${100 - progress}%)` }}
			/>
		</Progress.Root>
	);
};

export default ProgressBar;
