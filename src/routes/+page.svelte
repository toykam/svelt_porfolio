<script>
    import Icon from "@iconify/svelte";
	import { fade, scale } from "svelte/transition";
    let iconSize = 2;


</script>
<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
    <div class="hidden sm:mb-8 sm:flex sm:justify-center">
    <!-- <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
    </div> -->
    </div>
    <div class=" flex-col flex items-center space-y-8">

        <div class=" w-full item-center flex justify-center">
            <img class=" rounded-full" src="favicon.png" alt="profileimage" in:scale out:scale>
        </div>

        <h1 class="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" in:scale={{
            delay: 300
        }} out:scale>Abdulkabir Toyyib</h1>
        <p class="mt-6 text-lg leading-8 text-gray-600 text-center" in:fade={{
            delay: 500
        }} out:fade>Results-driven software engineer with expertise in mobile and web app development. Proven track record of delivering innovative solutions and exceeding client expectations. Strong problem-solver and team player.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <a target="_blank" href="https://github.com/toykam" out:scale in:scale={{delay: 600}}>
                <Icon icon="bi:github" width="{iconSize}em" height="{iconSize}em" />
            </a>
            <a target="_blank" href="https://x.com/toykam" out:scale in:scale={{delay: 800}}>
                <Icon icon="logos:twitter" width="{iconSize}em" height="{iconSize}em" />
            </a>
            <a target="_blank" href="mail:to/kabirtoyyib19@gmail.com" out:scale in:scale={{ delay: 1000}}>
                <Icon icon="logos:google-gmail" width="{iconSize}em" height="{iconSize}em" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/abdul-kabir-toyyib-61187a177/" out:scale in:scale={{delay: 1200}}>
                <Icon icon="skill-icons:linkedin" width="{iconSize}em" height="{iconSize}em" />
            </a>
        </div>
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <a target="_blank" href="/" out:scale in:scale={{delay: 600}}>
                <Icon icon="skill-icons:flutter-light" width="3em" height="3em" />
            </a>
            <a target="_blank" href="/" out:scale in:scale={{delay: 800}}>
                <Icon icon="skill-icons:nodejs-light" width="3em" height="3em" />
            </a>
            <a target="_blank" href="/" out:scale in:scale={{ delay: 1000}}>
                <Icon icon="skill-icons:php-light" width="3em" height="3em" />
            </a>
            <a target="_blank" href="/" out:scale in:scale={{delay: 1500}}>
                <Icon icon="skill-icons:javascript" width="3em" height="3em" />
            </a>
            <a target="_blank" href="/" out:scale in:scale={{delay: 1500}}>
                <Icon icon="skill-icons:typescript" width="3em" height="3em" />
            </a>
            <a target="_blank" href="/" out:scale in:scale={{delay: 1500}}>
                <Icon icon="skill-icons:svelte" width="3em" height="3em" />
            </a>
            <a target="_blank" href="/" out:scale in:scale={{delay: 1500}}>
                <Icon icon="skill-icons:aws-light" width="3em" height="3em" />
            </a>
        </div>
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <a target="_blank" href="/" out:scale in:scale={{delay: 1200}}>
                <Icon icon="skill-icons:mysql-light" width="3em" height="3em" />
            </a>
            <a target="_blank" href="/" out:scale in:scale={{delay: 1400}}>
                <Icon icon="devicon-plain:mongodb-wordmark" width="3em" height="3em"  style="color: #000000" />
            </a>
            <a target="_blank" href="/" out:scale in:scale={{delay: 1400}}>
                <Icon icon="skill-icons:graphql-light" width="3em" height="3em" />
            </a>
        </div>
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <a target="_blank" href="/" out:scale in:scale={{delay: 1500}}>
                <Icon icon="skill-icons:aws-light" width="3em" height="3em" />
            </a>
        </div>
    </div>
</div>



  