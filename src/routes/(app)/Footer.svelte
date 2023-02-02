<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import 'iconify-icon';
</script>

<footer class="bg-gradient-to-br from-bg-primary-2 to-bg-primary-1 pt-28 pb-24">
	<div
		class="mx-auto flex max-w-screen-2xl flex-wrap sm:px-32 md:flex-nowrap md:px-12 xl:px-20 2xl:px-32"
	>
		<div class="flex w-full items-center justify-center gap-6 pb-8 md:block">
			<div class="float-left flex items-center gap-4 md:flex md:flex-col md:items-center">
				<a class="" href="/">
					<div class="xl:w-18 w-16">
						<Logo />
					</div>
				</a>
				<div class="font-bold text-gray-50 xl:text-xl">
					<p>Artadvisory</p>
				</div>
			</div>
		</div>
		<div class="max-width mb-7 w-1/2 px-8 text-sm text-gray-50 md:w-2/3 md:px-0 xl:text-base">
			<ul>
				<li class="pt-1">
					<a href="/about/about">About</a>
				</li>
				<li class="pt-4">
					<a href="/about/how-it-works">How It Works</a>
				</li>
				<li class="pt-4">
					<a href="/track-records">Track Record</a>
				</li>
				<li class="pt-4">
					<a href="/contact">Contact Us</a>
				</li>
			</ul>
		</div>
		<div class="max-width mb-7 w-1/2 px-8 text-sm text-gray-50 md:w-2/3 md:px-0 xl:text-base">
			<ul>
				<li class="pt-1">
					<a href="/about/terms-of-use">Terms Of Use</a>
				</li>
				<li class="pt-4">
					<a href="/">FAQ</a>
				</li>
				<li class="pt-4">
					<a href="/about/privacy">Privacy Policy</a>
				</li>
				<li class="pt-4">
					<a href="/about/disclaimer">Disclaimer</a>
				</li>
			</ul>
		</div>
		<div class="w-full flex-grow px-8 text-sm text-gray-50 md:px-0 xl:text-base">
			<div class="">
				<p>Artadvisory.art, 88, Jalan Khaw Sim Bee, Georgetown, 10400, Pulau Pinang, Malaysia</p>
			</div>
			<div class="">
				<p>support@artadvisory.art</p>
			</div>
			<div class="mt-4 py-6 text-sm">
				<p>FOLLOW US</p>
			</div>
			<div class="-mt-3 flex items-center gap-4">
				<a href="/">
					<iconify-icon icon="carbon:logo-facebook" width="26" />
				</a>
				<a href="/">
					<iconify-icon icon="carbon:logo-twitter" width="26" />
				</a>
				<a href="/">
					<iconify-icon icon="carbon:logo-instagram" width="26" />
				</a>
				<a href="/">
					<iconify-icon icon="carbon:logo-linkedin" width="26" />
				</a>
			</div>
		</div>
	</div>
</footer>
