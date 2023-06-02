export const useMyFetch = (url, options = {}) => {
    let defaultOptions = {
        headers: {
            Accept: 'application/json'
        }
    }
    console.log('process.server---',process.server);
    console.log('useMyFetch--url--',url);
    console.log('useMyFetch--options--',options);
    if (process.server) {
        console.log('useMyFetch--domain--',process.env.SERVER_DOMAIN);
        defaultOptions.baseURL = process.env.SERVER_DOMAIN
    }
    console.log('useMyFetch--after--options--',Object.assign(defaultOptions, options));
    return useFetch(url, Object.assign(defaultOptions, options))
}
export const useAuthFetch = async (url, options = {}) => {
    const res = await useMyFetch(url, options)
    if (res.error.value && res.error.value.status === 401) {
        await logout()
    }
    return res
}