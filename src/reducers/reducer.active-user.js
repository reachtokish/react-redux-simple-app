export default function(state=null, action) {
    switch (action.type) {
        case 'USER_SELECTED':
            return action.payload;
            break;
        case 'USER_LIKE':
            console.log(action.payload);
            console.log(state);
            return action.payload;
            break;
    }
    return state;
}