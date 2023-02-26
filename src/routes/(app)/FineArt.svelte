<script lang="ts">
	import InvestCard from './InvestCard.svelte';

	let y: number;
</script>

<svelte:window class="window" bind:innerWidth={y} />

<div class="container mx-auto mt-14 px-4 pb-10 md:px-12 lg:mt-0 lg:pb-10 xl:pt-8">
	<div class="rounded-md bg-white/10 py-6 px-4 shadow-md md:py-8 md:px-8">
		<InvestCard title="Fine Art Investment" flex={y > 728 ? true : false}>
			<p>
				Fine art is currently one of the most secure assets in the world. However, due to the high
				entry barrier, only the top 1% of the population is able to participate in this market. We
				will lower the barriers of entry to allow everyone to gain from this magnificent asset.
			</p>
		</InvestCard>
		<div class="pt-12 md:flex md:justify-between md:py-6 lg:py-10 xl:py-14">
			<div class="text-2xl font-bold md:text-3xl">
				<h2
					class="bg-gradient-to-r from-custom-primary-1 to-custom-primary-2 bg-clip-text text-transparent"
				>
					The returns is beyond your imagination
				</h2>
			</div>
			<div
				class="xl: mt-4 text-sm text-custom-primary-1 md:mt-1 md:w-2/3 md:text-center md:text-base xl:text-lg"
			>
				<p>Explore the possibilities</p>
			</div>
		</div>
		<div
			class="mt-8 flex flex-col gap-6 md:grid md:grid-cols-2 lg:mt-4 xl:mt-0 xl:grid-cols-3 xl:gap-24"
		>
			<InvestCard title="Unique Asset Class">
				<p>
					Fine art market does not have any correlation to traditional invesment markets, bearish
					market does not affect the price of paintings.
				</p>
			</InvestCard>
			<InvestCard title="Hedge Against Inflation">
				<p>
					Fine art investments will still have better performance even in inflationary periods as
					compared to stocks, crypto, NFTs, etc...
				</p>
			</InvestCard>
			<InvestCard title="Internationally Recognized">
				<p>
					Art is like a modern currency which once value is created, people can consume it, curate
					it, use it, buy it, and trade it.
				</p>
			</InvestCard>
		</div>
	</div>
</div>
