<script lang="ts">
	export let artist: string = '';
	export let returns: string = '';
	export let imagePath: string = '';
</script>

<div class="rounded-md bg-white/10 shadow-md">
	<div
		class="relative w-full before:absolute before:inset-0 before:z-10 before:rounded-t-md before:backdrop-blur-xs"
	>
		<img class="relative h-52 w-full rounded-t-md object-cover" src={imagePath} alt={artist} />
	</div>
	<div class="px-4 py-8">
		<div class="text-lg font-bold text-gray-50">
			<h1>{artist}</h1>
		</div>
		<div class="mt-3 flex items-center justify-between">
			<div class="text-sm text-gray-50">
				<p>Annualized Net Returns</p>
			</div>
			<div class="font-bold text-gray-50">
				<p>{returns}%</p>
			</div>
		</div>
	</div>
</div>
