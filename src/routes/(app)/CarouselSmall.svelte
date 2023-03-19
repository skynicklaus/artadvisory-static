<script lang="ts">
	export let images: { imagePath: string; artist: string; type: string }[];
	let currentIndex = 0;

	const next = (): void => {
		currentIndex = (currentIndex + 1) % images.length;
	};

	const interval = setInterval(next, 3000);

	$: previousIndex = currentIndex - 1 === -1 ? images.length - 1 : currentIndex - 1;
</script>

{#each images as { imagePath, artist, type }, index}
	<div
		class="item-slide"
		class:current={index === currentIndex}
		class:previous={index === previousIndex}
	>
		<img class="object-cover" src={imagePath} alt={artist + '' + type} />
	</div>
{/each}

<style>
	.item-slide {
		position: absolute;
		transform: translateX(100%);
		width: 50%;
		opacity: 0;
		transition: transform 1.5s, opacity 0.5s;
		-webkit-transition: transform 1.5s, opacity 0.5s;
	}

	.previous {
		transform: translateX(-100%);
		opacity: 0;
	}

	.current {
		position: static;
		transform: translateX(0%);
		opacity: 1;

		margin: 0 auto;
	}
</style>
