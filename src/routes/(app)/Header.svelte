<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import Logo from '$lib/components/Logo.svelte';
	import Button from '$lib/components/Button.svelte';
	import RightArrow from '$lib/components/RightArrow.svelte';

	let menuOpen = false;
</script>

<svelte:head>
	{#if menuOpen}
		<style>
			body {
				overflow-y: hidden;
			}
		</style>
	{/if}
</svelte:head>
<header class="sticky top-0 z-40 w-full bg-gradient-to-b from-black/40 to-black/5 backdrop-blur-md">
	<div class="container px-4 pt-6 pb-4 mx-auto xl:pt-8 2xl:pt-10">
		<div class="flex justify-between items-center">
			<div>
				<a href="/">
					<div class="w-8 md:w-12 xl:w-16 2xl:w-22">
						<Logo />
					</div>
				</a>
			</div>
			<div class="hidden md:block">
				<nav class="flex gap-4 text-sm font-medium text-gray-50 lg:gap-10 lg:ml-44 xl:gap-14">
					<a
						class:text-custom-primary-1={$page.url.pathname === '/about/how-it-works'}
						class:font-bold={$page.url.pathname === '/about/how-it-works'}
						href="/about/how-it-works">HOW IT WORKS</a
					>
					<a
						class:text-custom-primary-1={$page.url.pathname === '/about/about'}
						class:font-bold={$page.url.pathname === '/about/about'}
						href="/about/about">ABOUT</a
					>
					<a
						class:text-custom-primary-1={$page.url.pathname === '/track-records'}
						class:font-bold={$page.url.pathname === '/track-records'}
						href="/track-records">TRACK RECORD</a
					>
					<a
						class:text-custom-primary-1={$page.url.pathname === '/explore/shop' ||
							$page.url.pathname === '/explore/news'}
						class:font-bold={$page.url.pathname === '/explore/shop' ||
							$page.url.pathname === '/explore/news'}
						href="/explore/shop">EXPLORE</a
					>
				</nav>
			</div>
			<div>
				<div class="hidden md:flex md:gap-3">
					<div class="hidden lg:block">
						<Button href={'/auth/login'} title={'Login'} paddingx={'px-8 xl:px-9'} />
					</div>
					<div>
						<Button href={'/auth/signup'} title={'Sign Up'} paddingx={'px-8 xl:px-9'} />
					</div>
				</div>
				<button
					class="flex flex-col gap-1 justify-center w-7 h-7 md:hidden"
					on:click={() => (menuOpen = true)}
				>
					<div class="burger-menu burger-top" />
					<div class="burger-menu burger-mid" />
					<div class="burger-menu burger-bot" />
				</button>
			</div>
		</div>
	</div>
</header>

{#if menuOpen}
	<div
		class="fixed top-0 left-0 z-50 w-screen h-screen bg-bg-primary-1"
		transition:fly={{ x: 200 }}
	>
		<div class="flex justify-between items-center px-4 pt-10 pb-4 bg-bg-primary-1 drop-shadow-lg">
			<div class="flex gap-5 items-center">
				<div class="w-8">
					<Logo />
				</div>
				<h1 class="text-lg font-bold text-gray-50">Artadvisory</h1>
			</div>
			<button class="relative w-7 h-7" on:click={() => (menuOpen = false)}>
				<div
					class="absolute top-1/2 left-1/2 w-full rotate-45 -translate-x-1/2 -translate-y-1/2 burger-menu"
				/>
				<div
					class="absolute top-1/2 left-1/2 w-full -rotate-45 -translate-x-1/2 -translate-y-1/2 burger-menu"
				/>
			</button>
		</div>
		<div class="h-full">
			<div class="text-gray-50">
				<ul>
					<li>
						<a
							class="flex justify-between items-center py-4 px-4 border-b-2 border-bg-primary-2/20"
							href="/about/how-it-works"
							on:click={() => (menuOpen = false)}
						>
							<p>How It Works</p>
							<div class="w-3">
								<RightArrow />
							</div>
						</a>
					</li>
					<li>
						<a
							class="flex justify-between items-center py-4 px-4 border-b-2 border-bg-primary-2/20"
							href="/about/about"
							on:click={() => (menuOpen = false)}
						>
							<p>About Us</p>
							<div class="w-3">
								<RightArrow />
							</div>
						</a>
					</li>
					<li>
						<a
							class="flex justify-between items-center py-4 px-4 border-b-2 border-bg-primary-2/20"
							href="/track-records"
							on:click={() => (menuOpen = false)}
						>
							<p>Track Records</p>
							<div class="w-3">
								<RightArrow />
							</div>
						</a>
					</li>
					<li>
						<a
							class="flex justify-between items-center py-4 px-4 border-b-2 border-bg-primary-2/20"
							href="/explore/shop"
							on:click={() => (menuOpen = false)}
						>
							<p>Explore</p>
							<div class="w-3">
								<RightArrow />
							</div>
						</a>
					</li>
					<li>
						<a
							class="flex justify-between items-center py-4 px-4 border-b-2 border-bg-primary-2/20"
							href="/contact"
							on:click={() => (menuOpen = false)}
						>
							<p>Contact Us</p>
							<div class="w-3">
								<RightArrow />
							</div>
						</a>
					</li>
				</ul>
			</div>
			<div class="flex gap-8 justify-center mt-8">
				<div>
					<a
						class="py-4 px-8 text-center bg-gradient-to-br rounded font-spartan from-custom-primary-1 to-custom-primary-2"
						href="/auth/login"
						on:click={() => (menuOpen = false)}
					>
						Login
					</a>
				</div>
				<div>
					<a
						class="py-4 px-8 text-center bg-gradient-to-br rounded font-spartan from-custom-primary-1 to-custom-primary-2"
						href="/auth/signup"
						on:click={() => (menuOpen = false)}
					>
						Sign Up
					</a>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.burger-top {
		width: 80%;
	}

	.burger-mid {
		width: 100%;
	}

	.burger-bot {
		width: 60%;
	}
</style>
