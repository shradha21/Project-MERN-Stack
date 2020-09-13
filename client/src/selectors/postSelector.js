export const findPost = (post,id) => {
    return post.filter(ele => ele.id == id)
}