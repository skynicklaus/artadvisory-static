<script lang="ts">
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<div class="-z-50 bg-gradient-to-br from-bg-primary-1 to-bg-primary-2">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
