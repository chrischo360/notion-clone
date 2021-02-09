export let accessToken: string | null | undefined = ""

export const setAccessToken = (token: string | null | undefined) => {
    accessToken = token
}

export const getAccessToken = () => {
    return accessToken
}