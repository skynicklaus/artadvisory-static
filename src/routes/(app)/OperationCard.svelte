<script lang="ts">
	export let imagePath = '';
	export let alt = '';
	export let title = '';
	export let description = '';
</script>

<div
	class="relative h-full w-full rounded-md bg-gradient-to-br from-bg-primary-1 via-[#4F4D4F20] to-bg-primary-2 py-20 px-5 shadow-md"
>
	<div class="absolute bottom-3 right-5 z-10 opacity-5">
		<img class="w-44" src={imagePath} {alt} />
	</div>
	<div
		class="relative z-10 h-12 w-12 rounded-md bg-gradient-to-br from-custom-primary-1 to-custom-primary-2"
	>
		<img
			class="absolute left-1/2 top-1/2 w-8 -translate-x-1/2 -translate-y-1/2"
			src={imagePath}
			{alt}
		/>
	</div>
	<div class="z-20 mt-5">
		<h3 class="text-lg font-bold text-gray-50">
			{title}
		</h3>
	</div>
	<div class="z-20 mt-2">
		<p class="w-3/4 text-sm text-gray-50">
			{description}
		</p>
	</div>
</div>
