export const apiFetchPosts = (page:number) => fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}`)
export const apifetchPostsByAlbum = (albumId:number, page:number) => fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_page=${page}`)
