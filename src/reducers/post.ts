const defaultState = {
    list: []
}

export const SET_POSTS = "SET_POSTS"
export const FETCH_POSTS = "FETCH_POSTS"
export const FETCH_POSTS_BY_ALBUM = "FETCH_POSTS_BY_ALBUM"

export const setPosts = (payload:any) => ({
    type: SET_POSTS,
    payload
})

export const fetchPosts = (page:number) => ({
    type: FETCH_POSTS,
    page
})

export const fetchPostsByAlbum = (albumId:number, page:number) => ({
    type: FETCH_POSTS_BY_ALBUM,
    albumId,
    page
})

export default function postReducer(state = defaultState, action:any) {
    switch(action.type) {
        case SET_POSTS:
            return {
                ...state,
                list: action.payload
            }
    }

    return state
}
