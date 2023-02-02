<script lang="ts">
	export let title: string = '';
	export let flex: boolean = false;
</script>

<div class={flex ? 'flex justify-between' : ''}>
	<div class="flex-1">
		<div class="h-3px w-7 bg-gradient-to-r from-custom-primary-1 to-custom-primary-2 xl:w-10" />
		<div class="mt-1 font-bold text-white md:text-lg xl:text-xl">
			<h3>
				{title}
			</h3>
		</div>
	</div>
	<div
		class={flex ? 'text-sm text-white w-2/3 md:text-base' : 'mt-3 text-sm text-white md:text-base'}
	>
		<slot />
	</div>
</div>

<style>
	.h-3px {
		height: 3px;
	}
</style>
