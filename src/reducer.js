import { combineReducers } from 'redux';

const INITIAL_DATA = [{
    name: "abc",
    phone: "1234"
}]

const UserReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case "ADD_USER":
            console.log(action);
            return [
                ...state,
                {
                    name: action.name,
                    phone: action.phone,
                    liked: false
                }
            ]
        default:
            return state
    }
}

export const allReducers = combineReducers({
    users: UserReducer
})