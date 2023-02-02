<script lang="ts">
	import RecordCard from './RecordCard.svelte';
	import { paintingsData } from '$lib/appData';
</script>

<div class="mx-auto max-w-screen-2xl px-4 pt-40 lg:px-12 lg:pt-48 lg:pb-10 xl:px-28">
	<div class="flex flex-col gap-6">
		<div class="text-center text-3xl font-bold text-gray-50">
			<h1>Track Record</h1>
		</div>
		<div
			class="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-6 lg:mt-8 lg:grid-cols-3 xl:grid-cols-4"
		>
			{#each paintingsData as { name, artist, imagePath, duration, returns }}
				<RecordCard {artist} {returns} {imagePath} />
			{/each}
		</div>
		<div class="pb-14 text-center text-xs text-gray-50">
			<p>
				IRR may not be indicative of Artadvisory paintings not yet sold and past performance is not
				indicative of future results.
			</p>
		</div>
	</div>
</div>
