<script lang="ts">
	import StepsCard from './StepsCard.svelte';

	let steps: { title: string; description: string; last: boolean }[] = [
		{
			title: 'We select the artists',
			description:
				'We analyse a proprietary dataset to determine which artist markets are expanding swiftly and have the most alluring rates.',
			last: false,
		},
		{
			title: 'We purchase the art',
			description:
				'After determining which artist markets are appreciating at auction, our acquisition team will buy the best art by value.',
			last: false,
		},
		{
			title: 'We fractionalise the artwork',
			description:
				'We split the paintings into multiple units in order for the painting to be investable for everyone.',
			last: false,
		},
		{
			title: 'We sell the artwork',
			description:
				'Receive monthly dividends and wait to receive additional dividends upon the sale of the painting.',
			last: true,
		},
	];
</script>

<div class="container mx-auto mt-5 px-4 pt-10 lg:px-12 lg:pt-10 lg:pb-10">
	<div class="text-3xl font-bold text-gray-50">
		<h1>How It Works</h1>
	</div>
	<div
		class="mt-3 rounded-md bg-white/10 p-3 shadow-xl md:grid md:grid-cols-4 md:gap-x-4 2xl:gap-x-12"
	>
		{#each steps as { title, description, last }}
			<StepsCard {title} {description} {last} />
		{/each}
	</div>
</div>
