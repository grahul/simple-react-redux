const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GET_NEWS': {
            return { ...state, news: action.payload };
        }
        default:
            return state;
    }
};
