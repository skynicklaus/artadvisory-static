<script lang="ts">
	import { shopData } from '$lib/appData';
	import Star from '$lib/components/Star.svelte';
	import Button from '$lib/components/Button.svelte';
	import Carousel from './Carousel.svelte';
	import CarouselSmall from './CarouselSmall.svelte';
</script>

<div class="container px-4 pt-20 mx-auto lg:px-12 lg:pt-24 lg:pb-10 2xl:pt-32">
	<div class="items-center space-y-10 lg:grid xl:grid-cols-2 grid-template">
		<div class="space-y-6">
			<div
				class="text-3xl font-bold text-gray-50 sm:mx-auto sm:max-w-sm sm:text-center lg:mx-0 lg:text-left xl:w-3/5 xl:max-w-md"
			>
				<h1>Join our revolutionary fine art painting investment platform.</h1>
			</div>
			<div class="sm:text-center lg:text-left">
				<div class="inline-block text-gray-50">
					<div class="flex gap-2 items-center pb-4 sm:justify-center md:justify-start lg:text-base">
						<div class="w-4 xl:w-7">
							<Star />
						</div>
						<p>Invest in highly-prized paintings</p>
					</div>
					<div class="flex gap-2 items-center pb-4 sm:justify-center md:justify-start xl:text-base">
						<div class="w-4 xl:w-7">
							<Star />
						</div>
						<p>Attractive historical returns</p>
					</div>
					<div class="flex gap-2 items-center pb-4 sm:justify-center md:justify-start xl:text-base">
						<div class="w-4 xl:w-7">
							<Star />
						</div>
						<p>Get monthly benefits upon investing</p>
					</div>
					<div class="flex gap-2 items-center pb-4 sm:justify-center md:justify-start xl:text-base">
						<div class="w-4 xl:w-7">
							<Star />
						</div>
						<p>Receive proceeds upon painting sold</p>
					</div>
				</div>
			</div>
			<div class="flex mx-auto mb-6 w-full">
				<Button
					href="/contact"
					title="Request Invitation"
					width={'w-full sm:w-auto'}
					paddingx={'sm:px-8 xl:px-9'}
					margin={'sm:mx-auto lg:mx-0'}
				/>
			</div>
		</div>
		<div class="hidden overflow-hidden relative w-full sm:block sm:px-8 lg:mt-0">
			<Carousel images={shopData} />
		</div>
		<div class="overflow-hidden relative sm:hidden">
			<CarouselSmall images={shopData} />
		</div>
	</div>
</div>

<style>
	.grid-template {
		grid-template-columns: 3fr 4fr;
	}
</style>
