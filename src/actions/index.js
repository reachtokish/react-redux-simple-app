export const selectUser = (user) => {
    return {
        type: "USER_SELECTED",
        payload: user
    }
}

export const doLikeUser = (user) => {
    return {
        type: "USER_LIKE",
        payload: user
    }
}