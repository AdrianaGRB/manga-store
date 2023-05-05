export const SELECT_CATEGORY = "SELECT_CATEGORY"

export const selectCategory = (genre) => ({
    type: SELECT_CATEGORY,
    payload: genre,
})