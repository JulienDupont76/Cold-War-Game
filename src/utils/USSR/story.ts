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
		text: '1945 the second world war just ended. You receives a call from your secretary: \n “Hello Sir, we just got informed that the USA has begun a race for science, weaponry, and space. Do you wish to do anything?”',
		options: [
			{
				id: 1,
				text: 'Embrace the challenge and lead your nation into a new era of scientific and military dominance.',
				setState: {
					nation: 'USSR',
				},
				nextText: 2,
			},
			{
				id: 2,
				text: 'Decline the offer. The weight of leading a superpower is too much to bear.',
				nextText: 3,
			},
		] as Option[],
	},
	{
		id: 2,
		text: 'Message received sir, let’s beat the hell out of them!',
		options: [
			{
				id: 1,
				text: 'Next',
				nextText: 4,
			},
		] as Option[],
	},
	{
		id: 3,
		text: 'In 1960, the USA has taken over space, weaponry and science, and your comprehension of any of these domains is so far from theirs, you feel that you have lost something… 2010: You have lost your country because you were too pacific.',
		options: [
			{
				id: 1,
				text: 'Next',
				setState: {
					military: -50,
					science: -50,
					economy: -50,
					culture: -50,
				},
				nextText: 4,
			},
		] as Option[],
	},
	{
		id: 4,
		text: 'Your wife: “Hello my darling, what would you like to have for dinner tonight?”',
		options: [
			{
				id: 1,
				text: 'Vodka',
				nextText: 5,
			},
			{
				id: 2,
				text: 'Hamburger',
				nextText: 5,
			},
		] as Option[],
	},
	{
		id: 5,
		text: 'Okay, dinner’s at 7PM',
		options: [
			{
				id: 1,
				text: 'Next',
				nextText: 6,
			},
		] as Option[],
	},
	{
		id: 6,
		text: 'Sir, we can send a spy to get information from the other party, would you like to proceed with this action?',
		options: [
			{
				id: 1,
				text: 'Yes',
				nextText: 7,
			},
			{
				id: 2,
				text: 'No',
				nextText: 8,
			},
		] as Option[],
	},
	{
		id: 7,
		text: 'Perfect, we will have access to a good amount of information coming from the other side.',
		options: [
			{
				id: 1,
				text: 'Next',
				nextText: 9,
			},
		] as Option[],
	},
	{
		id: 8,
		text: 'Roger that, we will make do with what we have.',
		options: [
			{
				id: 1,
				text: 'Next',
				nextText: 9,
			},
		] as Option[],
	},
	{
		id: 9,
		text: '1949: Comrade Leader, our scientists have successfully tested our first atomic bomb. The world now recognizes our nuclear capabilities. What action do you propose to solidify our position on the global stage?',
		options: [
			{
				id: 1,
				text: 'We should test it out!',
				setState: { military: 15, science: 10, culture: -15 },
				nextText: 10,
			},
			{
				id: 2,
				text: 'Let’s destroy it, it’s unethical.',
				nextText: 10,
				setState: { military: -15, science: -10, culture: 15 },
			},
		] as Option[],
	},
	{
		id: 10,
		text: '1950: Sir, there’s this country: Korea, we can try and invade them with the help of China!',
		options: [
			{
				id: 1,
				text: "Let's go to war!",
				setState: { military: -10, culture: -10, economy: -10 },
				nextText: 11,
			},
			{
				id: 2,
				text: "It's not the right priority right now.",
				nextText: 11,
				setState: { military: -5, culture: 10, economy: 15, science: -5 },
			},
		] as Option[],
	},
	{
		id: 11,
		text: '1955: Supreme leader, we can start working on a new space project, would you like to proceed?',
		options: [
			{
				id: 1,
				text: 'Yes, we need to beat the Americans to space.',
				setState: { science: 20, economy: -10, culture: 5 },
				nextText: 12,
			},
			{
				id: 2,
				text: 'No, it’s not the right way to go.',
				nextText: 12,
				setState: { science: -15, economy: 10, culture: -5 },
			},
		] as Option[],
	},
	{
		id: 12,
		text: 'Your friends call you to ask if you want to grab a beer with them.',
		options: [
			{
				id: 1,
				text: "Sure thing! Let's grab a beer and discuss world peace strategies on the side.",
				nextText: 13,
			},
			{
				id: 2,
				text: "Sorry, I don't have time for that with the current crisis.",
				nextText: 13,
			},
		] as Option[],
	},
	{
		id: 13,
		text: '1957: Supreme Leader, our satellite is ready, and we anticipate takeoff in three days. This marks a significant achievement in the ongoing space race.',
		options: [
			{
				id: 1,
				text: 'Perfect! We’re in front of the US in this race!',
				setState: { science: 5, economy: -5, culture: 10 },
				nextText: 14,
			},
		] as Option[],
	},
	{
		id: 14,
		text: '1962: Comrade Leader, we have an opportunity to go to Cuba and potentially establish a nuclear outpost. How shall we proceed with this strategic move?',
		options: [
			{
				id: 1,
				text: 'Yes, let us secure our influence in Cuba and strengthen our strategic position.',
				setState: { military: 15, economy: -10 },
				nextText: 15,
			},
			{
				id: 2,
				text: 'No, this initiative may divert our resources from more pressing matters.',
				nextText: 15,
			},
		] as Option[],
	},
	{
		id: 15,
		text: "Your secretary asks you what coffee you'd like.",
		options: [
			{
				id: 1,
				text: 'Black, strong, and as bold as our foreign policy.',
				nextText: 16,
			},
			{
				id: 2,
				text: "I'll have to pass on the coffee; it's just not my cup of tea.",
				nextText: 16,
			},
		] as Option[],
	},
];
