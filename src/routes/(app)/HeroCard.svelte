<script lang="ts">
	export let imagePath: string = '';
	export let artist: string = '';
	export let name: string = '';
	export let returns: string = '';
</script>

<div class="w-half flex flex-col items-center">
	<div
		class="relative before:absolute before:inset-0 before:z-10 before:rounded-md before:backdrop-blur-sm"
	>
		<img
			class="-z-10 float-left h-24 w-24 rounded-md object-cover filter sm:h-32 sm:w-32"
			src={imagePath}
			alt={name}
		/>
	</div>
	<div class="mt-3 text-center text-sm font-bold text-gray-50 lg:text-lg">
		<p>{artist}</p>
	</div>
	<div class="mt-1 text-center text-xs text-gray-50 lg:text-base">
		<p>Annualized Net Return</p>
		<p class="font-bold">{returns}%</p>
	</div>
</div>

<style>
	.w-half {
		width: 45vw;
	}

	@media (min-width: 640px) {
		.w-half {
			width: 30vw;
		}
	}
</style>
