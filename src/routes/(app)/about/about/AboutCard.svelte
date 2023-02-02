<script lang="ts">
	export let title: string = '';
	export let description: string = '';
</script>

<div class="rounded-md bg-white/10 py-6 shadow-md md:w-48">
	<div class="text-center text-2xl font-bold text-gray-50">
		<h1>{title}</h1>
	</div>
	<div class="text-center font-medium text-gray-50">
		<p>{description}</p>
	</div>
</div>
