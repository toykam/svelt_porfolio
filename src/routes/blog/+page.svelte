<script lang="ts">
	import { fly } from 'svelte/transition';

	// Placeholder data for external blog posts
	type BlogPost = {
		title: string;
		description: string;
		url: string;
		date: string;
		source: 'Medium' | 'Dev.to' | 'Hashnode' | string;
		readTime: string;
		image?: string;
	};

	const posts: BlogPost[] = [
		{
			title: 'Creating Receipt Sharing Functionality in a Flutter Fintech App',
			description:
				"In today's digital landscape, sharing transaction receipts effortlessly is crucial for any fintech...",
			url: 'https://dev.to/dev_toykam/creating-receipt-sharing-functionality-in-a-flutter-fintech-app-23g5',
			date: 'Recent',
			source: 'Dev.to',
			readTime: '5 min read',
			image:
				'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F2h0evmu3h11az56ednjf.jpeg'
		},
		{
			title: 'Stop Feeding Your AI Agents Fluff: Introducing API to MOJ Converter',
			description:
				'🤖 The "Unstructured" Problem   We are living in the golden age of AI Agents. We want them to...',
			url: 'https://dev.to/dev_toykam/stop-feeding-your-ai-agents-fluff-introducing-api-to-moj-converter-2g3b',
			date: 'Recent',
			source: 'Dev.to',
			readTime: '5 min read',
			image:
				'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F9gwxnszixwt4cbey4y28.png'
		},
		{
			title: 'My Journey into Nested Functions in Dart: From Curiosity to Clarity.',
			description:
				'While scrolling through Stack Overflow questions one day, I stumbled upon a piece of code that used...',
			url: 'https://dev.to/dev_toykam/my-journey-into-nested-functions-in-dart-from-curiosity-to-clarity-2kc3',
			date: 'Recent',
			source: 'Dev.to',
			readTime: '5 min read',
			image:
				'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fy0qep5xnbjqr8izy3l1d.png'
		},
		{
			title:
				'Why Abstracting Business Logic from the Start Saves You Hours of Refactoring: A Lesson from Swapping GetX to GoRouter',
			description:
				'In Software development, navigation is one of the most crucial parts of a user experience. So when I...',
			url: 'https://dev.to/dev_toykam/why-abstracting-business-logic-from-the-start-saves-you-hours-of-refactoring-a-lesson-from-swapping-getx-to-gorouter-2bma',
			date: 'Recent',
			source: 'Dev.to',
			readTime: '5 min read',
			image:
				'https://media2.dev.to/dynamic/image/width=1000,height=500,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhn4yrm1o4akqg0l3lxpg.png'
		}
	];
</script>

<svelte:head>
	<title>Blog | Abdulkabir Toyyib</title>
	<meta
		name="description"
		content="Read thoughts, tutorials, and insights on software engineering and modern web technologies by Abdulkabir Toyyib."
	/>
	<meta property="og:title" content="Blog | Abdulkabir Toyyib" />
	<meta
		property="og:description"
		content="Read thoughts, tutorials, and insights on software engineering and modern web technologies by Abdulkabir Toyyib."
	/>
</svelte:head>

<div
	class="mx-auto flex w-full max-w-7xl flex-grow flex-col items-center px-4 py-12 sm:px-6 lg:px-8"
>
	<div class="mb-16 w-full max-w-3xl text-center" in:fly={{ y: -30, duration: 600 }}>
		<h2 class="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
			Latest <span class="text-gradient">Writings</span>
		</h2>
		<p class="mx-auto max-w-2xl text-lg text-zinc-400">
			Thoughts, tutorials, and insights on software engineering, UI/UX design, and the latest web
			technologies.
		</p>
	</div>

	<div class="mx-auto flex w-full max-w-4xl flex-col gap-6">
		{#each posts as post, i}
			<a
				href={post.url}
				target="_blank"
				rel="noopener noreferrer"
				class="glass duration-400 group relative flex cursor-pointer flex-col items-center gap-6 overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)] sm:flex-row"
				in:fly={{ y: 30, duration: 500, delay: i * 150 }}
			>
				<!-- Image Section (if available) -->
				{#if post.image}
					<div
						class="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-48"
					>
						<img
							src={post.image}
							alt={post.title}
							class="h-full w-full origin-center object-cover opacity-80 mix-blend-luminosity transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal"
						/>
						<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
					</div>
				{/if}

				<!-- Content Section -->
				<div class="flex w-full flex-grow flex-col justify-center space-y-3">
					<!-- Meta info row -->
					<div class="flex items-center gap-4 text-xs font-medium text-zinc-500">
						<span
							class="flex items-center gap-1.5 rounded-md border border-zinc-700/50 bg-zinc-800/80 px-2.5 py-1 text-zinc-300"
						>
							{#if post.source === 'Medium'}
								<!-- Medium dot icon -->
								<span class="h-1.5 w-1.5 rounded-full bg-white"></span>
							{:else if post.source === 'Dev.to'}
								<!-- Dev.to distinct color -->
								<span class="h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
							{:else}
								<span class="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
							{/if}
							{post.source}
						</span>
						<span>{post.date}</span>
						<span class="h-1 w-1 rounded-full bg-zinc-700"></span>
						<span>{post.readTime}</span>
					</div>

					<!-- Title & Description -->
					<h3
						class="text-xl font-bold text-zinc-100 transition-colors duration-300 group-hover:text-blue-400"
					>
						{post.title}
					</h3>

					<p class="line-clamp-2 text-sm leading-relaxed text-zinc-400">
						{post.description}
					</p>
				</div>

				<!-- Open icon -->
				<div
					class="absolute right-6 top-6 hidden text-zinc-600 transition-colors group-hover:text-blue-500 sm:relative sm:inset-auto sm:flex"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
					>
						<path d="M7 17l9.2-9.2M17 17V7H7" />
					</svg>
				</div>
			</a>
		{/each}
	</div>
</div>
