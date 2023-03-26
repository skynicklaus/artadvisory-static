<script lang="ts">
	export let imagePath: string;
	export let alt: string;
	export let title: string;
	export let description: string;
	export let author: string;
	export let tags: string[];
	export let date: string;
	export let link: string;
	export let index: number;
</script>

<div class="text-gray-50">
	<div class="mb-4">
		<a href={link}>
			<img class="object-cover w-full h-64 rounded-md" src={imagePath} {alt} />
		</a>
	</div>
	<h2 class="text-3xl">
		<a class="hover:underline" href={link}>
			{title}
		</a>
	</h2>
	<div class:mt-6={index != 0}>
		{#if index == 0}
			<ul class="flex gap-4 my-6 text-xs">
				{#each tags as tag}
					<li>
						<a class="block p-2 text-center rounded-md bg-white/20" href={null}>
							{tag.toUpperCase()}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
		<div class="text-lg">
			<p>by {author}</p>
		</div>
		<div class="text-sm text-gray-50/50">
			<p>{date}</p>
		</div>
		{#if index != 0}
			<ul class="flex gap-4 my-6 text-xs">
				{#each tags as tag}
					<li class="truncate">
						<a class="block p-2 text-center rounded-md bg-white/20" href={null}>
							{tag.toUpperCase()}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
	{#if index == 0}
		<div class="mt-4 mb-8 text-lg">
			<p>{description}</p>
		</div>
	{/if}
	<a
		class="inline-block py-3 px-6 text-xs font-bold text-gray-900 bg-gradient-to-br rounded-md from-custom-primary-1 to-custom-primary-2"
		href={link}>READ MORE</a
	>
	{#if index == 0}
		<hr class="my-8 border-gray-500/80" />
	{/if}
</div>
