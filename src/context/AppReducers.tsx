import AppActions from "./AppActions";

const reducer = (state, action) => {
    switch (action.type) {
        case AppActions.UPDATE_NUM:
            return {...state, test: action.num}

        default:
            return state
    }
}

export default reducer