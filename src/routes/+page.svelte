<script lang="ts">
	import Icon from '@iconify/svelte';
	import { fade, fly, scale } from 'svelte/transition';
	let iconSize = 2;

	const skills = [
		{ icon: 'skill-icons:flutter-light', name: 'Flutter', delay: 100 },
		{ icon: 'skill-icons:nodejs-light', name: 'Node.js', delay: 200 },
		{ icon: 'skill-icons:php-light', name: 'PHP', delay: 300 },
		{ icon: 'skill-icons:javascript', name: 'JavaScript', delay: 400 },
		{ icon: 'skill-icons:typescript', name: 'TypeScript', delay: 500 },
		{ icon: 'skill-icons:svelte', name: 'Svelte', delay: 600 },
		{ icon: 'skill-icons:mysql-light', name: 'MySQL', delay: 700 },
		{
			icon: 'devicon-plain:mongodb-wordmark',
			name: 'MongoDB',
			style: 'color: #ffffff',
			delay: 800
		},
		{ icon: 'skill-icons:graphql-light', name: 'GraphQL', delay: 900 },
		{ icon: 'skill-icons:aws-light', name: 'AWS', delay: 1000 }
	];
</script>

<div class="flex min-h-[80vh] w-full flex-col items-center justify-center py-12">
	<div class="flex w-full max-w-4xl flex-col items-center space-y-10">
		<!-- Glowing Profile Image -->
		<div class="group relative" in:scale={{ duration: 700, delay: 200 }}>
			<div
				class="absolute -inset-1 animate-pulse rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"
			></div>
			<img
				class="relative z-10 h-40 w-40 rounded-full border-4 border-zinc-900 object-cover shadow-2xl"
				src="/favicon.png"
				alt="Abdulkabir Toyyib"
			/>
		</div>

		<div class="space-y-6 text-center">
			<h1
				class="mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-7xl"
				in:fly={{ y: 50, duration: 800, delay: 400 }}
			>
				Abdulkabir <span class="text-gradient">Toyyib</span>
			</h1>

			<p
				class="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl"
				in:fade={{ duration: 800, delay: 600 }}
			>
				Results-driven software engineer with expertise in mobile and web app development. Proven
				track record of delivering innovative solutions and exceeding client expectations. Strong
				problem-solver and team player.
			</p>
		</div>

		<!-- Social Links -->
		<div
			class="glass mt-8 flex items-center justify-center gap-6 rounded-full p-4"
			in:fly={{ y: 30, duration: 600, delay: 800 }}
		>
			<a
				target="_blank"
				href="https://github.com/toykam"
				class="text-zinc-400 transition-all duration-300 hover:scale-110 hover:text-white"
			>
				<Icon icon="bi:github" width="{iconSize}em" height="{iconSize}em" />
			</a>
			<a
				target="_blank"
				href="https://x.com/toykam"
				class="text-zinc-400 transition-all duration-300 hover:scale-110 hover:text-blue-400"
			>
				<Icon icon="logos:twitter" width="{iconSize}em" height="{iconSize}em" />
			</a>
			<a
				target="_blank"
				href="mailto:kabirtoyyib19@gmail.com"
				class="text-zinc-400 transition-all duration-300 hover:scale-110 hover:text-red-400"
			>
				<Icon icon="logos:google-gmail" width="{iconSize}em" height="{iconSize}em" />
			</a>
			<a
				target="_blank"
				href="https://www.linkedin.com/in/abdul-kabir-toyyib-61187a177/"
				class="text-zinc-400 transition-all duration-300 hover:scale-110 hover:text-blue-500"
			>
				<Icon icon="skill-icons:linkedin" width="{iconSize}em" height="{iconSize}em" />
			</a>
		</div>

		<!-- Tech Stack section -->
		<div class="mt-20 w-full" in:fade={{ duration: 800, delay: 1000 }}>
			<p class="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-zinc-500">
				Technologies I Work With
			</p>

			<div class="mx-auto flex max-w-3xl flex-wrap justify-center gap-4 sm:gap-6">
				{#each skills as skill}
					<div
						class="glass flex h-24 w-24 flex-col items-center justify-center gap-2 rounded-xl p-4 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] sm:h-28 sm:w-28"
						in:scale={{ duration: 400, delay: 1000 + skill.delay }}
					>
						<Icon icon={skill.icon} width="2.5em" height="2.5em" style={skill.style || ''} />
						<span class="text-xs font-medium text-zinc-400">{skill.name}</span>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
