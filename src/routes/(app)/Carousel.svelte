<script lang="ts">
	export let images: { imagePath: string; artist: string; type: string }[];
	let currentIndex = 0;

	const next = (): void => {
		currentIndex = (currentIndex + 1) % images.length;
	};

	const interval = setInterval(next, 3000);

	$: previousIndex = currentIndex - 1 === -1 ? images.length - 1 : currentIndex - 1;
	$: nextIndex = currentIndex + 1 === images.length ? 0 : currentIndex + 1;
</script>

{#each images as { imagePath, artist, type }, index}
	<div
		class="item-slide border-6 rounded-lg border-gray-50/70"
		class:current={index === currentIndex}
		class:next={index === nextIndex}
		class:previous={index === previousIndex}
	>
		<img class="h-full" src={imagePath} alt={artist + '' + type} />
	</div>
{/each}

<style>
	.item-slide {
		position: absolute;
		transform: translateX(200%) scale(0.6);
		width: 50%;
		opacity: 0;
		transition: transform 1.5s, opacity 0.3s;
	}

	.previous {
		transform: translateX(-100%) scale(0);
		opacity: 0;
	}

	.current {
		position: static;
		transform: translateX(0%) scale(1);
		height: 100%;
		opacity: 1;
	}

	.next {
		transform: translateX(100%) scale(0.6);
		opacity: 1;
	}

	.border-6 {
		border-width: 6px;
	}
</style>
