<script lang="ts">
	import type { Operation } from '$lib/utils';
	import OperationCard from './OperationCard.svelte';
	import ArtistIcon from '$lib/images/ArtistIcon.webp';
	import PaintingIcon from '$lib/images/PaintingIcon.webp';
	import SecurityIcon from '$lib/images/SecurityIcon.webp';
	import MoneyIcon from '$lib/images/MoneyIcon.webp';

	let operations: Operation[] = [
		{
			imagePath: ArtistIcon,
			alt: 'Artist',
			title: 'We Find Iconic Artist',
			description:
				'We determine which artist markets are expanding swiftly and have the most alluring rates.'
		},
		{
			imagePath: PaintingIcon,
			alt: 'Painting',
			title: 'We Purchase The Art',
			description:
				'We review thousands of examples of paintings and buy less than 5% of what we’re offered'
		},
		{
			imagePath: SecurityIcon,
			alt: 'Securitizing Artworks',
			title: 'We Fractionalise The Artwork',
			description:
				'We split the paintings into multiple units in order for the painting to be investable for everyone.'
		},
		{
			imagePath: MoneyIcon,
			alt: 'Receive Money',
			title: 'Receive Dividends',
			description:
				'Receive monthly dividends and wait to receive additional dividends upon the sale of the painting.'
		}
	];
</script>

<div class="container mx-auto px-4 pt-8 pb-10 md:px-12 lg:mt-0 lg:px-12 lg:pb-10 xl:pt-8">
	<div class="text-3xl font-bold text-gray-50">
		<h1>How It Works</h1>
	</div>
	<div class="mt-3 text-sm text-gray-50 lg:w-4/6 lg:text-base">
		<p>
			Artadvisory is the only platform in Malaysia for buying and selling shares representing an
			investment in iconic artworks. Build a diversified portfolio of expertly-vetted works curated
			by our industry-leading research team.
		</p>
	</div>
	<div class="scroll flex w-full flex-row gap-6 overflow-x-scroll py-5 xl:mt-8">
		{#each operations as { imagePath, alt, title, description }}
			<div class="w-full shrink-0 md:w-1/2 xl:w-1/3">
				<OperationCard {imagePath} {alt} {title} {description} />
			</div>
		{/each}
	</div>
</div>

<style>
	@media (min-width: 1280px) {
		.scroll::-webkit-scrollbar {
			height: 8px;
		}

		.scroll::-webkit-scrollbar-track {
			background-color: transparent;
		}

		.scroll::-webkit-scrollbar-thumb {
			background: transparent;
			transition: background-color 2s;
		}

		.scroll:hover::-webkit-scrollbar-thumb {
			border-radius: 4px;
			background-color: #bbbbbb;
		}
	}
</style>
