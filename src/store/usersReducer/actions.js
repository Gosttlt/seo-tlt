import { usersAPI } from 'api/api'
import { SET_USERS, SET_LOADINGFLAG, SWITCH_PAGE, SET_USER, SET_LOADINGFLAGMODAL } from './type'

const setUser = (user) => ({ type: SET_USER, user })
const setUsers = (users) => ({ type: SET_USERS, users })
const setIsLoading = (isLoading) => ({ type: SET_LOADINGFLAG, isLoading })
const setIsLoadingModal = (isLoading) => ({ type: SET_LOADINGFLAGMODAL, isLoading })

export const setPageNumber = (pageNumber) => ({ type: SWITCH_PAGE, pageNumber })

export const fetchSetUser = (userName) => async (dispatch) => {
    dispatch(setIsLoadingModal(true))
    const user = await usersAPI.getUser(userName)
    dispatch(setUser(user))
    dispatch(setIsLoadingModal(false))
}
export const fetchSetUsers = () => async (dispatch) => {
    dispatch(setIsLoading(true))
    const users = await usersAPI.getUsers()
    dispatch(setUsers(users))
    dispatch(setIsLoading(false))
}

