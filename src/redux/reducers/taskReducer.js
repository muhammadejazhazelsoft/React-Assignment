


const initialState = {
    UsersData: [
        {
            id: 1,
            userName: "ejaz",
            userEmail: 'ejaz.cs44@gmail.com',
            userPassword: 'ejazejaz',
        },
        {
            id: 2,
            userName: "usman",
            userEmail: 'usman.cs44@gmail.com',
            userPassword: 'ejazejaz'
        },
        {
            id: 3,
            userName: "faizan",
            userEmail: 'faizan.cs44@gmail.com',
            userPassword: 'ejazejaz'
        },
    ],
    isLoggedIn: false
};


const taskReducer = (state = initialState, action) => {
    console.log('this is me redux', action.payload)
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