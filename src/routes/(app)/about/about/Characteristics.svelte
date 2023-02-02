<script lang="ts">
	import EasyIcon from '$lib/images/EasyIcon.svg';
	import ProvenIcon from '$lib/images/Proven.svg';
	import CollaborationIcon from '$lib/images/Collaboration.svg';
	import FullServiceIcon from '$lib/images/FullService.svg';
	import CharacteristicCard from './CharacteristicCard.svelte';

	let characteristics: { imagePath: string; alt: string; title: string; description: string }[] = [
		{
			imagePath: EasyIcon,
			alt: 'Keep it simple',
			title: 'Simplicity Is King',
			description:
				'We manage our project with high level of detail yet keep our platform simple so that our clients have a seamless experience when investing with us.',
		},
		{
			imagePath: ProvenIcon,
			alt: 'Proven Track Record',
			title: 'Proven Track Record',
			description:
				'We have amassed a sizeable ROI over the years when it comes to fine art investing.',
		},
		{
			imagePath: CollaborationIcon,
			alt: 'Partnership and Collaboration',
			title: 'Collaborations & Partnerships',
			description:
				'We are working with the finest art collectors, auction houses and musuems all over the world.',
		},
		{
			imagePath: FullServiceIcon,
			alt: 'Full Service Provided',
			title: 'Full-Service Firm',
			description:
				"We offer an 'all-in' service in terms of sourcing, logistics, exhibition, insurance and tender.",
		},
	];
</script>

<div class="container mx-auto px-4 pt-8 pb-10 md:px-12 lg:mt-0 lg:px-12 lg:pb-10 xl:pt-20">
	<div class="text-center text-3xl font-bold text-gray-50">
		<h1>Invest with Artadvisory</h1>
	</div>
	<div class="mx-auto mt-6 max-w-4xl text-center text-gray-50">
		<p>
			At Artadvisory, we place our clients as our utmost priorities. With these 4 characteristics of
			our company, we can assure clients that their investment process will be as seamless and
			straight-forward as it can be.
		</p>
	</div>
	<div class="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
		{#each characteristics as { imagePath, alt, title, description }}
			<CharacteristicCard {imagePath} {alt} {title} {description} />
		{/each}
	</div>
</div>
