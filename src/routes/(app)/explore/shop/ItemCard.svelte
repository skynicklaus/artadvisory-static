<script lang="ts">
	import { goto } from '$app/navigation';
	export let id: number;
	export let imagePath: string;
	export let artist: string;
	export let type: string;
</script>

<div class="flex relative flex-col px-4 mb-4 group">
	<div class="mb-3">
		<div
			class="relative h-0 overflow-hidden pt-[115%] transition-transform duration-300 group-hover:scale-95"
		>
			<img
				class="object-contain absolute top-0 left-0 w-full h-full"
				src={imagePath}
				alt={artist + ' ' + type}
			/>
		</div>
	</div>
	<div class="text-gray-50 transition-all duration-300 group-hover:mb-2 group-hover:-mt-2">
		<div class="mb-1">
			<p>#{id}</p>
		</div>
		<div class="text-xl font-medium">
			<h2>
				<a href={null} class="hover:underline hover:cursor-pointer after:absolute after:inset-0">
					{artist}
				</a>
			</h2>
		</div>
		<div class="mb-4 text-sm">
			<p>{type}</p>
		</div>
	</div>
	<div class="z-10 mt-4">
		<button
			class="p-3 w-full font-bold text-center bg-gradient-to-br rounded-md from-custom-primary-1 to-custom-primary-2 drop-shadow-md"
			on:click={() => {
				goto('/contact');
			}}
		>
			Ask For Price
		</button>
	</div>
</div>
