<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="mx-auto">
	<nav
		class="sticky z-20 px-2 top-[72px] backdrop-blur-md md:top-[88px] xl:top-[112px] 2xl:top-[120px]"
	>
		<ul
			class="container flex gap-x-10 p-4 mx-auto text-sm text-gray-50 border-b sm:px-2 border-gray-50/30"
		>
			<li>
				<a
					class:text-custom-primary-1={$page.url.pathname === '/explore/shop'}
					class:font-bold={$page.url.pathname === '/explore/shop'}
					href="/explore/shop">Shop</a
				>
			</li>
			<li>
				<a
					class:text-custom-primary-1={$page.url.pathname === '/explore/news'}
					class:font-bold={$page.url.pathname === '/explore/news'}
					href="/explore/news">News</a
				>
			</li>
		</ul>
	</nav>
	<slot />
</div>
