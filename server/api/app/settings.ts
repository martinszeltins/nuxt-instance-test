export default defineEventHandler(async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    return {
        compatibilityDate: '2024-04-03',
        devtools: { enabled: true },
        modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
    }
})
