<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="container mx-auto">
	<nav
		class="sticky top-[72px] z-20 px-2 backdrop-blur-md md:top-[88px] xl:top-[112px] 2xl:top-[120px]"
	>
		<ul class="flex gap-x-10 border-b border-gray-50/30 p-4 text-sm text-gray-50 sm:px-2">
			<li>
				<a
					class:text-custom-primary-1={$page.url.pathname === '/explore/shop'}
					class:font-bold={$page.url.pathname === '/explore/shop'}
					href="/explore/shop">Shop</a
				>
			</li>
		</ul>
	</nav>
	<slot />
</div>
