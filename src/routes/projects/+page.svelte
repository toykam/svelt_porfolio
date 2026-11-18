<script lang="ts">
	import { fly } from 'svelte/transition';

	type Project = {
		title: string;
		links: { android: string; ios: string; web?: string };
		image: string;
		description: string;
	};
	const projects: Project[] = [
		{
			title: 'Carbin Africa',
			links: {
				android: 'https://play.google.com/store/apps/details?id=com.carbinplatform.app',
				ios: ''
			},
			image:
				'https://play-lh.googleusercontent.com/MN9ynkTfUAB_SdGfstvTHZVqsT_vIlaaERV-35iz08cg5uJb_2ccCH7pYzMBWCaJ3g=w480-h960-rw',
			description:
				'Carbin Africa is your ultimate automotive business partner, connecting Car Agents with a wide network of Car Dealers, offering an extensive and real-time selection of vehicles at competitive prices. With Carbin, you can effortlessly search for cars, book inspections, and manage your sales—all from one powerful platform.'
		},
		{
			title: 'Just Own It',
			links: {
				android: 'https://play.google.com/store/apps/details?id=com.TDAfrica.justownitapp',
				ios: 'https://play.google.com/store/apps/details?id=com.TDAfrica.justownitapp'
			},
			image:
				'https://play-lh.googleusercontent.com/L5liNBiwws_5iqIBailXJGakiD-Y-DqxiMlcanjjrnDhoHR2u28fI63siYCtrdR__2bV=w480-h960-rw',
			description:
				'An instant asset financing application that aggregates credit offerings from different banks in one platform.'
		},
		{
			title: 'Super App',
			links: {
				android: 'https://play.google.com/store/apps/details?id=com.app.super_app_customer',
				ios: ''
			},
			image:
				'https://play-lh.googleusercontent.com/HZrTv5mENxjsJE9AwZ4IUEYBAmJpxdNO819f4t_PdnIzRo2q5bq3WxW7fOtqPn2xIg=w832-h470-rw',
			description:
				'TD Super App is an all-inclusive end-to-end mobile application that allows partners to transact in a convenient and seamless manner.'
		},
		{
			title: 'Zippa Pay',
			links: {
				android: 'https://play.google.com/store/apps/details?id=com.zippapay.app',
				ios: ''
			},
			image:
				'https://play-lh.googleusercontent.com/Q4IzzbXb5HqMHFyHLjRbwV3AZ2rj5PPF7PaWym6EAnDvHt_SjwC_9vkwxxqRM_dNjQ=w832-h470-rw',
			description:
				'Zippa Pay facilitates instant transactions, allowing users to quickly complete payments and access services without delays.'
		},
		{
			title: 'Bill Padi Services',
			links: {
				android: 'https://play.google.com/store/apps/details?id=com.billpadi.android',
				ios: 'https://apps.apple.com/ng/app/billpadi-pay-bills-with-ease/id6497227460'
			},
			image:
				'https://play-lh.googleusercontent.com/CuKdroRAiSC-ICpK7xg4xZPn7VPu9oDPRcVbWO2Nw7iYnB7bPt9p_hMm_yn5ZFbya0Pt=w832-h470-rw',
			description:
				'BillPadi Services Limited is a Value Added Services (VAS) and trading organization that offers instant transaction to their customers.'
		},
		{
			title: 'Restock',
			links: {
				android: '',
				ios: '',
				web: 'https://restockapp.ng/'
			},
			image: 'https://shop.restockapp.ng/og-homepage.png',
			description:
				'The easiest way to shop from your favorite local markets. Fresh produce, transparent pricing, fast delivery.'
		},
		{
			title: 'API to MOJ Converter',
			links: {
				android: '',
				ios: '',
				web: 'https://apidoctojson.vercel.app/'
			},
			image: 'https://apidoctojson.vercel.app/opengraph-image?e58464354d80c6b3',
			description:
				'Transform verbose Swagger/OpenAPI documentation into highly structured, token-efficient JSON for LLMs and AI Agents.'
		},
		{
			title: 'MegaPump',
			links: {
				android: '',
				ios: '',
				web: 'https://www.megapump.app/'
			},
			image: 'https://www.megapump.fun/api/og/home',
			description: 'Launch, trade, and pump meme coins instantly on MegaPump.'
		},
		{
			title: 'Magic Mint',
			links: {
				android: '',
				ios: '',
				web: 'https://www.magicminting.xyz/'
			},
			image: '',
			description: 'Summon unique digital artifacts generated from the ether on Base.'
		},
		{
			title: 'ClawChess Arena',
			links: {
				android: '',
				ios: '',
				web: 'https://clawchess.fun/'
			},
			image: 'https://www.clawchess.fun/opengraph-image?8eefc414916e2603',
			description:
				"The premier arena for autonomous AI agents. Stake CLAWCHESS on the world's most advanced chess engines."
		},
		{
			title: 'Omoluabi Clothings',
			links: {
				android: '',
				ios: '',
				web: 'https://www.omoluabiclothings.com/'
			},
			image: 'https://www.omoluabiclothings.com/logo.png',
			description: 'Authentic Nigerian cultural fashion.'
		}
	];

	let hoveredProject: string | null = null;
