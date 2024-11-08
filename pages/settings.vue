<template>
    <div class="min-h-screen bg-gray-900 text-white p-8">
        <h1 class="text-3xl font-bold mb-8 text-center">
            Settings
        </h1>

        <div class="space-y-6">
            <!-- User Settings Section -->
            <section class="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold mb-4">
                    User Settings
                </h2>

                <ul class="space-y-2">
                    <li v-for="(value, key) in userSettings" :key="key" class="flex justify-between items-center">
                        <span class="text-gray-300">{{ key }}</span>
                        <span>{{ value }}</span>
                    </li>
                </ul>
            </section>

            <!-- App Settings Section -->
            <section class="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold mb-4">
                    App Settings
                </h2>

                <ul class="space-y-2">
                    <li v-for="(value, key) in appSettings" :key="key" class="flex justify-between items-center">
                        <span class="text-gray-300">{{ key }}</span>
                        <span>{{ value }}</span>
                    </li>
                </ul>
            </section>

            <!-- Localization Settings Section -->
            <section class="bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold mb-4">
                    Localization Settings
                </h2>
                
                <ul class="space-y-2">
                    <li v-for="(value, key) in localizationSettings" :key="key" class="flex justify-between items-center">
                        <span class="text-gray-300">{{ key }}</span>
                        <span>{{ value }}</span>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
    const { userSettings, appSettings, localizationSettings } = await useSettings()
</script>
