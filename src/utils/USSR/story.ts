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
				text: "Defend South Korea; it's the right priority right now.",
				nextText: 14,
				setState: { military: 10, culture: -5, economy: -15, science: 5 },
			},
			{
				id: 3,
				text: "We'll remain neutral and focus on resolving our internal issues.",
				nextText: 17,
				setState: { economy: 10, culture: 10 },
			},
		] as Option[],
	},
	{
		id: 11,
		text: 'The decision to support North Korea resonates through the chambers of the Kremlin. As the leader of the USSR, you see this as an opportunity to expand communist influence and counter American power in Asia. You authorize sending military equipment, advisors, and support to North Korea.',
		options: [
			{
				id: 1,
				text: 'Next',
				setState: { military: -10, economy: -10, culture: 5 },
				nextText: 12,
			},
		] as Option[],
	},
	{
		id: 12,
		text: "Scene: A dimly lit war room in Moscow. Maps of Korea spread across the table.\nYou (Leader of USSR): 'Our support for North Korea is not just about aiding a fellow communist nation. It's a strategic move against the imperialistic tendencies of the West. We must ensure our position in this global chess game.'\nAdvisor 1: 'Leader, our forces are ready to provide strategic and logistical support. Our intervention will be covert to avoid direct confrontation with the United States.'\nAdvisor 2: 'We should also consider a propaganda campaign to justify our actions and win the support of our people and the international left-wing community.'",
		options: [
			{
				id: 1,
				text: 'Focus on military aid and advisors',
				setState: { military: 10, economy: -10, culture: -5 },
				nextText: 13,
			},
			{
				id: 2,
				text: 'Launch a propaganda campaign alongside military support.',
				setState: { military: 15, economy: -10, culture: -15 },
				nextText: 12,
			},
			{
				id: 3,
				text: 'Monitor the situation closely and avoid direct involvement.',
				setState: { military: -5, economy: 10, culture: 10 },
				nextText: 12,
			},
		] as Option[],
	},
	{
		id: 13,
		text: "Scene: A bustling military command center in Moscow.\nYou (Leader of USSR): 'Our priority is to ensure North Korea's military capability. We must provide them with the latest weapons and our best advisors without risking open conflict with the United States.'\nAdvisor 1: 'We have arranged for shipments of tanks, airplanes, and artillery. Our advisors are ready to assist in planning and executing military strategies.'\nAdvisor 2: 'There are risks involved. If our involvement becomes too apparent, it could escalate into a direct confrontation with the West.'",
		options: [
			{
				id: 1,
				text: 'Increase military aid discreetly.',
				setState: { military: 5, economy: -5, culture: -15 },
				nextText: 14,
			},
			{
				id: 2,
				text: 'Send our best military strategists to guide North Korean forces.',
				setState: { military: 15, economy: -15, culture: -5 },
				nextText: 14,
			},
			{
				id: 3,
				text: 'Prepare for potential escalation with the West.',
				setState: { military: 10, economy: -10 },
				nextText: 14,
			},
		] as Option[],
	},
	{
		id: 14,
		text: 'In a surprising turn of events, you decide to support South Korea. This decision is seen as a strategic move to maintain balance and prevent Western powers from gaining too much influence in Asia.',
		options: [
			{
				id: 1,
				text: 'Next',
				nextText: 15,
			},
		] as Option[],
	},
	{
		id: 15,
		text: "Scene: A secretive meeting room in the Kremlin.\nYou (Leader of USSR): 'Our support for South Korea will be a diplomatic masterstroke. It will confuse our adversaries and give us leverage in negotiations with the West.'\nAdvisor 1: 'This is a risky move, Leader. It could alienate our allies and create unrest within the party.'\nAdvisor 2: 'We can provide covert support, masking our aid as coming from neutral countries. It will help maintain our image while achieving our objectives.'",
		options: [
			{
				id: 1,
				text: 'Proceed with covert aid, ensuring utmost secrecy.',
				setState: { military: -5, economy: -10, culture: 10 },
				nextText: 16,
			},
			{
				id: 2,
				text: 'Reconsider and shift support to North Korea.',
				setState: { military: 5, economy: -5, culture: -15 },
				nextText: 16,
			},
			{
				id: 3,
				text: 'Engage in diplomatic efforts to mediate the conflict.',
				setState: { military: -10, culture: 15 },
				nextText: 16,
			},
		] as Option[],
	},
	{
		id: 16,
		text: "Scene: A late-night meeting in a hidden bunker beneath the Kremlin.\nYou (Leader of USSR): 'Our support for South Korea must remain a shadow operation. We'll funnel resources through third-party countries and use espionage to cover our tracks.'\nAdvisor 1: 'We have contacts in various non-aligned nations ready to assist in this covert operation.'\nAdvisor 2: 'This operation, if exposed, could have severe repercussions for our standing in the international community and within the communist bloc.'",
		options: [
			{
				id: 1,
				text: 'Implement strict operational security to prevent exposure.',
				setState: { military: 10, economy: -5, culture: -10 },
				nextText: 16,
			},
			{
				id: 2,
				text: 'Start a counter-intelligence operation to mislead Western powers.',
				setState: { military: 5, economy: -10, science: 5 },
				nextText: 16,
			},
			{
				id: 3,
				text: "Re-evaluate the operation's risks and consider other strategies.",
				setState: { military: -5, culture: 5, economy: 10 },
				nextText: 16,
			},
		] as Option[],
	},
	{
		id: 17,
		text: 'Choosing to remain neutral, you decide that the USSR will not intervene in the Korean conflict. This decision is a delicate balancing act, aiming to preserve relations with both sides and avoid escalation.',
		options: [
			{
				id: 1,
				text: 'Next',
				setState: { military: -10, economy: -10, culture: 5 },
				nextText: 12,
			},
		] as Option[],
	},
	{
		id: 18,
		text: "Scene: A stately office in the Kremlin, overlooking Moscow.\nYou (Leader of USSR): 'We must tread carefully. Our focus should be on strengthening our nation and preparing for any outcome of this conflict.'\nAdvisor 1: 'Neutrality could be seen as weakness by our allies and enemies alike. We must be prepared for criticism.'\nAdvisor 2: 'We can use this time to build our economy and military strength. It might also be wise to engage in back-channel diplomacy to influence the outcome without direct involvement.",
		options: [
			{
				id: 1,
				text: 'Strengthen our military and economy while monitoring the conflict.',
				setState: { military: 10, economy: 10, culture: -5, science: -5 },
				nextText: 19,
			},
			{
				id: 2,
				text: "Engage in secretive diplomacy to shape the conflict's outcome.",
				setState: { military: -5, economy: 5, culture: 10 },
				nextText: 19,
			},
			{
				id: 3,
				text: 'Publicly advocate for peace and mediate between the conflicting parties.',
				setState: { military: -15, culture: 15, economy: 10 },
				nextText: 19,
			},
		] as Option[],
	},
	{
		id: 19,
		text: "Scene: A high-level economic planning meeting in the Kremlin.\nYou (Leader of USSR): 'Our focus must be on internal strength. We will build our economy and military, preparing for any future conflicts that may arise.'\nAdvisor 1: 'We can increase industrial output and invest in technology. This will not only strengthen our military but also boost the economy.'\nAdvisor 2: 'We should also keep a close eye on the Korean conflict and be ready to act if the balance of power shifts dramatically.'",
		options: [
			{
				id: 1,
				text: 'Next',
				setState: { military: -10, economy: -10, culture: 5 },
				nextText: 12,
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
