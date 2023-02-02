<script lang="ts">
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import Logo from '$lib/components/Logo.svelte';
	import Button from '$lib/components/Button.svelte';
	import RightArrow from '$lib/components/RightArrow.svelte';

	let menuOpen: boolean = false;
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
<header class="fixed top-0 z-40 w-full bg-gradient-to-b from-black/40 to-black/5 backdrop-blur-sm">
	<div class="container mx-auto px-4 pb-4 pt-6 xl:pt-8 2xl:pt-10">
		<div class="flex items-center justify-between">
			<div>
				<a href="/">
					<div class="2xl:w-22 w-8 md:w-12 xl:w-16">
						<Logo />
					</div>
				</a>
			</div>
			<div class="hidden md:block">
				<nav class="flex gap-4 text-sm font-medium text-gray-50 lg:ml-44 lg:gap-10 xl:gap-14">
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
						class:text-custom-primary-1={$page.url.pathname === '/contact'}
						class:font-bold={$page.url.pathname === '/contact'}
						href="/contact">CONTACT US</a
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
					class="flex h-7 w-7 flex-col justify-center gap-1 md:hidden"
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
		class="fixed top-0 left-0 z-50 h-screen w-screen bg-bg-primary-1"
		transition:fly={{ x: 200 }}
	>
		<div class="flex items-center justify-between bg-bg-primary-1 px-4 pb-4 pt-10 drop-shadow-lg">
			<div class="flex items-center gap-5">
				<div class="w-8">
					<Logo />
				</div>
				<h1 class="text-lg font-bold text-gray-50">Artadvisory</h1>
			</div>
			<button class="relative h-7 w-7" on:click={() => (menuOpen = false)}>
				<div
					class="burger-menu absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 rotate-45"
				/>
				<div
					class="burger-menu absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 -rotate-45"
				/>
			</button>
		</div>
		<div class="h-full">
			<div class="text-gray-50">
				<ul>
					<li>
						<a
							class="flex items-center justify-between border-b-2 border-bg-primary-2/20 py-4 px-4"
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
							class="flex items-center justify-between border-b-2 border-bg-primary-2/20 py-4 px-4"
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
							class="flex items-center justify-between border-b-2 border-bg-primary-2/20 py-4 px-4"
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
							class="flex items-center justify-between border-b-2 border-bg-primary-2/20 py-4 px-4"
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
			<div class="mt-8 flex justify-center gap-8">
				<div>
					<a
						class="font-spartan rounded bg-gradient-to-br from-custom-primary-1 to-custom-primary-2 py-4 px-8 text-center"
						href="/auth/login"
						on:click={() => (menuOpen = false)}
					>
						Login
					</a>
				</div>
				<div>
					<a
						class="font-spartan rounded bg-gradient-to-br from-custom-primary-1 to-custom-primary-2 py-4 px-8 text-center"
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
