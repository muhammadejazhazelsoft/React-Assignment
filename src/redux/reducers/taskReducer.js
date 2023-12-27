


const initialState = {
    UsersData: [],
    isLoggedIn: false
};


const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'login':
            return {
                ...state,
                isLoggedIn: action.payload
            };
        case 'ADD_USER':
            return {
                ...state,
                UsersData: action.payload
            };
        case 'logout':
            return {
                ...state,
                isLoggedIn: action.payload
            };
        default:
            return state;
    }
};

export default taskReducer;