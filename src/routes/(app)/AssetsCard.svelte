<script lang="ts">
	export let imagePath = '';
	export let title = '';
	export let returns = '';
</script>

<div
	class="flex items-center gap-6 rounded-md bg-white/10 py-4 px-4 shadow-sm shadow-bg-primary-2 xl:py-5"
>
	<div class="relative h-12 w-12 rounded-full bg-custom-primary-1/60 lg:h-16 lg:w-16">
		<img
			class="absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 lg:h-8 lg:w-8"
			src={imagePath}
			alt={title}
		/>
	</div>
	<div class="text-gray-50">
		<p class="font-bold lg:text-xl">{title}</p>
		<p class="text-sm lg:text-base">{returns}%</p>
	</div>
</div>
