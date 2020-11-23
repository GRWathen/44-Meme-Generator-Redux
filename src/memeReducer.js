const INITIAL_STATE = [];

function memeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];

        case "DELETE":
            return state;

        default:
            return state;
    }
}

export default memeReducer;
