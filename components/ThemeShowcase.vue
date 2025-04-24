<template>
    <div class="space-y-4">
        <div class="p-4 rounded bg-card shadow">
            <h2 class="text-xl font-semibold mb-2">Buttons</h2>
            <div class="space-x-2">
                <button class="bg-primary text-white px-4 py-2 rounded shadow">Primary</button>
                <button class="bg-white text-primary border border-primary px-4 py-2 rounded shadow">Outlined</button>
            </div>
        </div>


        <div class="flex">
            <div class="max-w-sm bg-card border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg" src="/images/demo1.jpg" alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary dark:text-white">Noteworthy
                            technology acquisitions 2021</h5>
                    </a>
                    <p class="mb-3 font-normal text-primary dark:text-gray-400">Here are the biggest enterprise
                        technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#"
                        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

            <div class="py-16 ">
                <div class="grid row-gap-8 sm:grid-cols-3">
                    <div class="text-center px-4">
                        <h6 class="text-5xl font-bold text-primary">144K</h6>
                        <p class="font-bold text-primary">Downloads</p>
                    </div>
                    <div class="text-center px-4">
                        <h6 class="text-5xl font-bold text-primary">12.9K</h6>
                        <p class="font-bold text-primary">Subscribers</p>
                    </div>
                    <div class="text-center px-4">
                        <h6 class="text-5xl font-bold text-primary">27.3K</h6>
                        <p class="font-bold text-primary">Users</p>
                    </div>
                </div>
            </div>

        </div>




    </div>
</template>