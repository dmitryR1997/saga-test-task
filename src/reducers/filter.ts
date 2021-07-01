import {AnyAction} from "redux";

const defaultState: {[index: string]:any} = {}

export const UPDATE_FILTER = "UPDATE_FILTER"


export const updateFilter = (payload:any) => ({
    type: UPDATE_FILTER,
    payload
})

export default function filterReducer(state = defaultState, action: AnyAction) {
    switch(action.type) {
        case UPDATE_FILTER:
            return {
                ...state,
                [action.payload.field]: action.payload.value
            }
    }

    return state
}
