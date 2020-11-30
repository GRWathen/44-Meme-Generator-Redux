const INITIAL_STATE = [];

function memeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];

        case "DELETE":
            const memes = state.filter(function (value) {
                return (value.id !== action.payload.id);
            });
            return memes;

        default:
            return state;
    }
}

export default memeReducer;
