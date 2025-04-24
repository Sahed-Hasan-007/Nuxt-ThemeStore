<template>
    <div class="space-y-4">
        <div class="p-4 rounded bg-card shadow">
            <h2 class="text-xl font-semibold mb-2">Buttons</h2>
            <div class="space-x-2">
                <button class="bg-primary text-white px-4 py-2 rounded shadow">Primary</button>
                <button class="bg-white text-primary border border-primary px-4 py-2 rounded shadow">Outlined</button>
            </div>
        </div>


        <a href="#"
            class="flex flex-col items-center bg-card border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src="/images/demo1.jpg" alt="">
            <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">Noteworthy technology
                    acquisitions 2021</h5>
                <p class="mb-3 font-normal text-primary dark:text-gray-400">Here are the biggest enterprise technology
                    acquisitions of 2021 so far, in reverse chronological order.</p>
            </div>
        </a>


    </div>
</template>