import { SET_USERS, SET_LOADINGFLAG, SET_LOADINGFLAGMODAL, SWITCH_PAGE, SET_USER } from './type'

const initialState = {
    users: [],
    user: {},
    isLoadingUsers: false,
    isLoadingModal: false,
    currentPage: 1,
    portionUsers: 9,
    totalPage: 1,
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            }

        case SET_USER:
            return {
                ...state,
                user: { ...action.user },
            }

        case SET_LOADINGFLAG:
            return {
                ...state,
                isLoadingUsers: action.isLoading
            }
        case SET_LOADINGFLAGMODAL:
            return {
                ...state,
                isLoadingModal: action.isLoading
            }

        case SWITCH_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber
            }

        default:
            return state;
    }
}

export default usersReducer