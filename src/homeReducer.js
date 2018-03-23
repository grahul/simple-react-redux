const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'HELLO_HOME': {
            return { ...state, sayHello: 'Hello Home' };
        }
        default:
            return state;
    }
};
