let userId = 0;

export function addUser(user) {
    let newUser = user;
    newUser.id = userId++;
    return {
        type: "ADD_USER",
        payload: newUser
    }
}

export function likeUser(user) {
    return {
        type: "LIKE_USER",
        payload: user
    }
}

export function filterUser(filter_type) {
    return {
        type: "DO_FILTER",
        payload: filter_type
    }
}