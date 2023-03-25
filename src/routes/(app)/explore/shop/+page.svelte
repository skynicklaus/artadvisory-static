<script lang="ts">
	import { shopData } from '$lib/appData';
	import ItemCard from './ItemCard.svelte';
</script>

<ul class="container grid grid-cols-1 gap-4 px-3 pt-6 pb-10 mx-auto md:grid-cols-3 xl:grid-cols-4">
	{#each shopData as { id, imagePath2, artist, type }}
		<li>
			<ItemCard {id} imagePath={imagePath2} {artist} {type} />
		</li>
	{/each}
</ul>
