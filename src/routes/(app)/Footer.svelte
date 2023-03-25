<script lang="ts">
	import Logo from '$lib/components/Logo.svelte';
	import 'iconify-icon';
</script>

<footer class="pt-28 pb-24 bg-gradient-to-br from-bg-primary-2 to-bg-primary-1">
	<div
		class="flex flex-wrap mx-auto max-w-screen-2xl sm:px-32 md:flex-nowrap md:px-12 xl:px-20 2xl:px-32"
	>
		<div class="flex gap-6 justify-center items-center pb-8 w-full md:block">
			<div class="flex float-left gap-4 items-center md:flex md:flex-col md:items-center">
				<a class="" href="/">
					<div class="w-16 xl:w-18">
						<Logo />
					</div>
				</a>
				<div class="font-bold text-gray-50 xl:text-xl">
					<p>Artadvisory</p>
				</div>
			</div>
		</div>
		<div class="px-8 mb-7 w-1/2 text-sm text-gray-50 md:px-0 md:w-2/3 xl:text-base max-width">
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
					<a href="/explore/shop">Shop</a>
				</li>
				<li class="pt-4">
					<a href="/explore/news">News</a>
				</li>
			</ul>
		</div>
		<div class="px-8 mb-7 w-1/2 text-sm text-gray-50 md:px-0 md:w-2/3 xl:text-base max-width">
			<ul>
				<li class="pt-1">
					<a href="/contact">Contact Us</a>
				</li>
				<li class="pt-4">
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
		<div class="flex-grow px-8 w-full text-sm text-gray-50 md:px-0 xl:text-base">
			<div>
				<p>Art Advisory Sdn. Bhd.</p>
			</div>
			<div>
				<p>88, Jalan Khaw Sim Bee, Georgetown, 10400, Pulau Pinang, Malaysia</p>
			</div>
			<div>
				<p>support@artadvisory.art</p>
			</div>
			<div class="py-6 mt-4 text-sm">
				<p>FOLLOW US</p>
			</div>
			<div class="flex gap-4 items-center -mt-3">
				<a href="https://www.facebook.com/profile.php?id=100089821248930">
					<iconify-icon icon="carbon:logo-facebook" width="26" />
				</a>
				<a href="/">
					<iconify-icon icon="carbon:logo-twitter" width="26" />
				</a>
				<a href="https://www.instagram.com/artadvisory.art/">
					<iconify-icon icon="carbon:logo-instagram" width="26" />
				</a>
				<a href="/">
					<iconify-icon icon="carbon:logo-linkedin" width="26" />
				</a>
			</div>
		</div>
	</div>
</footer>
