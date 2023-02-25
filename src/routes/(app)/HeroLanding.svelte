<script lang="ts">
	import Star from '$lib/components/Star.svelte';
	import Button from '$lib/components/Button.svelte';
	import Painting1 from '$lib/images/Painting1.png';
	import Painting2 from '$lib/images/Painting2.png';
	import Painting3 from '$lib/images/Painting3.png';
	import Painting4 from '$lib/images/Painting4.png';
	import Painting5 from '$lib/images/Painting5.png';
	import Painting6 from '$lib/images/Painting6.png';
	import Painting7 from '$lib/images/Painting7.png';
	import Painting8 from '$lib/images/Painting8.png';
	import Painting9 from '$lib/images/Painting9.png';
	import Painting10 from '$lib/images/Painting10.png';
	import Carousel from './Carousel.svelte';
	import CarouselSmall from './CarouselSmall.svelte';

	let images: { imagePath: string; name: string }[] = [
		{
			imagePath: Painting1,
			name: 'Fine Art Painting'
		},
		{
			imagePath: Painting2,
			name: 'HH Lim'
		},
		{
			imagePath: Painting3,
			name: 'Contemporary Painting'
		},
		{
			imagePath: Painting4,
			name: 'Malaysia Fine Art'
		},
		{
			imagePath: Painting5,
			name: 'Fine Art Painting'
		},
		{
			imagePath: Painting6,
			name: 'Fine Art Painting'
		},
		{
			imagePath: Painting7,
			name: 'Chinese Fine Art Painting'
		},
		{
			imagePath: Painting8,
			name: 'Fine Art Painting'
		},
		{
			imagePath: Painting9,
			name: 'Sculpture'
		},
		{
			imagePath: Painting10,
			name: 'Sculpture'
		}
	];
</script>

<div class="container mx-auto px-4 pt-40 lg:px-12 lg:pt-48 lg:pb-10 xl:pt-52 2xl:pt-64">
	<div class="grid-template lg:grid xl:grid-cols-2">
		<div class="flex flex-col gap-4 xl:mt-16">
			<div
				class="text-3xl font-bold text-gray-50 sm:mx-auto sm:max-w-sm sm:text-center lg:mx-0 lg:text-left xl:w-3/5 xl:max-w-md"
			>
				<h1>Join our revolutionary fine art painting investment platform.</h1>
			</div>
			<div class="text-gray-50 sm:mx-auto lg:mx-0">
				<div class="flex items-center gap-2 pb-4 lg:text-base">
					<div class="w-4 xl:w-7">
						<Star />
					</div>
					<p>Invest in highly-prized paintings</p>
				</div>
				<div class="flex items-center gap-2 pb-4 xl:text-base">
					<div class="w-4 xl:w-7">
						<Star />
					</div>
					<p>Attractive historical returns</p>
				</div>
				<div class="flex items-center gap-2 pb-4 xl:text-base">
					<div class="w-4 xl:w-7">
						<Star />
					</div>
					<p>Get monthly benefits upon investing</p>
				</div>
				<div class="flex items-center gap-2 pb-4 xl:text-base">
					<div class="w-4 xl:w-7">
						<Star />
					</div>
					<p>Receive proceeds upon painting sold</p>
				</div>
			</div>
			<div class="mx-auto mb-6 flex w-full">
				<Button
					href="/contact"
					title="Request Invitation"
					width={'w-full sm:w-auto'}
					paddingx={'sm:px-8 xl:px-9'}
					margin={'sm:mx-auto lg:mx-0'}
				/>
			</div>
		</div>
		<div class="flex gap-4">
			<div class="relative mt-14 hidden w-full overflow-hidden sm:flex sm:px-8 lg:mt-0">
				<Carousel {images} />
			</div>
			<div class="relative overflow-hidden sm:hidden">
				<CarouselSmall {images} />
			</div>
		</div>
	</div>
</div>

<style>
	.grid-template {
		grid-template-columns: 3fr 4fr;
	}
</style>
