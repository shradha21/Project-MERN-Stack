export const findUserName = (user, id) => {
    return user.find(ele => ele.id == id)
}