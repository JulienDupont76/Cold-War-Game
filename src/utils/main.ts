import { textNodes } from './story';

let state = {};

export const showTextNode = (textNodeIndex: number) => {
	const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
	const filteredOptions = textNode?.options.filter((option) =>
		showOption(option)
	);
	return { text: textNode?.text, options: filteredOptions };
};

const showOption = (option) => {
	return option.requiredState == null || option.requiredState(state);
};

export const selectOptions = (option) => {
	const nextTextNodeId = option.nextText;
	state = Object.assign(state, option.setState);
	return nextTextNodeId;
};
