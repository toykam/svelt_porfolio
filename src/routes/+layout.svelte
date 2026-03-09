<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import '../app.css';
	import { page } from '$app/stores';

	let menus = [
		{ title: 'Home', path: '/' },
		{ title: 'Projects', path: '/projects' }
	];

	let showSideBar = false;

	function toggleSidebar() {
		showSideBar = !showSideBar;
	}
</script>

<div
	class="flex min-h-screen w-full flex-col items-center bg-[#09090b] font-sans text-zinc-100 selection:bg-purple-500/30"
>
	<!-- Animated background glowing orbs -->
	<div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
		<div
			class="absolute -left-[10%] -top-[20%] h-[50%] w-[50%] animate-pulse rounded-full bg-blue-600/20 blur-[120px]"
			style="animation-duration: 8s;"
		></div>
		<div
			class="absolute -right-[10%] top-[40%] h-[60%] w-[40%] animate-pulse rounded-full bg-purple-600/20 blur-[120px]"
			style="animation-duration: 12s; animation-delay: 2s;"
		></div>
	</div>

	<!-- Glassmorphism Navbar -->
	<header
		class="fixed top-0 z-50 flex w-full justify-center px-4 pb-2 pt-6 transition-all duration-300"
	>
		<nav
			class="glass flex w-full max-w-3xl items-center justify-between rounded-full border border-zinc-800/50 px-6 py-3 shadow-lg shadow-black/50"
			aria-label="Global"
		>
			<div class="flex lg:flex-1">
				<a href="/" class="group -m-1.5 flex items-center gap-2 p-1.5">
					<span
						class="bg-gradient-to-r from-zinc-100 to-zinc-500 bg-clip-text text-xl font-bold tracking-tighter text-transparent transition-all duration-500 group-hover:from-blue-400 group-hover:to-purple-500"
					>
						AT.
					</span>
				</a>
			</div>

			<!-- Mobile Menu Button -->
			<div class="flex sm:hidden">
				<button
					on:click={toggleSidebar}
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
				</button>
			</div>

			<!-- Desktop Menu -->
			<div class="hidden items-center sm:flex sm:gap-x-8">
				{#each menus as menu (menu.path)}
					<a
						href={menu.path}
						class="relative px-2 py-1 text-sm font-medium transition-all duration-300
                               {$page.url.pathname === menu.path
							? 'text-white'
							: 'text-zinc-400 hover:text-white'}"
					>
						{menu.title}
						{#if $page.url.pathname === menu.path}
							<span
								class="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]"
								in:fade={{ duration: 300 }}
							></span>
						{/if}
					</a>
				{/each}
			</div>
		</nav>
	</header>

	<!-- Mobile Slide-over Menu -->
	{#if showSideBar}
		<div class="sm:hidden" role="dialog" aria-modal="true">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
				transition:fade={{ duration: 200 }}
				on:click={toggleSidebar}
			></div>
			<div
				class="fixed inset-y-0 right-0 z-[70] w-full max-w-[280px] overflow-y-auto border-l border-zinc-800 bg-zinc-950/95 px-6 py-6 shadow-2xl backdrop-blur-xl"
				transition:fly={{ x: 300, duration: 300, opacity: 1 }}
			>
				<div class="mb-8 flex items-center justify-between">
					<a href="/" class="text-gradient -m-1.5 p-1.5 text-xl font-bold tracking-tighter">AT.</a>
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
						on:click={toggleSidebar}
					>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="flow-root">
					<div class="-my-6 divide-y divide-zinc-800">
						<div class="space-y-1 py-6">
							{#each menus as menu (menu.path)}
								<a
									on:click={toggleSidebar}
									href={menu.path}
									class="-mx-3 block rounded-lg px-3 py-3 text-base font-medium transition-all duration-200
                                           {$page.url.pathname === menu.path
										? 'bg-white/10 text-white'
										: 'text-zinc-400 hover:bg-white/5 hover:text-white'}"
								>
									{menu.title}
								</a>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}

	<!-- Main Content Area with Page Transitions Wrapper -->
	<main
		class="relative z-10 mx-auto mb-20 mt-32 flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8"
		in:fade={{ duration: 400, delay: 100 }}
	>
		<slot></slot>
	</main>

	<!-- Footer -->
	<footer
		class="glass relative z-10 mt-auto w-full max-w-4xl rounded-t-3xl border-0 border-t border-zinc-800/50 py-8 text-center text-sm text-zinc-500"
	>
		<p>© {new Date().getFullYear()} Abdulkabir Toyyib. All rights reserved.</p>
	</footer>
</div>
