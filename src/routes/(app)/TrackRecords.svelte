<script lang="ts">
	import type { Painting } from '$lib/utils';
	import HeroCard from './HeroCard.svelte';
	import { paintingsData } from '$lib/appData';

	let paintings: Painting[] = paintingsData;
</script>

<div class="container mx-auto mt-5 px-4 pt-10 lg:px-12 lg:pt-10 lg:pb-10">
	<div class="text-center text-3xl font-bold text-gray-50">
		<h1>Track Record</h1>
	</div>
	<div class="mt-3 hidden text-center text-xs text-gray-50">
		<p>Press the following to view detailed information for each painting.</p>
	</div>
	<div
		class="mt-11 flex overflow-x-scroll md:grid md:grid-cols-3 md:gap-5 md:overflow-auto 2xl:grid-cols-6"
	>
		{#each paintings as { name, artist, imagePath, duration, returns }}
			<a class="mt-4 flex justify-center" href="#a">
				<HeroCard {imagePath} {artist} {name} {returns} />
			</a>
		{/each}
	</div>
	<div class="mt-3 text-center text-xs text-gray-50 lg:mt-5 lg:text-sm 2xl:mt-7">
		<p>
			Returns may not be indicative of Artadvisory paintings not yet sold and past performance is
			not indicative of future results.
		</p>
	</div>
</div>
