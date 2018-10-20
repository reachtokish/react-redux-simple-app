import { combineReducers } from 'redux';

const INITIAL_DATA = []

const UserReducer = (state=INITIAL_DATA, action) => {
    switch (action.type){
        case "ADD_USER":
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    phone: action.payload.phone,
                    liked: false
                }
            ]
        case "LIKE_USER":
            return state.map(elm => {
                return (elm.id === action.payload.id) ? {...elm, liked: !elm.liked} : elm
            })
        default:
            return state
    }
}

const FilterUser = (state = "SHOW_ALL", action) => {
    switch (action.type) {
        case "DO_FILTER":
            return action.payload
        default:
            return state;
    }
}

export const allReducers = combineReducers({
    users: UserReducer,
    filterUser: FilterUser
})