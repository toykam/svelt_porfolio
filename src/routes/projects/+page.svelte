<script lang="ts">
	import { fade, scale } from "svelte/transition";

    type Project = {
        title: string;
        links: {android: string, ios: string, web?: string};
        image: string;
        description: string;
    }
    const projects: Project[] = [
        {
            "title": "Carbin Africa",
            "links": {
                "android": "https://play.google.com/store/apps/details?id=com.carbinplatform.app",
                "ios": "https://apps.apple.com/us/app/carbin/id6502053066"
            },
            "image": "https://play-lh.googleusercontent.com/MN9ynkTfUAB_SdGfstvTHZVqsT_vIlaaERV-35iz08cg5uJb_2ccCH7pYzMBWCaJ3g=w480-h960-rw",
            "description": "Carbin Africa is your ultimate automotive business partner, connecting Car Agents with a wide network of Car Dealers, offering an extensive and real-time selection of vehicles at competitive prices. With Carbin, you can effortlessly search for cars, book inspections, and manage your sales—all from one powerful platform."
        },
        {
            "title": "Just Own It",
            "links": {
                'android': "https://play.google.com/store/apps/details?id=com.TDAfrica.justownitapp",
                'ios': "https://play.google.com/store/apps/details?id=com.TDAfrica.justownitapp"
            },
            "image": "https://play-lh.googleusercontent.com/L5liNBiwws_5iqIBailXJGakiD-Y-DqxiMlcanjjrnDhoHR2u28fI63siYCtrdR__2bV=w480-h960-rw",
            "description": "An instant asset financing application that aggregates credit offerings from different banks in one platform."
        },
        {
            "title": "Super App",
            "links": {
                "android": "https://play.google.com/store/apps/details?id=com.app.super_app_customer",
                "ios": ""
            },
            "image": "https://play-lh.googleusercontent.com/HZrTv5mENxjsJE9AwZ4IUEYBAmJpxdNO819f4t_PdnIzRo2q5bq3WxW7fOtqPn2xIg=w832-h470-rw",
            "description": "TD Super App is an all-inclusive end-to-end mobile application that allows partners to transact in a convenient and seamless manner."
        },
        {
            "title": "Zippa Pay",
            "links": {
                "android": "https://play.google.com/store/apps/details?id=com.zippapay.app",
                "ios": ""
            },
            "image": "https://play-lh.googleusercontent.com/Q4IzzbXb5HqMHFyHLjRbwV3AZ2rj5PPF7PaWym6EAnDvHt_SjwC_9vkwxxqRM_dNjQ=w832-h470-rw",
            "description": "Zippa Pay facilitates instant transactions, allowing users to quickly complete payments and access services without delays."
        },
        {
            "title": "Bill Padi Services",
            "links": {
                "android": "https://play.google.com/store/apps/details?id=com.billpadi.android",
                "ios": "https://apps.apple.com/ng/app/billpadi-pay-bills-with-ease/id6497227460"
            },
            "image": "https://play-lh.googleusercontent.com/CuKdroRAiSC-ICpK7xg4xZPn7VPu9oDPRcVbWO2Nw7iYnB7bPt9p_hMm_yn5ZFbya0Pt=w832-h470-rw",
            "description": "BillPadi Services Limited is a Value Added Services (VAS) and trading organization that offers instant transaction to their customers."
        },
        {
            "title": "TeddyEd",
            "links": {
                "android": "https://play.google.com/store/apps/details?id=com.teddyed.app",
                "ios": ""
            },
            "image": "https://play-lh.googleusercontent.com/m2OFZGzKeLFEVYE6IZNpRwKAbIJNVM9GTd_kllXQJkP6wDCpEvRriO0M-CRVLF6cgw=w832-h470-rw",
            "description": "TeddyED is a cutting-edge edutech application built to streamline operations in schools."
        },
        {
            "title": "Puzzle Hunt",
            "links": {
                "android": "",
                "ios": "",
                "web": "https://hunt.basedbobr.com"
            },
            "image": "https://hunt.basedbobr.com/ogimage.webp",
            "description": "Puzzle Hunt is an engaging online game that challenges players to solve puzzles and complete tasks."
        },
    ];
</script>



<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
    <h2 class="text-2xl font-bold text-gray-900">Projects</h2>

    <div class="mt-6 gap-y-10 grid lg:grid-cols-3 lg:gap-12 items-center">

        {#each projects as { description, image, title, links }, i (title)}

            <div class="group relative" in:fade out:scale>
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img src="{ image }" alt="{ description }" class="h-full w-full object-cover object-center">
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                    <span class="absolute inset-0"></span>
                        { title }
                </h3>
                <p class="text-base font-semibold text-gray-900 text-justify">{ description }</p>
                <div class="mt-4 grid grid-cols-4 gap-4">
                    <!-- Active: "ring-2 ring-indigo-500" -->
                    <a href="{ links.android }" class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-12 py-2 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                      <input type="radio" name="size-choice" value="Android-{ title }" class="sr-only">
                      <span>Android</span>
                      <!--
                        Active: "border", Not Active: "border-2"
                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                      -->
                      <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                    </a>
                    {#if links.ios.length > 0}
                        <a href="{ links.ios }" class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-12 py-2 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                        <input type="radio" name="size-choice" value="iOS-{ title }" class="sr-only">
                        <span>iOS</span>
                        <!--
                            Active: "border", Not Active: "border-2"
                            Checked: "border-indigo-500", Not Checked: "border-transparent"
                        -->
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </a>
                    {/if}

                    {#if (links.web && links.web.length > 0)}
                        <a href="{ links.web }" class="group relative flex cursor-pointer items-center justify-center rounded-md border bg-white px-12 py-2 text-sm font-medium uppercase text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none sm:flex-1">
                        <input type="radio" name="size-choice" value="Web-{ title }" class="sr-only">
                        <span>Web</span>
                        <!--
                            Active: "border", Not Active: "border-2"
                            Checked: "border-indigo-500", Not Checked: "border-transparent"
                        -->
                        <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                        </a>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
  </div>
</div>