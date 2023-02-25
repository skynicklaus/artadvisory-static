<script lang="ts">
	import AboutCard from './AboutCard.svelte';
	import Exhibition1 from '$lib/images/Exhibition1.jpeg';
</script>

<div class="container mx-auto px-4 pt-40 lg:px-12 lg:pt-52 lg:pb-10 xl:pt-52 2xl:pt-56">
	<div class="lg:flex lg:items-center lg:gap-8">
		<div class="flex flex-col gap-4">
			<div
				class="text-3xl font-bold text-gray-50 md:mx-auto md:w-1/2 md:text-center lg:mx-0 lg:w-auto lg:text-left 2xl:w-2/3"
			>
				<h1>We make art investment possible.</h1>
			</div>
			<div class="text-gray-50 md:mx-auto md:w-1/2 md:text-center lg:mx-0 lg:w-auto lg:text-left">
				<p>
					Artadvisory is the only platform in Malaysia that lets you invest in renowned and highly
					prized fine art paintings.
				</p>
			</div>
			<div class="grid grid-cols-1 gap-6 md:place-items-center 2xl:mr-20">
				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					<AboutCard title="40+" description="Years Of Experience" />
					<AboutCard title="50+" description="Painting Offered" />
				</div>
				<div class="">
					<AboutCard title="2023" description="Launched" />
				</div>
			</div>
		</div>
		<div class="hidden lg:block lg:w-full">
			<div class="relative z-30 mx-auto lg:w-4/6">
				<img class="rounded-top-left" src={Exhibition1} alt="Art Gallery" />
			</div>
		</div>
	</div>
</div>

<style>
	.rounded-top-left {
		border-top-left-radius: 10rem;
	}
</style>
