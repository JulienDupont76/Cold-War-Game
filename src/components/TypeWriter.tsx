import { useEffect, useState } from 'react';

type TypeWriterProps = {
	text?: string;
	delay: number;
	onComplete?: () => void;
};

const TypeWriter = (props: TypeWriterProps) => {
	const { text, delay, onComplete } = props;

	const [currentText, setCurrentText] = useState<string>('');
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	useEffect(() => {
		if (text !== undefined && currentIndex < text.length) {
			const timeout = setTimeout(() => {
				setCurrentText((prevText) => prevText + text[currentIndex]);
				setCurrentIndex((prevIndex) => prevIndex + 1);
			}, delay);

			return () => clearTimeout(timeout);
		} else if (onComplete) {
			onComplete();
		}
	}, [currentIndex, delay, text, onComplete]);

	useEffect(() => {
		setCurrentText('');
		setCurrentIndex(0);
	}, [text]);

	const lines = currentText.split('\n');

	return (
		<div>
			{lines.map((line, index) => (
				<div key={index}>{line}</div>
			))}
		</div>
	);
};
export default TypeWriter;
