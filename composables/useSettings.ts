export const useSettings = async () => {
    const { data: userSettings} = await useFetch('/api/user/settings')
    const { data: appSettings } = await useFetch('/api/app/settings')
    const { data: localizationSettings } = await useFetch('/api/localization/settings')

    if (appSettings.value) {
        appSettings.value.devtools.enabled = true
    }

    return {
        userSettings,
        appSettings,
        localizationSettings
    }
}
