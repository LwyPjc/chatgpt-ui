
export default defineNuxtRouteMiddleware(async (to, from) => {
    console.log('middleware--to--', to);
    // let user = useUser();
    console.log('middleware--from--', from)

    const user = useUser()
    console.log('user---',user)
    console.log('user--value--',user.value);

    const signInPath = '/account/signin'
    if (!user.value && to.path !== signInPath) {
        console.log('into if--');

        const { error, data} = await fetchUser()
        console.log('auth---data--',data.value.data);

        if (error.value) {
            console.log('error===value====',error);

            return navigateTo({
                path: signInPath,
                query: {
                    callback: encodeURIComponent(to.fullPath)
                }
            })
        } else {

            setUser(data.value.data)
        }
    }
})
