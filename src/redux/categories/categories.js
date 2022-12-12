export const CATEGORY_ACTION = {
    STATUS: "category_status"
}

const initial_state = {
    categories: []
}

export default function categoryReducer(state = initial_state, action){
    switch(action.type){
        case CATEGORY_ACTION.STATUS:
            return "Under construction"
        default:
            return state
    }
}