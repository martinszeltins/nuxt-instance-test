export default defineEventHandler(async () => {
    return {
        theme: 'light',
        notifications: {
            email: true,
        },
        account: {
            username: 'admin',
            email: 'admin@app.com',
        },
        security: {
            twoFactor: false,
        },
    }
})
