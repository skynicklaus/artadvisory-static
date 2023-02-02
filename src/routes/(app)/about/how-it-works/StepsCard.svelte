<script lang="ts">
	export let title: string = '';
	export let description: string = '';
	export let last: boolean = false;
</script>

<div class="w-full py-1">
	<div
		class="w-full rounded-md bg-gradient-to-br from-custom-primary-1 to-custom-primary-2 p-2 font-bold"
		class:arrow={!last}
	>
		<h1>{title}</h1>
	</div>
	<div class="bg-white-2 h-100 mt-3 p-5 text-sm text-gray-50 md:mt-2">
		<p>{description}</p>
	</div>
</div>

<style>
	.bg-white-2 {
		background-color: rgba(255, 255, 255, 0.02);
	}

	.arrow {
		position: relative;
	}

	.arrow:after {
		position: absolute;
		content: '';
		width: 0px;
		height: 0px;
		border-top: 10px solid #deb35b;
		border-right: 10px solid transparent;
		border-bottom: 10px solid transparent;
		border-left: 10px solid transparent;
		bottom: -18px;
		right: 50%;
		z-index: 20;
	}

	@media (min-width: 768px) {
		.arrow:after {
			border-top: 10px solid #c2a461;
			transform: rotate(-90deg) translate(50%, 0);
			right: -18px;
			top: 50%;
		}
	}
</style>
