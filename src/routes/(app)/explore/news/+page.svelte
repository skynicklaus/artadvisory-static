<script lang="ts">
	import { newsData } from '$lib/appData';
	import NewsFeed from './NewsFeed.svelte';

	console.log(newsData);
</script>

<div class="container flex flex-col my-8 mx-auto lg:flex-row">
	<div class="basis-8/12">
		<div class="flex flex-wrap">
			{#each newsData as { title, description, imagePath, alt, tags, date, author, link }, index}
				{#if index == 0}
					<div class="px-2 mb-8 max-w-full basis-full">
						<NewsFeed
							{title}
							{description}
							{imagePath}
							{alt}
							{tags}
							{date}
							{author}
							{link}
							{index}
						/>
					</div>
				{:else}
					<div class="px-2 mb-8 max-w-full basis-full lg:max-w-1/2 lg:basis-1/2">
						<NewsFeed
							{title}
							{description}
							{imagePath}
							{alt}
							{tags}
							{date}
							{author}
							{link}
							{index}
						/>
					</div>
				{/if}
			{/each}
		</div>
	</div>
	<div class="hidden p-5 lg:block basis-4/12">
		<div class="text-gray-50">
			<h1 class="text-lg font-semibold">Recent</h1>
			<ol class="p-5 list-decimal">
				{#each newsData as { title, link }}
					<li class="pl-4 my-2 hover:underline">
						<a href={link}>{title}</a>
					</li>
				{/each}
			</ol>
		</div>
		<hr class="my-8" />
		<div class="mt-4 text-gray-50">
			<h1 class="text-lg font-semibold">Trending</h1>
			<ol class="p-5 list-decimal">
				{#each newsData as { title, link }}
					<li class="pl-4 my-2 hover:underline">
						<a href={link}>{title}</a>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</div>
