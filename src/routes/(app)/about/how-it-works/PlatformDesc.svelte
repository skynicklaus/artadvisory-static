<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Exhibition3 from '$lib/images/Exhibition3.png';
</script>

<div class="container mx-auto px-4 pt-40 lg:px-12 lg:pt-52 lg:pb-10 xl:pt-52 2xl:pt-56">
	<div class="lg:flex lg:items-center xl:mt-12">
		<div class="flex-half flex flex-col gap-4 lg:justify-center lg:pr-14">
			<div
				class="text-3xl font-bold text-gray-50 sm:mx-auto sm:w-2/3 sm:text-center lg:mx-0 lg:w-auto lg:text-left xl:w-4/6"
			>
				<h1>A complete platform for investing in art</h1>
			</div>
			<div
				class="flex flex-col gap-3 text-gray-50 sm:mx-auto sm:w-2/3 sm:text-center lg:w-auto lg:text-left"
			>
				<p>
					Artadvisory is the marketplace for acquiring and transferring of securities that represent
					a stake in well-known works of art. Create a broad collection of enduring works of art
					with the aid of our top-notch research staff.
				</p>
			</div>
			<div
				class="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-10 lg:justify-start"
			>
				<Button
					href="/contact"
					title="Join Now"
					width={'w-full sm:w-auto'}
					paddingx={'sm:px-8 lg:px-12 xl:px-16'}
					margin={'lg:mx-0'}
				/>
				<Button
					href="/about/about"
					title="Learn More"
					width={'w-full sm:w-auto'}
					paddingx={'sm:px-8 lg:px-12 xl:px-16'}
					margin={'lg:mx-0'}
				/>
			</div>
		</div>
		<div class="flex-half mx-auto mt-12 max-w-sm md:max-w-md lg:mt-0">
			<div
				class="relative z-20 mt-1 ml-1 before:absolute before:-z-10 before:-mt-3 before:-ml-3 before:h-full before:w-full before:rounded-md before:bg-black/30 sm:mt-20 sm:before:-mt-12 sm:before:-ml-12 md:mt-20 lg:mt-3 lg:before:-ml-16"
			>
				<img class="rounded-md" src={Exhibition3} alt="HowItWork1" />
			</div>
		</div>
	</div>
</div>
