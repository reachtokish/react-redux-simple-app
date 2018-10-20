// export const addUser = (user) => ({
//     type: "ADD_USER",
//     name: user.name,
//     phone: user.phone
// })

export function addUser(user) {
    console.log(user);
    return {
        type: "ADD_USER",
        payload: user
    }
}