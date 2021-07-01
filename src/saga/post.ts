import {put, takeEvery, call} from "redux-saga/effects"

import {FETCH_POSTS, FETCH_POSTS_BY_ALBUM, setPosts} from "../reducers/post";
import {apiFetchPosts, apifetchPostsByAlbum} from "../api/post";

function* fetchPostWorker(action:any) {
    // @ts-ignore
    const data = yield call(apiFetchPosts, action.page)
    // @ts-ignore
    const json = yield call(() => new Promise(res => res(data.json())))

    yield put(setPosts(json))
}

function* fetchPostByAlbumWorker(action:any) {
    // @ts-ignore
    const data = yield call(apifetchPostsByAlbum, action.albumId, action.page)
    // @ts-ignore
    const json = yield call(() => new Promise(res => res(data.json())))

    yield put(setPosts(json))
}

export function* postWatcher() {
    yield takeEvery(FETCH_POSTS, fetchPostWorker)
    yield takeEvery(FETCH_POSTS_BY_ALBUM, fetchPostByAlbumWorker)
}
