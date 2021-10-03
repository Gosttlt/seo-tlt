import { createSelector } from 'reselect'

export const getUser = state => state.usersReducer.user
export const getUsers = state => state.usersReducer.users
export const getLoadingFlag = state => state.usersReducer.isLoadingUsers
export const getLoadingFlagModal = state => state.usersReducer.isLoadingModal
export const getCurrentPage = state => state.usersReducer.currentPage
export const getPortionUsers = state => state.usersReducer.portionUsers

export const getTotalPages = createSelector(getUsers, getPortionUsers, (users, portion) => {
    const pages = Math.ceil(users.length / portion)
    return Array(pages).fill().map((e, i) => i + 1)
})

export const getUsersPortion = createSelector(getUsers, getPortionUsers, getCurrentPage, (users, portion, currentPage) => {
    const start = (currentPage - 1) * portion
    const end = currentPage * portion

    return users.slice(start, end)
})