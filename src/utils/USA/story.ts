import { GameState } from './main';

export interface Option {
	id: number;
	text: string;
	requiredState?: (currentState: GameState) => boolean;
	setState: { [key: string]: any };
	nextText: number;
}

export const textNodes = [
	{
		id: 1,
		text: 'Congratulations! You have been elected to lead the United States of America, a nation at the forefront of global affairs during the Cold War.',
		options: [
			{
				id: 1,
				text: 'Embrace the responsibility and begin your journey as the leader of the free world.',
				setState: { nation: 'USA' },
				nextText: 2,
			},
			{
				id: 2,
				text: 'Decline the offer. The weight of leading a superpower is too much to bear.',
				setState: { nation: 'neutral' },
				nextText: 2,
			},
		] as Option[],
	},
	{
		id: 2,
		text: 'As you step into the Oval Office, you face your first major decision.',
		options: [
			{
				id: 1,
				text: 'Prioritize advancements in science and technology to strengthen the nation.',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USA',
				setState: { science: true },
				nextText: 3,
			},
			{
				id: 2,
				text: 'Focus on building a powerful military to ensure national security.',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USA',
				setState: { military: true },
				nextText: 3,
			},
			{
				id: 3,
				text: 'Strengthen the economy to enhance the prosperity of the American people.',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USA',
				setState: { economy: true },
				nextText: 3,
			},
		] as Option[],
	},
];
