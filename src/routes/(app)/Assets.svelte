<script lang="ts">
	import type { Asset } from '$lib/utils';
	import AssetsCard from './AssetsCard.svelte';
	import ArtIcon from '$lib/images/ArtIcon.png';
	import BursaIcon from '$lib/images/BursaIcon.png';
	import RealEstateIcon from '$lib/images/RealEstateIcon.png';
	import GoldIcon from '$lib/images/GoldIcon.png';

	let assets: Asset[] = [
		{
			imagePath: ArtIcon,
			title: 'Fine Art',
			returns: '13.8',
		},
		{
			imagePath: BursaIcon,
			title: 'Bursa',
			returns: '3.9',
		},
		{
			imagePath: RealEstateIcon,
			title: 'Real Estates',
			returns: '8.9',
		},
		{
			imagePath: GoldIcon,
			title: 'Gold',
			returns: '7.2',
		},
	];
</script>

<div class="container mx-auto mt-12 px-4 pt-10 lg:px-12 lg:pt-10 lg:pb-10 xl:pt-8">
	<div
		class="text-3xl font-bold text-gray-50 sm:mx-auto sm:w-6/12 sm:text-center lg:mx-0 lg:text-left xl:w-4/12"
	>
		<h1>Strong appreciation over the last 25+ years</h1>
	</div>
	<div class="mt-3 text-sm text-gray-50 sm:text-center lg:text-left lg:text-base">
		<p>See how Fine Art perform against other major asset classes.</p>
	</div>
	<div
		class="mx-auto mt-5 mb-10 max-w-2xl sm:mt-8 sm:grid sm:grid-cols-2 sm:gap-x-6 lg:max-w-none xl:grid-cols-4"
	>
		{#each assets as { imagePath, title, returns }}
			<div class="my-3 sm:mt-0">
				<AssetsCard {imagePath} {title} {returns} />
			</div>
		{/each}
	</div>
</div>