</script>

<svelte:head>
	<title>Projects | Abdulkabir Toyyib</title>
	<meta
		name="description"
		content="Explore a collection of premium web and mobile projects developed by Abdulkabir Toyyib."
	/>
	<meta property="og:title" content="Projects | Abdulkabir Toyyib" />
	<meta
		property="og:description"
		content="Explore a collection of premium web and mobile projects developed by Abdulkabir Toyyib."
	/>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
	<div class="mb-16 text-center" in:fly={{ y: -30, duration: 600 }}>
		<h2 class="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
			Featured <span class="text-gradient">Projects</span>
		</h2>
		<p class="mx-auto max-w-2xl text-lg text-zinc-400">
			A selection of my recent work spanning mobile apps to web platforms.
		</p>
	</div>

	<div class="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as { description, image, title, links }, i (title)}
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div
				class="glass group flex flex-col overflow-hidden rounded-2xl border border-zinc-800/50 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]"
				in:fly={{ y: 50, duration: 600, delay: i * 100 }}
				on:mouseenter={() => (hoveredProject = title)}
				on:mouseleave={() => (hoveredProject = null)}
			>
				<div
					class="relative flex h-64 w-full items-center justify-center overflow-hidden border-b border-zinc-800 bg-zinc-900"
				>
					{#if links.web && hoveredProject === title}
						<!-- Live Iframe Preview -->
						<div
							class="absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden bg-black"
						>
							<!-- We use a large iframe and scale it down to fit as a thumbnail so it looks like a mini browser -->
							<div
								class="pointe-events-none h-[800px] w-[1280px] origin-top-left scale-[0.3125] sm:scale-[0.27] md:scale-[0.25] lg:scale-[0.3]"
							>
								<iframe
									src={links.web}
									title="{title} Live Preview"
									class="pointer-events-none h-[800px] w-[1280px] border-none opacity-90"
									loading="lazy"
								></iframe>
							</div>
						</div>
					{:else}
						<!-- Static Image Fallback -->
						<img
							src={image}
							alt={title}
							class="h-full w-full object-cover object-center opacity-80 mix-blend-luminosity transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-100 group-hover:mix-blend-normal"
							loading="lazy"
						/>
					{/if}

					<div
						class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent transition-opacity duration-300 {hoveredProject ===
							title && links.web
							? 'opacity-30'
							: 'opacity-80'}"
					></div>

					{#if hoveredProject !== title || !links.web}
						<h3
							class="absolute bottom-4 left-6 text-2xl font-bold tracking-tight text-white drop-shadow-md transition-opacity duration-300"
						>
							{title}
						</h3>
					{/if}

					{#if links.web}
						<div
							class="absolute right-4 top-4 flex items-center gap-1 rounded-full border border-purple-500/50 bg-purple-500/20 px-2 py-1 text-[10px] font-bold uppercase text-purple-300 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100"
						>
							<span class="h-2 w-2 animate-pulse rounded-full bg-purple-400"></span>
							Live Preview
						</div>
					{/if}
				</div>

				<div class="flex flex-grow flex-col p-6">
					<p class="flex-grow text-justify text-sm leading-relaxed text-zinc-400">{description}</p>

					<div class="relative z-10 mt-6 flex flex-wrap gap-3">
						{#if links.android.length > 0}
							<a
								href={links.android}
								target="_blank"
								class="group/btn relative flex min-w-[100px] flex-1 items-center justify-center overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-300 transition-all duration-300 hover:border-blue-500/50 hover:bg-zinc-700 hover:text-white hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
							>
								<span class="relative z-10">Android</span>
							</a>
						{/if}

						{#if links.ios.length > 0}
							<a
								href={links.ios}
								target="_blank"
								class="group/btn relative flex min-w-[100px] flex-1 items-center justify-center overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-300 transition-all duration-300 hover:border-purple-500/50 hover:bg-zinc-700 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
							>
								<span class="relative z-10">iOS</span>
							</a>
						{/if}

						{#if links.web && links.web.length > 0}
							<a
								href={links.web}
								target="_blank"
								class="group/btn relative flex min-w-[100px] flex-1 items-center justify-center overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-300 transition-all duration-300 hover:border-emerald-500/50 hover:bg-zinc-700 hover:text-white hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]"
							>
								<span class="relative z-10">Web</span>
							</a>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
