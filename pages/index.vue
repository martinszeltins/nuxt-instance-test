<template>
    <div class="flex flex-col items-center justify-center text-gray-200 gap-6">
        <p>Normal click works. 👇 Open in new tab does not work.</p>

        <NuxtLink
            to="/settings"
            class="px-8 py-4 text-2xl font-semibold bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-600 rounded-lg transition-all 
            shadow-[0_0_4px_rgba(34,197,94,0.3),_0_0_8px_rgba(34,197,94,0.2),_0_0_12px_rgba(22,163,74,0.3),_0_0_16px_rgba(21,128,61,0.3)]">

            Go to Settings
        </NuxtLink>
    </div>
</template>
