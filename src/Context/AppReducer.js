export default (state, action) => {
    switch (action.type) {
        case "ERROR":
            return {
                ...state,
                isError: true
            }
        case "GET_API_DATA":
            return {
                users: action.payload,
                isError: false
            }
        case 'ADD_USER':
            return {
                ...state,
                users: [action.payload, ...state.users],
                isError: false
            }
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => {
                    return user.id !== action.payload;
                })
            }
        case 'GET_SINGLE_DATA':
           return {
            users: action.payload,
            isError: false
            }     
            case 'EDIT_USER':
                const updateUser = action.payload;
                const updateUsers = state.users.map(user => {
                  if (user.id === updateUser.id) {
                    return updateUser;
                  }
                  return user;
                })
                return {
                  ...state,
                  users: updateUsers
                }    
        default:
            return state
    }
}