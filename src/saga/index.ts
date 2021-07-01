import {all} from "redux-saga/effects"
import {postWatcher} from "./post"

export function* rootWatcher() {
    yield all([postWatcher()])
}
