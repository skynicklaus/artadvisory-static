<script lang="ts">
	export let imagePath: string = '';
	export let alt: string = '';
	export let title: string = '';
	export let description: string = '';
</script>

<div class="flex flex-col items-center rounded-md bg-white/10 p-5 text-gray-50">
	<div class="w-20">
		<img src={imagePath} {alt} />
	</div>
	<div class="mt-3 text-center text-xl font-bold">
		<h1>{title}</h1>
	</div>
	<div class="mt-3 text-center text-sm">
		<p>{description}</p>
	</div>
</div>
