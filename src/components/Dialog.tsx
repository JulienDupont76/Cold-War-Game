import TypeWriter from './TypeWriter';
import { Option } from '../utils/USA/story';

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
				{options.map((option) => (
					<button
						className='btn'
						key={option.id}
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
