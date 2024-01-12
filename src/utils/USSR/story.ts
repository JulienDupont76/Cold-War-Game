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
		text: 'Congratulations! You have been elected to lead the Union of Soviet Socialist Republics, a leading nation in world affairs during the Cold War.',
		options: [
			{
				id: 1,
				text: 'Embrace the responsibility and begin your journey as the leader of the free world.',
				setState: { nation: 'USSR', military: 10, science: 10, economy: -40 },
				nextText: 2,
			},
			{
				id: 2,
				text: 'Decline the offer. The weight of leading a superpower is too much to bear.',
				setState: { nation: 'USSR', military: -20, science: -30, economy: 35 },
				nextText: 2,
			},
		] as Option[],
	},
	{
		id: 2,
		text: 'Next decision',
		options: [
			{
				id: 1,
				text: 'Test 1',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USA',
				setState: { test: true },
				nextText: 3,
			},
			{
				id: 2,
				text: 'Test 2',
				requiredState: (currentState: GameState) =>
					currentState.nation === 'USSR',
				setState: { test: false },
				nextText: 3,
			},
		] as Option[],
	},
];
