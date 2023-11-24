import TypeWriter from './TypeWriter';
import { Option } from '../utils/story';

type DialogProps = {
	text: string | undefined;
	options: Option[];
	handleOptionClick: (option: Option) => void;
};

const Dialog = (props: DialogProps) => {
	const { text, options, handleOptionClick } = props;

	return (
		<div className='container'>
			<TypeWriter text={text} delay={80} />
			<div id='option-buttons' className='btn-grid'>
				{options.map((option, index) => (
					<button
						className='btn'
						key={index}
						onClick={() => handleOptionClick(option)}
					>
						{option.text}
					</button>
				))}
			</div>
		</div>
	);
};
export default Dialog;
